import { useEffect, useState } from 'react'

import Typewriter from './Typewriter'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const fade = (delay) => ({
    opacity: 0,
    transition: `opacity 0.7s ${delay}s, transform 0.7s ${delay}s`,
    transform: 'translateY(24px)',
    ...(loaded ? { opacity: 1, transform: 'translateY(0)' } : {}),
  })

  return (
    <section className="hero" id="hero">
      <div className="hero-grid">
        <h1 style={fade(0.15)}>
          Hi, I'm{' '}
          <span className="highlight highlight-animate">Thamotharan R</span>
          <br />
          <Typewriter />
        </h1>
        <p style={fade(0.35)}>
          Aspiring MERN Stack Developer passionate about building modern,
          scalable web applications. Skilled in React, Node.js, MongoDB,
          and crafting clean, user-friendly experiences.
        </p>
        <div style={fade(0.5)}>
          <div className="hero-cta">
            <button className="btn btn-primary" type="button" onClick={() => scrollTo('projects')}>
              View Projects
            </button>
            <button className="btn btn-secondary" type="button" onClick={() => scrollTo('contact')}>
              Get in Touch
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
