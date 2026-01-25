import { motion } from 'framer-motion'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '../../hooks/useTheme'

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-dark-card hover:bg-gray-300 dark:hover:bg-dark-border transition-colors duration-300"
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      aria-label="Toggle dark mode"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <FaMoon className="w-5 h-5 text-yellow-400" />
        ) : (
          <FaSun className="w-5 h-5 text-yellow-500" />
        )}
      </motion.div>
    </motion.button>
  )
}

export default DarkModeToggle
