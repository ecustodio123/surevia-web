import { useEffect, useState } from 'react'

export function AnimatedYears({ start = true }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) {
      setValue(0)
      return undefined
    }

    const duration = 900
    const startedAt = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1)
      setValue(Math.round(progress * 10))
      if (progress < 1) requestAnimationFrame(tick)
    }

    const frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [start])

  return (
    <span className="years-counter">
      <span className="years-prefix">+ de</span>
      <span className="years-number">{value}</span>
      <span className="years-label">años</span>
    </span>
  )
}
