import { useState } from 'react'
import './VideoSection.css'

function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="video-card">
      {playing ? (
        <div className="video-player">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <button
          className="video-thumbnail"
          onClick={() => setPlaying(true)}
          aria-label={`Play: ${video.title}`}
        >
          <img
            src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
            alt={video.title}
            loading="lazy"
          />
          <div className="video-play-btn">
            <svg viewBox="0 0 24 24" width="48" height="48" fill="none">
              <circle cx="12" cy="12" r="12" fill="rgba(0,0,0,0.65)" />
              <path d="M9.5 7.5L17 12L9.5 16.5V7.5Z" fill="#fff" />
            </svg>
          </div>
        </button>
      )}
      <div className="video-info">
        <h4 className="video-title">{video.title}</h4>
        <div className="video-channel">{video.channel}</div>
        <p className="video-desc">{video.description}</p>
      </div>
    </div>
  )
}

export default function VideoSection({ videos, title }) {
  if (!videos || videos.length === 0) return null

  return (
    <div className="section">
      <h2 className="section-title">{title || 'Watch & Learn'}</h2>
      <div className="panel">
        <p style={{
          fontSize: '0.875rem',
          color: 'var(--app-text-muted)',
          marginBottom: '20px',
          lineHeight: 1.6,
        }}>
          Curated videos from respected design educators. Click to play.
        </p>
        <div className="video-grid">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  )
}
