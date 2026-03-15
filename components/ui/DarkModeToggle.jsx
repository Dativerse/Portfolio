'use client'

import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '@/hooks/useTheme'

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 border border-light-border dark:border-dark-border hover:border-accent-light hover:text-accent-light dark:hover:border-accent-dark dark:hover:text-accent-dark transition-colors text-light-text-secondary dark:text-slate-400"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? (
        <FaMoon className="w-3.5 h-3.5" />
      ) : (
        <FaSun className="w-3.5 h-3.5" />
      )}
    </button>
  )
}

export default DarkModeToggle
