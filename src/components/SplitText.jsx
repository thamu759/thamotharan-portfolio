import { useScrollReveal } from '../hooks/useScrollReveal'

export default function SplitText({ text, as: Tag = 'h2', className = '' }) {
  const [ref, visible] = useScrollReveal()

  return (
    <Tag ref={ref} className={`section-title ${className}`}>
      <span className={`text-reveal${visible ? ' visible' : ''}`}>
        {text}
      </span>
    </Tag>
  )
}
