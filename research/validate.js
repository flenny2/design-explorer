#!/usr/bin/env node
// Corpus integrity validator for research/ — zero dependencies, Node stdlib only.
//
// Mechanically enforces the rules SCHEMA.md holds by convention, so "count drift"
// and broken `related` cross-links can never pass silently again. Run via
// `npm run validate:corpus`. Exits 0 when clean, 1 (with a report) when not.
//
// Usage: node research/validate.js [corpusRoot]
//   corpusRoot defaults to this script's own directory (research/). A different
//   root — e.g. a test fixture — lets us prove the checks actually fire without
//   mutating real data. The root must contain manifest.json and a data/ dir.

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// SCHEMA.md §"Entry object": these keys must exist in every entry.
const REQUIRED_ENTRY_FIELDS = [
  'id', 'name', 'category', 'tags', 'summary',
  'significance', 'key_facts', 'sources', 'confidence',
];
// SCHEMA.md §"confidence scale": the only legal values.
const VALID_CONFIDENCE = new Set(['verified', 'well-known', 'needs-check']);

const corpusRoot = process.argv[2]
  ? process.argv[2]
  : dirname(fileURLToPath(import.meta.url));
const dataDir = join(corpusRoot, 'data');
const manifestPath = join(corpusRoot, 'manifest.json');

const errors = [];
const fail = (context, msg) => errors.push(`${context}: ${msg}`);

// Parse JSON with a readable error instead of a raw stack trace.
function readJson(path, context) {
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch (err) {
    fail(context, `unreadable or invalid JSON — ${err.message}`);
    return null;
  }
}

// --- Pass 1: validate each dataset file, and collect corpus-wide id/related sets ---
// globalIds holds every id in the corpus (ids are unique *per file* but reused
// across files by design — SCHEMA rule 4 — so `related` resolves against the union).
const globalIds = new Set();
const relatedRefs = []; // { id, context } — checked in pass 2 once globalIds is complete
const fileEntryCounts = new Map(); // filename -> entries.length, for manifest cross-check
let needsCheckCount = 0;

if (!existsSync(dataDir)) {
  fail('data/', `directory not found under ${corpusRoot}`);
}

const dataFiles = existsSync(dataDir)
  ? readdirSync(dataDir).filter((f) => f.endsWith('.json')).sort()
  : [];

for (const file of dataFiles) {
  const context = `data/${file}`;
  const dataset = readJson(join(dataDir, file), context);
  if (!dataset) continue;

  if (!Array.isArray(dataset.entries)) {
    fail(context, 'missing or non-array "entries"');
    continue;
  }
  const entries = dataset.entries;
  fileEntryCounts.set(file, entries.length);

  // Core anti-drift rule: the declared count must equal reality.
  if (dataset.count !== entries.length) {
    fail(context, `count ${dataset.count} != entries.length ${entries.length}`);
  }

  const seenIds = new Set();
  entries.forEach((entry, i) => {
    const at = `${context}[${i}]${entry && entry.id ? ` id="${entry.id}"` : ''}`;

    for (const field of REQUIRED_ENTRY_FIELDS) {
      if (entry[field] === undefined || entry[field] === null) {
        fail(at, `missing required field "${field}"`);
      }
    }
    // These required fields are arrays; an empty sources[] violates "≥1 source".
    for (const arrField of ['tags', 'key_facts', 'sources']) {
      if (entry[arrField] !== undefined && !Array.isArray(entry[arrField])) {
        fail(at, `"${arrField}" must be an array`);
      }
    }
    if (Array.isArray(entry.sources) && entry.sources.length === 0) {
      fail(at, 'sources[] is empty (SCHEMA requires ≥1 source)');
    }

    if (entry.confidence !== undefined && !VALID_CONFIDENCE.has(entry.confidence)) {
      fail(at, `invalid confidence "${entry.confidence}"`);
    }
    if (entry.confidence === 'needs-check') needsCheckCount++;

    if (entry.id !== undefined) {
      if (seenIds.has(entry.id)) {
        fail(at, `duplicate id within file`);
      }
      seenIds.add(entry.id);
      globalIds.add(entry.id);
    }

    if (entry.related !== undefined) {
      if (!Array.isArray(entry.related)) {
        fail(at, '"related" must be an array');
      } else {
        for (const ref of entry.related) relatedRefs.push({ id: ref, context: at });
      }
    }
  });
}

// --- Pass 2: every `related` id must resolve to a real entry somewhere in the corpus ---
for (const { id, context } of relatedRefs) {
  if (!globalIds.has(id)) {
    fail(context, `related id "${id}" does not resolve to any entry`);
  }
}

// --- Pass 3: manifest totals must match the reality we just measured ---
const manifest = existsSync(manifestPath)
  ? readJson(manifestPath, 'manifest.json')
  : (fail('manifest.json', 'file not found'), null);

if (manifest) {
  const totals = manifest.totals || {};
  const actualEntries = [...fileEntryCounts.values()].reduce((a, b) => a + b, 0);

  if (totals.datasets !== dataFiles.length) {
    fail('manifest.json', `totals.datasets ${totals.datasets} != ${dataFiles.length} data files`);
  }
  if (totals.entries !== actualEntries) {
    fail('manifest.json', `totals.entries ${totals.entries} != ${actualEntries} actual entries`);
  }
  if (totals.needs_check !== undefined && totals.needs_check !== needsCheckCount) {
    fail('manifest.json', `totals.needs_check ${totals.needs_check} != ${needsCheckCount} needs-check entries`);
  }

  // Each manifest dataset row must point at a real file whose count matches reality.
  if (Array.isArray(manifest.datasets)) {
    for (const ds of manifest.datasets) {
      const stem = ds.file ? ds.file.replace(/^data\//, '') : '(no file)';
      if (!fileEntryCounts.has(stem)) {
        fail('manifest.json', `lists "${ds.file}" but no such data file exists`);
      } else if (ds.count !== fileEntryCounts.get(stem)) {
        fail('manifest.json', `${ds.file} count ${ds.count} != ${fileEntryCounts.get(stem)} actual entries`);
      }
    }
  }
}

// --- Report ---
if (errors.length === 0) {
  const total = [...fileEntryCounts.values()].reduce((a, b) => a + b, 0);
  console.log(`✓ corpus valid — ${dataFiles.length} datasets, ${total} entries, 0 issues`);
  process.exit(0);
}

console.error(`✗ corpus invalid — ${errors.length} issue(s):`);
for (const e of errors) console.error(`  - ${e}`);
process.exit(1);
