'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import SolutionCard from '@/components/ui/SolutionCard'
import { solutions } from '@/data/solutions'

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-light-bg dark:bg-dark-bg blueprint-grid">
      <div className="container-custom">
        <AnimatedSection animation="fade-in">
          <div className="mb-12">
            <span className="section-label">architecture</span>
            <h2 className="text-2xl md:text-4xl font-mono font-bold text-light-text-primary dark:text-slate-200 mb-4">
              Solutions.map(experience)
            </h2>
            <p className="text-light-text-secondary dark:text-slate-400 max-w-2xl">
              Each solution represents a complete system architecture. Hover over tech nodes to understand the reasoning behind each technology choice.
            </p>
          </div>
        </AnimatedSection>

        {/* Solutions Grid */}
        <AnimatedSection animation="fade-up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-6">
            {solutions.map((solution, index) => (
              <div key={solution.id} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <SolutionCard
                  solution={solution}
                  index={index}
                />
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* System status */}
        <AnimatedSection animation="fade-up" delay={0.4}>
          <div className="mt-12 pt-8 border-t border-light-border dark:border-dark-border">
            <div className="flex items-center justify-center gap-2 font-mono text-xs text-light-text-tertiary dark:text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow"></span>
              <span>all systems production-ready</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default Projects
