import { motion } from 'framer-motion'
import { FaChevronDown, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { personalInfo } from '../../data/personal'
import DownloadResumeButton from '../ui/DownloadResumeButton'

const Hero = () => {
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
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-light-bg via-primary-50/20 to-accent-purple/5 dark:from-dark-bg dark:via-primary-950/30 dark:to-accent-purple/10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-background opacity-40" />

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <div className="container-custom px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image with Glow */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="mb-8 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent-purple to-accent-pink rounded-full blur-2xl opacity-30 animate-pulse-slow" />
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white/20 dark:border-white/10 overflow-hidden shadow-premium-lg backdrop-blur-sm">
              <img
                src="https://via.placeholder.com/200?text=Profile"
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 text-primary dark:text-primary-light text-sm font-medium backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new opportunities
            </span>
          </motion.div>

          {/* Name with Gradient */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-light-text-primary via-primary to-accent-purple dark:from-dark-text-primary dark:via-primary-light dark:to-accent-purple bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-2xl md:text-4xl font-semibold text-light-text-secondary dark:text-dark-text-secondary mb-6"
          >
            {personalInfo.title}
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-lg md:text-xl text-light-text-tertiary dark:text-dark-text-tertiary max-w-3xl mb-10 leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <button
              onClick={() => scrollToSection('skills')}
              className="btn-primary group"
            >
              <span className="relative z-10">View My Skills</span>
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-secondary"
            >
              View Solutions
            </button>
            <DownloadResumeButton />
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border hover:border-primary/50 dark:hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-200 group"
            >
              <FaGithub className="w-5 h-5 text-light-text-secondary dark:text-dark-text-secondary group-hover:text-primary dark:group-hover:text-primary-light transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border hover:border-primary/50 dark:hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-200 group"
            >
              <FaLinkedin className="w-5 h-5 text-light-text-secondary dark:text-dark-text-secondary group-hover:text-primary dark:group-hover:text-primary-light transition-colors" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-3 rounded-xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border hover:border-primary/50 dark:hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-200 group"
            >
              <FaEnvelope className="w-5 h-5 text-light-text-secondary dark:text-dark-text-secondary group-hover:text-primary dark:group-hover:text-primary-light transition-colors" />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="p-3 rounded-full border border-light-border dark:border-dark-border bg-light-card/50 dark:bg-dark-card/50 backdrop-blur-sm hover:border-primary/50 dark:hover:border-primary/50 transition-colors cursor-pointer"
              onClick={() => scrollToSection('about')}
            >
              <FaChevronDown className="w-4 h-4 text-light-text-tertiary dark:text-dark-text-tertiary" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
