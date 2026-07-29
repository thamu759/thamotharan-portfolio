import { useScrollReveal } from '../hooks/useScrollReveal'
import { MovieIcon, HealthIcon, ExternalIcon } from './Icons'
import SplitText from './SplitText'

const projects = [
  {
    title: 'Thiraipedia',
    desc: 'A comprehensive movie database platform that lets users browse, search, and discover films with rich metadata, user reviews, and personalized watchlists.',
    tags: ['React', 'Node.js', 'MongoDB', 'REST API'],
    icon: MovieIcon,
    glow: 'purple-glow',
    color: '#a855f7',
    gradient: 'linear-gradient(135deg, #0b0c10, #1e1b4b)',
    url: 'https://cinevistaa.in/',

    links: [
      { label: 'GitHub', url: 'https://github.com/thamu759/cinevistaa' },
      { label: 'Live Demo', url: 'https://cinevistaa.in/' },
    ],
  },
  {
    title: 'Respiratory Disease Detection',
    desc: 'Machine learning system that analyzes respiratory audio samples to detect diseases like asthma, pneumonia, and COPD using deep learning models.',
    tags: ['Python', 'TensorFlow', 'Flask', 'Audio ML'],
    icon: HealthIcon,
    glow: 'emerald-glow',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #0a2e1a, #1e3a2e)',
    links: [
      { label: 'GitHub', url: '#' },
    ],
  },
]

export default function Projects() {
  const [headerRef, headerVisible] = useScrollReveal()
  const [gridRef, gridVisible] = useScrollReveal()

  return (
    <section className="section" id="projects">
      <div ref={headerRef} className={`reveal${headerVisible ? ' visible' : ''}`}>
        <p className="section-label">Portfolio</p>
        <SplitText text="Featured Projects" />
        <p className="section-desc">
          A selection of projects that showcase my skills and experience.
        </p>
      </div>
      <div
        ref={gridRef}
        className={`stagger-children${gridVisible ? ' visible' : ''}`}
        style={{ marginTop: '3rem' }}
      >
        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.title} className="project-card">
              <div className={`project-card-image ${p.glow}`} style={{ background: p.gradient }}>
                <div className="project-thumb-content">
                  {p.url ? (
                    <>
                      <p.icon width={32} height={32} style={{ color: p.color, opacity: 0.6 }} />
                      <span className="project-thumb-domain">{p.url.replace(/https?:\/\//, '').replace(/\/$/, '')}</span>
                    </>
                  ) : (
                    <>
                      <p.icon width={40} height={40} style={{ color: p.color, opacity: 0.9 }} />
                      <span className="project-thumb-label">{p.title}</span>
                    </>
                  )}
                </div>
              </div>
              <div className="project-card-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  {p.links.map((l) => (
                    <a key={l.label} href={l.url} className="project-link" target="_blank" rel="noreferrer">
                      {l.label}
                      <ExternalIcon width={12} height={12} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
