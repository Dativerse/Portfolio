import { FaDownload, FaAward, FaBriefcase } from 'react-icons/fa'
import AnimatedSection from '../ui/AnimatedSection'
import { personalInfo } from '../../data/personal'

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-light-bg dark:bg-dark-bg">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent-purple/5 dark:bg-accent-purple/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 text-primary dark:text-primary-light text-sm font-medium mb-4">
              Get to know me
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-light-text-primary via-primary to-accent-purple dark:from-dark-text-primary dark:via-primary-light dark:to-accent-purple bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="divider-gradient max-w-xs mx-auto"></div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <AnimatedSection animation="slide-left">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent-purple/20 to-accent-pink/20 rounded-3xl blur-2xl opacity-50" />

              <div className="relative aspect-square rounded-3xl overflow-hidden border border-light-border dark:border-dark-border shadow-premium-lg">
                <img
                  src="https://via.placeholder.com/500?text=About+Me"
                  alt="About me"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-primary/20 to-accent-purple/20 dark:from-primary/30 dark:to-accent-purple/30 rounded-3xl -z-10 backdrop-blur-sm border border-light-border dark:border-dark-border" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-accent-pink/20 to-primary/20 dark:from-accent-pink/30 dark:to-primary/30 rounded-2xl -z-10 backdrop-blur-sm border border-light-border dark:border-dark-border" />
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection animation="slide-right">
            <div className="space-y-6">
              {personalInfo.bio.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed text-lg"
                >
                  {paragraph}
                </p>
              ))}

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                <div className="card-premium group hover:border-primary/30 dark:hover:border-primary/40">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light">
                      <FaBriefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-primary dark:text-primary-light mb-1">
                        5+
                      </h3>
                      <p className="text-light-text-tertiary dark:text-dark-text-tertiary text-sm">
                        Years Experience
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-premium group hover:border-primary/30 dark:hover:border-primary/40">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-accent-purple/10 dark:bg-accent-purple/20 text-accent-purple">
                      <FaAward className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-accent-purple mb-1">
                        50+
                      </h3>
                      <p className="text-light-text-tertiary dark:text-dark-text-tertiary text-sm">
                        Projects Completed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Resume */}
              <div className="mt-10">
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="inline-flex items-center gap-3 btn-primary group"
                >
                  <FaDownload className="w-4 h-4 group-hover:animate-bounce" />
                  <span className="relative z-10">Download Resume</span>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default About
