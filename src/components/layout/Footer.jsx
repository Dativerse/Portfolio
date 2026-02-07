import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa'
import { personalInfo } from '../../data/personal'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaGithub, url: personalInfo.social.github, label: 'GitHub' },
    { icon: FaLinkedin, url: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: FaTwitter, url: personalInfo.social.twitter, label: 'Twitter' },
    { icon: FaEnvelope, url: personalInfo.social.email, label: 'Email' }
  ]

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-light-card dark:bg-dark-card border-t border-light-border dark:border-dark-border">
      <div className="container-custom py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent mb-4">
              {personalInfo.name}
            </h3>
            <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
              Building modern web applications with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={scrollToTop}
                  className="text-light-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
                >
                  Back to Top
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-xl hover:border-primary/50 dark:hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/10 hover:text-primary dark:hover:text-primary-light transition-all duration-200 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-light-border dark:border-dark-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-light-text-tertiary dark:text-dark-text-tertiary text-sm flex items-center gap-2">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
