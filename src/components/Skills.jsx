import { useScrollReveal } from '../hooks/useScrollReveal'
import { FrontendIcon, BackendIcon, DatabaseIcon, ToolsIcon, UserIcon } from './Icons'
import SplitText from './SplitText'

const skills = [
  {
    title: 'Frontend',
    desc: 'Building reactive, responsive interfaces with modern frameworks and libraries.',
    icon: FrontendIcon,
    tags: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind'],
    span: '',
    color: '#61dafb',
  },
  {
    title: 'Backend',
    desc: 'Designing robust APIs and server-side architectures with scalability in mind.',
    icon: BackendIcon,
    tags: ['Node.js', 'Express', 'REST APIs', 'GraphQL'],
    span: '',
    color: '#68a063',
  },
  {
    title: 'Database',
    desc: 'Data modeling, storage optimization, and query performance tuning.',
    icon: DatabaseIcon,
    tags: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase'],
    span: '',
    color: '#4db33d',
  },
  {
    title: 'More Skills',
    desc: 'Additional tools and technologies I work with regularly.',
    icon: ToolsIcon,
    tags: ['Git', 'Docker', 'AWS', 'Figma', 'Linux', 'CI/CD'],
    span: 'span-3',
    color: '#f59e0b',
  },
  {
    title: 'About Me',
    desc: 'A passionate and motivated MERN Stack developer fresher with strong foundational knowledge in building web applications. Eager to learn, contribute, and grow in a professional environment while writing clean, efficient code.',
    icon: UserIcon,
    span: 'span-2',
    tags: [],
    color: '#a855f7',
  },
]

export default function Skills() {
  const [headerRef, headerVisible] = useScrollReveal()
  const [gridRef, gridVisible] = useScrollReveal()

  return (
    <section className="section" id="skills">
      <div ref={headerRef} className={`reveal${headerVisible ? ' visible' : ''}`}>
        <p className="section-label">Expertise</p>
        <SplitText text="Skills &amp; Technologies" />
        <p className="section-desc">
          Here are the tools and technologies I use to bring ideas to life.
        </p>
      </div>
      <div
        ref={gridRef}
        className={`stagger-children${gridVisible ? ' visible' : ''}`}
        style={{ marginTop: '3rem' }}
      >
        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s.title} className={`skill-card ${s.span || ''}`}>
              <div className="skill-icon" style={{ color: s.color }}>
                <s.icon width={28} height={28} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              {s.tags.length > 0 && (
                <div className="skill-tags">
                  {s.tags.map((t) => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
