'use client'

import { useState } from 'react'

const SolutionCard = ({ solution, index }) => {
  const [hoveredTech, setHoveredTech] = useState(null)

  // Tech explanations for architecture diagram feel
  const techExplanations = {
    'React': 'Component-based UI for maintainability',
    'Next.js': 'SSR/SSG for performance & SEO',
    'Node.js': 'JavaScript runtime for full-stack consistency',
    '.NET': 'Enterprise-grade backend with high performance',
    'Express': 'Minimal, flexible backend framework',
    'PostgreSQL': 'ACID-compliant relational database',
    'MongoDB': 'Document store for flexible schemas',
    'Redis': 'In-memory cache for low-latency reads',
    'Kafka': 'Distributed streaming for high-throughput events',
    'Kubernetes': 'Container orchestration for scalability',
    'Docker': 'Containerization for consistent deployments',
    'AWS': 'Scalable cloud infrastructure',
    'TypeScript': 'Type safety for large codebases',
    'GraphQL': 'Flexible API queries, reduced over-fetching',
    'REST API': 'Standard HTTP interface for integrations',
    'Tailwind': 'Utility-first CSS for rapid development',
    'Jest': 'Unit & integration testing framework',
    'CI/CD': 'Automated testing and deployment pipeline'
  }

  return (
    <div className="card-blueprint h-full flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-accent-light dark:text-accent-dark text-sm">
            [{String(index + 1).padStart(2, '0')}]
          </span>
          <div className="p-2 border border-light-border dark:border-dark-border">
            <solution.icon className="w-5 h-5 text-light-text-secondary dark:text-slate-400" />
          </div>
        </div>
        <span className="font-mono text-xs text-light-text-tertiary dark:text-slate-400">
          module
        </span>
      </div>

      {/* Title */}
      <h3 className="font-mono font-semibold text-lg text-light-text-primary dark:text-slate-200 mb-2">
        {solution.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-light-text-secondary dark:text-slate-400 mb-4 leading-relaxed">
        {solution.description}
      </p>

      {/* Architecture diagram - Tech Stack */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-4 h-px bg-accent-light dark:bg-accent-dark"></span>
          <span className="font-mono text-xs text-accent-light dark:text-accent-dark uppercase tracking-wider">stack</span>
        </div>

        <div className="relative">
          <div className="flex flex-wrap gap-1">
            {solution.stack.map((tech, i) => (
              <div
                key={i}
                className="group relative"
                onMouseEnter={() => setHoveredTech(tech)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <span className="tech-tag cursor-help">
                  {tech}
                </span>

                {/* Tooltip */}
                {hoveredTech === tech && techExplanations[tech] && (
                  <div className="absolute z-10 bottom-full left-0 mb-2 px-2 py-1 bg-light-card dark:bg-dark-card border border-accent-light/30 dark:border-accent-dark/30 text-accent-light dark:text-accent-dark text-xs font-mono whitespace-nowrap">
                    {techExplanations[tech]}
                    <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-accent-light/30 dark:border-t-accent-dark/30"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features as system capabilities */}
      <div className="flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-4 h-px bg-light-border dark:bg-dark-border"></span>
          <span className="font-mono text-xs text-light-text-tertiary dark:text-slate-400 uppercase tracking-wider">capabilities</span>
        </div>

        <ul className="space-y-1.5">
          {solution.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-light-text-secondary dark:text-slate-400 font-mono">
              <span className="text-accent-light dark:text-accent-dark mt-0.5">→</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SolutionCard
