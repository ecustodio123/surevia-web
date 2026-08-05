import { useEffect, useState } from 'react'

const startOffset = 48
const endOffset = 220

export function ScrollProgressBar() {
  const [scrollState, setScrollState] = useState({ progress: 0, isVisible: false })

  useEffect(() => {
    let frameId = 0

    const updateProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollTop = window.scrollY
      const progress = scrollableHeight > 0 ? scrollTop / scrollableHeight : 0
      const isNearEnd = scrollTop + window.innerHeight >= document.documentElement.scrollHeight - endOffset
      const isVisible = scrollTop > startOffset && !isNearEnd

      setScrollState({
        progress: Math.min(Math.max(progress, 0), 1),
        isVisible,
      })
    }

    const requestUpdate = () => {
      window.cancelAnimationFrame(frameId)
      frameId = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [])

  return (
    <div
      className={scrollState.isVisible ? 'scroll-progress is-visible' : 'scroll-progress'}
      aria-hidden="true"
    >
      <span style={{ transform: `scaleX(${scrollState.progress})` }} />
    </div>
  )
}
