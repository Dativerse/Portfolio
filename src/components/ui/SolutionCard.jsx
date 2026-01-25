import { motion } from 'framer-motion'
import { useState } from 'react'

const SolutionCard = ({ solution, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group card-premium hover:border-primary/30 dark:hover:border-primary/40 h-full"
    >
      {/* Icon */}
      <div className={`inline-flex p-4 rounded-2xl ${solution.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <solution.icon className="w-8 h-8" />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-3 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
        {solution.title}
      </h3>

      {/* Description */}
      <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6 leading-relaxed">
        {solution.description}
      </p>

      {/* Technical Stack */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-light-text-primary dark:text-dark-text-primary mb-3 flex items-center gap-2">
          <span className="w-1 h-4 bg-primary rounded-full"></span>
          Technical Implementation
        </h4>
        <div className="flex flex-wrap gap-2">
          {solution.stack.map((tech, i) => (
            <span
              key={i}
              className="skill-badge text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div>
        <h4 className="text-sm font-semibold text-light-text-primary dark:text-dark-text-primary mb-3 flex items-center gap-2">
          <span className="w-1 h-4 bg-accent-purple rounded-full"></span>
          Key Capabilities
        </h4>
        <ul className="space-y-2">
          {solution.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-light-text-tertiary dark:text-dark-text-tertiary">
              <svg className="w-4 h-4 text-primary dark:text-primary-light mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Hover indicator */}
      <motion.div
        animate={{ x: isHovered ? 4 : 0, opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute top-6 right-6"
      >
        <svg className="w-6 h-6 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </motion.div>
    </motion.div>
  )
}

export default SolutionCard
