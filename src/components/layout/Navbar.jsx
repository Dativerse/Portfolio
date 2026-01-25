import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import DarkModeToggle from '../ui/DarkModeToggle'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Solutions' },
    { id: 'contact', label: 'Connect' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Update active section based on scroll position
      const sections = navLinks.map(link => document.getElementById(link.id))
      const scrollPosition = window.scrollY + 100

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navLinks[index].id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const offset = 80
      const sectionTop = section.offsetTop - offset
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-xl border-b border-light-border/50 dark:border-dark-border/50 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 px-4 md:px-8">
          {/* Logo */}
          <motion.button
            className="text-2xl font-bold bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('home')}
          >
            Portfolio
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-primary dark:text-primary-light bg-primary/10 dark:bg-primary/20'
                    : 'text-light-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary-light hover:bg-primary/5 dark:hover:bg-primary/10'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-lg -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
            <div className="ml-2 pl-2 border-l border-light-border dark:border-dark-border">
              <DarkModeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <DarkModeToggle />
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-light-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary-light hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-20 right-0 bottom-0 w-80 bg-light-card/95 dark:bg-dark-card/95 backdrop-blur-xl border-l border-light-border dark:border-dark-border md:hidden shadow-premium-lg"
            >
              <div className="flex flex-col p-8 gap-2">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(link.id)}
                    className={`text-left px-4 py-3 text-lg font-medium rounded-xl transition-all duration-200 ${
                      activeSection === link.id
                        ? 'text-primary dark:text-primary-light bg-primary/10 dark:bg-primary/20'
                        : 'text-light-text-secondary dark:text-dark-text-secondary hover:bg-primary/5 dark:hover:bg-primary/10'
                    }`}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
