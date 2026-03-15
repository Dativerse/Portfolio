'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { skillCategories } from '@/data/skills'
import * as FaIcons from 'react-icons/fa'
import * as SiIcons from 'react-icons/si'

const Skills = () => {
  const getIcon = (iconName) => {
    return FaIcons[iconName] || SiIcons[iconName] || FaIcons.FaCode
  }

  return (
    <section id="skills" className="section-padding bg-light-card dark:bg-dark-card blueprint-grid">
      <div className="container-custom">
        <AnimatedSection animation="fade-in">
          <div className="mb-12">
            <span className="section-label">tech_stack</span>
            <h2 className="text-2xl md:text-4xl font-mono font-bold text-light-text-primary dark:text-slate-200">
              System.getCapabilities()
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="card-blueprint">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-light-border dark:border-dark-border">
                  <span className="font-mono text-accent-light dark:text-accent-dark text-sm">
                    [{String(categoryIndex + 1).padStart(2, '0')}]
                  </span>
                  <h3 className="font-mono font-semibold text-light-text-primary dark:text-slate-200">
                    {category.category}
                  </h3>
                </div>

                {/* Skills grid */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = getIcon(skill.icon)
                    return (
                      <div
                        key={skillIndex}
                        className="group flex items-center gap-2 tech-tag"
                      >
                        <IconComponent className="w-3 h-3" />
                        <span>{skill.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Architecture visualization hint */}
        <AnimatedSection animation="fade-up" delay={0.4}>
          <div className="mt-12 pt-8 border-t border-light-border dark:border-dark-border">
            <div className="flex items-center justify-center gap-4 font-mono text-xs text-light-text-tertiary dark:text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 border border-accent-light dark:border-accent-dark"></span>
                hover for details
              </span>
              <span className="text-light-border dark:text-dark-border">|</span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-light/30 dark:bg-accent-dark/30"></span>
                actively using
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default Skills
