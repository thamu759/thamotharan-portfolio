import { useEffect, useState } from 'react'

const titles = [
  'MERN Stack Developer',
  'Web Developer',
  'Frontend Enthusiast',
  'Backend Learner',
]

export default function Typewriter() {
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [text, setText] = useState('')

  useEffect(() => {
    const current = titles[index]
    let timeout

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex + 1))
        setCharIndex((c) => c + 1)
      }, 60)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex - 1))
        setCharIndex((c) => c - 1)
      }, 30)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % titles.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, index])

  return (
    <span className="typewriter">
      <span className="typewriter-text">{text}</span>
      <span className="typewriter-cursor">|</span>
    </span>
  )
}
