'use client'

import { FaLinkedin, FaEnvelope } from 'react-icons/fa'
import AnimatedSection from '@/components/ui/AnimatedSection'
import DownloadResumeButton from '@/components/ui/DownloadResumeButton'
import { personalInfo } from '@/data/personal'

const Contact = () => {
  const endpoints = [
    // {
    //   icon: FaLinkedin,
    //   url: personalInfo.social.linkedin,
    //   label: 'LinkedIn',
    //   protocol: 'https://'
    // },
    {
      icon: FaEnvelope,
      url: personalInfo.social.email,
      label: 'Email',
      protocol: `mailto:${personalInfo.email}`
    }
  ]

  return (
    <section id="contact" className="section-padding bg-light-card dark:bg-dark-card blueprint-grid">
      <div className="container-custom">
        <AnimatedSection animation="fade-in">
          <div className="mb-12">
            <span className="section-label">connection</span>
            <h2 className="text-2xl md:text-4xl font-mono font-bold text-light-text-primary dark:text-slate-200 mb-4">
              await contact()
            </h2>
            <p className="text-light-text-secondary dark:text-slate-400 max-w-xl">
              Ready to architect your next project. Open for full-time positions, contract work, and interesting collaborations.
            </p>
          </div>
        </AnimatedSection>

        {/* Connection endpoints */}
        <AnimatedSection animation="fade-up" delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mb-12">
            {endpoints.map((endpoint, index) => (
              <a
                key={index}
                href={endpoint.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group card-blueprint flex items-center gap-4"
              >
                <div className="p-3 border border-light-border dark:border-dark-border group-hover:border-accent-light dark:group-hover:border-accent-dark transition-colors">
                  <endpoint.icon className="w-5 h-5 text-light-text-secondary dark:text-slate-400 group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors" />
                </div>
                <div className="font-mono">
                  <div className="text-sm text-light-text-primary dark:text-slate-200 group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">
                    {endpoint.label}
                  </div>
                  <div className="text-xs text-light-text-tertiary dark:text-slate-400">
                    {endpoint.protocol}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection animation="fade-up" delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-3">
            {/* <a
              href={`mailto:${personalInfo.email}`}
              className="btn-primary"
            >
              send_message()
            </a> */}
            <DownloadResumeButton />
          </div>
        </AnimatedSection>

        {/* Connection status */}
        <AnimatedSection animation="fade-up" delay={0.6}>
          <div className="mt-12 pt-8 border-t border-light-border dark:border-dark-border">
            <div className="font-mono text-xs text-light-text-tertiary dark:text-slate-400">
              <span className="text-accent-light dark:text-accent-dark">$</span> response_time: <span className="text-accent-light dark:text-accent-dark">&lt; 24h</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default Contact
