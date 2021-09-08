import React from 'react'

const DARK_CLASS = 'dark'

export default function ThemeToggle() {
  const toggleTheme = React.useCallback(() => {
    document.body.classList.contains(DARK_CLASS)
      ? document.body.classList.remove(DARK_CLASS)
      : document.body.classList.add(DARK_CLASS)
  }, [])

  return (
    <button type="button" onClick={toggleTheme}>
      Toggle Theme
    </button>
  )
}
