import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import { EmailIcon, GitHubIcon, LinkedInIcon } from './components/Icons'
import { useScrollReveal } from './hooks/useScrollReveal'
import SplitText from './components/SplitText'
import './App.css'

function App() {
  const [contactRef, contactVisible] = useScrollReveal()

  return (
    <div className="app">
      <Hero />
      <Skills />
      <Projects />
      <section className="contact-section" id="contact">
        <div className="contact-content" ref={contactRef}>
          <div className={`reveal${contactVisible ? ' visible' : ''}`}>
            <p className="section-label">Get in Touch</p>
            <SplitText text="Let's Work Together" />
            <p className="section-desc">
              Open for freelance projects, full-time opportunities, and collaborations.
            </p>
          </div>
          <div className={`reveal reveal-delay-2${contactVisible ? ' visible' : ''}`}>
            <div className="contact-links">
              <a href="mailto:thamotharan@email.com">
                <EmailIcon width={16} height={16} /> thamotharan@email.com
              </a>
              <a href="https://github.com/thamu759" target="_blank" rel="noreferrer">
                <GitHubIcon width={16} height={16} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/thamotharan" target="_blank" rel="noreferrer">
                <LinkedInIcon width={16} height={16} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer>
        &copy; {new Date().getFullYear()} Thamotharan R. Built with care.
      </footer>
    </div>
  )
}

export default App
