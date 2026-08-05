import { Link } from 'react-router'

import { scrollToPageTop } from '../utils/scrollToPageTop'

export function AppLink({ children, onClick, ...props }) {
  const handleClick = (event) => {
    onClick?.(event)
    if (!event.defaultPrevented) {
      window.setTimeout(scrollToPageTop, 0)
    }
  }

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  )
}
