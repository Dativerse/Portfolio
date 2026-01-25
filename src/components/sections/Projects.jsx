import { motion } from 'framer-motion'
import AnimatedSection from '../ui/AnimatedSection'
import SolutionCard from '../ui/SolutionCard'
import { solutions } from '../../data/solutions'

const Projects = () => {

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-white dark:bg-dark-elevated">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-purple/5 dark:bg-accent-purple/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 text-primary dark:text-primary-light text-sm font-medium mb-4">
              Professional Experience
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-light-text-primary via-primary to-accent-purple dark:from-dark-text-primary dark:via-primary-light dark:to-accent-purple bg-clip-text text-transparent">
                What I Have Experience In
              </span>
            </h2>
            <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto mb-8">
              As a fullstack developer, I build complete web solutions from database design and API development to responsive user interfaces and deployment pipelines.
            </p>
            <div className="divider-gradient max-w-xs mx-auto"></div>
          </div>
        </AnimatedSection>

        {/* Solutions Grid */}
        <AnimatedSection animation="fade-up" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <SolutionCard
                key={solution.id}
                solution={solution}
                index={index}
              />
            ))}
          </div>
        </AnimatedSection>

        {/* Additional Context */}
        <AnimatedSection animation="fade-up" delay={0.4}>
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-primary/5 dark:bg-primary/10 border border-primary/20 dark:border-primary/30 rounded-2xl">
              <svg className="w-6 h-6 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <p className="text-light-text-primary dark:text-dark-text-primary font-medium">
                All solutions are production-ready and scalable for enterprise use
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default Projects
