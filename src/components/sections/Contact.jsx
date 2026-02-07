import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa'
import AnimatedSection from '../ui/AnimatedSection'
import DownloadResumeButton from '../ui/DownloadResumeButton'
import { personalInfo } from '../../data/personal'

const Contact = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      url: personalInfo.social.github || 'https://github.com',
      label: 'GitHub',
      color: 'from-gray-700 to-gray-900'
    },
    {
      icon: FaLinkedin,
      url: personalInfo.social.linkedin || 'https://linkedin.com',
      label: 'LinkedIn',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: FaTwitter,
      url: personalInfo.social.twitter || 'https://twitter.com',
      label: 'Twitter',
      color: 'from-sky-500 to-sky-700'
    },
    {
      icon: FaEnvelope,
      url: `mailto:${personalInfo.email}`,
      label: 'Email',
      color: 'from-primary to-accent-purple'
    }
  ]

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-white dark:bg-dark-elevated">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 text-primary dark:text-primary-light text-sm font-medium mb-4">
              Let's Connect
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-light-text-primary via-primary to-accent-purple dark:from-dark-text-primary dark:via-primary-light dark:to-accent-purple bg-clip-text text-transparent">
                Open to Opportunities
              </span>
            </h2>
            <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto mb-12">
              Currently seeking new opportunities to leverage my skills and contribute to innovative projects.
            </p>
          </div>
        </AnimatedSection>

        {/* Social Links Grid */}
        <AnimatedSection animation="fade-up" delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group card-premium hover:border-primary/30 dark:hover:border-primary/40 text-center"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${social.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <social.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary group-hover:text-primary dark:group-hover:text-primary-light transition-colors mb-2">
                  {social.label}
                </h3>
                <p className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary">
                  Connect on {social.label}
                </p>
              </a>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection animation="fade-up" delay={0.4}>
          <div className="text-center mt-16">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn-primary"
              >
                <span className="relative z-10">Send Email</span>
              </a>
              <DownloadResumeButton className="!bg-transparent border-2 border-primary text-primary hover:!bg-primary hover:text-white dark:border-primary-light dark:text-primary-light dark:hover:!bg-primary-light dark:hover:text-dark-bg" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default Contact
