'use client'

import Image from 'next/image'
import { FaAward, FaBriefcase } from 'react-icons/fa'
import AnimatedSection from '@/components/ui/AnimatedSection'
import DownloadResumeButton from '@/components/ui/DownloadResumeButton'
import { personalInfo } from '@/data/personal'

const About = () => {
  return (
    <section id="about" className="section-padding bg-light-bg dark:bg-dark-bg">
      <div className="container-custom">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full border border-light-border dark:border-dark-border text-light-text-secondary dark:text-dark-text-secondary text-sm mb-4">
              Get to know me
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-light-text-primary dark:text-dark-text-primary">
              About Me
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Avatar */}
          <AnimatedSection animation="slide-left">
            <div className="relative aspect-square max-w-md mx-auto rounded-2xl border-2 border-light-border dark:border-dark-border overflow-hidden">
              <Image
                src="/avatar.webp"
                alt={personalInfo.name}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection animation="slide-right">
            <div className="space-y-6">
              {personalInfo.bio.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                <div className="card-premium">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg border border-light-border dark:border-dark-border">
                      <FaBriefcase className="w-5 h-5 text-light-text-secondary dark:text-dark-text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary">
                        3+
                      </h3>
                      <p className="text-light-text-tertiary dark:text-dark-text-tertiary text-sm">
                        Years Experience
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-premium">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg border border-light-border dark:border-dark-border">
                      <FaAward className="w-5 h-5 text-light-text-secondary dark:text-dark-text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary">
                        10+
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
                <DownloadResumeButton />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default About
