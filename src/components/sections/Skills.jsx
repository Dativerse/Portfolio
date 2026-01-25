import AnimatedSection from '../ui/AnimatedSection'
import SkillCard from '../ui/SkillCard'
import { skillCategories } from '../../data/skills'

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-light-bg dark:bg-dark-bg">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent-cyan/5 dark:bg-accent-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent-pink/5 dark:bg-accent-pink/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 text-primary dark:text-primary-light text-sm font-medium mb-4">
              Technical Expertise
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-light-text-primary via-primary to-accent-purple dark:from-dark-text-primary dark:via-primary-light dark:to-accent-purple bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            <div className="divider-gradient max-w-xs mx-auto"></div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="card-premium"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-1 h-8 bg-gradient-to-b ${category.color} rounded-full`}></div>
                  <h3 className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard
                      key={skillIndex}
                      skill={skill}
                      index={skillIndex}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default Skills
