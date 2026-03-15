'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'
import { personalInfo } from '@/data/personal'
import DownloadResumeButton from '@/components/ui/DownloadResumeButton'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const offset = 80
      const sectionTop = section.offsetTop - offset
      window.scrollTo({ top: sectionTop, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-light-bg dark:bg-dark-bg blueprint-grid pt-16"
    >
      <div className="container-custom px-4 md:px-8 py-12">
        <div className="max-w-3xl">
          {/* Header row: Avatar + Identity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="relative shrink-0">
              <div className="w-16 h-16 overflow-hidden border border-dark-border">
                <Image
                  src="/avatar.webp"
                  alt={personalInfo.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Status dot */}
              <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-accent border-2 border-light-bg dark:border-dark-bg rounded-full"></span>
            </div>

            <div>
              <h1 className="text-xl md:text-2xl font-mono font-bold text-light-text-primary dark:text-slate-200">
                {personalInfo.name}
              </h1>
              <p className="font-mono text-sm text-accent">
                {personalInfo.title}
              </p>
            </div>
          </motion.div>

          {/* Bio - single paragraph for simplicity */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-light-text-secondary dark:text-slate-400 leading-relaxed mb-6 max-w-2xl"
          >
            {personalInfo.bio[0]}
          </motion.p>

          {/* Quick stats inline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-6 mb-8 font-mono text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-accent">3+</span>
              <span className="text-light-text-tertiary dark:text-slate-400">years exp</span>
            </div>
            <span className="text-dark-border">|</span>
            <div className="flex items-center gap-2">
              <span className="text-accent">10+</span>
              <span className="text-light-text-tertiary dark:text-slate-400">projects</span>
            </div>
            <span className="text-dark-border">|</span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
              <span className="text-light-text-tertiary dark:text-slate-400">available</span>
            </div>
          </motion.div>

          {/* Actions row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-3"
          >
            <button onClick={() => scrollToSection('projects')} className="btn-primary">
              View Work
            </button>

            <a href={`mailto:${personalInfo.email}`} className="btn-secondary">
              Contact
            </a>

            <DownloadResumeButton />

            <div className="flex items-center gap-2 ml-2">
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-light-border dark:border-dark-border hover:border-accent hover:text-accent transition-colors text-light-text-secondary dark:text-slate-400"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.social.email}
                className="p-2 border border-light-border dark:border-dark-border hover:border-accent hover:text-accent transition-colors text-light-text-secondary dark:text-slate-400"
                aria-label="Email"
              >
                <FaEnvelope className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16"
          >
            <button
              onClick={() => scrollToSection('skills')}
              className="flex items-center gap-2 font-mono text-xs text-light-text-tertiary dark:text-slate-400 hover:text-accent transition-colors"
            >
              <FaArrowDown className="w-3 h-3" />
              <span>scroll to explore</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
