'use client'

import { FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { personalInfo } from '@/data/personal'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaLinkedin, url: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: FaEnvelope, url: personalInfo.social.email, label: 'Email' }
  ]

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-light-bg dark:bg-dark-bg border-t border-light-border dark:border-dark-border">
      <div className="container-custom py-8 px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="font-mono text-xs text-light-text-tertiary dark:text-slate-400">
            <span className="text-accent-light dark:text-accent-dark">&copy;</span> {currentYear} {personalInfo.name}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-light-border dark:border-dark-border hover:border-accent-light hover:text-accent-light dark:hover:border-accent-dark dark:hover:text-accent-dark transition-colors text-light-text-secondary dark:text-slate-400"
                aria-label={social.label}
              >
                <social.icon className="w-3 h-3" />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="font-mono text-xs text-light-text-tertiary dark:text-slate-400 hover:text-accent-light dark:hover:text-accent-dark transition-colors"
          >
            scroll_to_top()
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
