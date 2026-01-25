import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa'
import { useState } from 'react'

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group relative bg-light-card dark:bg-dark-card rounded-2xl overflow-hidden border border-light-border dark:border-dark-border shadow-premium dark:shadow-none hover:shadow-premium-lg dark:hover:shadow-glow/10 transition-all duration-300"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, type: "spring", bounce: 0.4 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent-purple/20 to-accent-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

      {/* Image Section */}
      <div className="relative overflow-hidden h-56 bg-gradient-to-br from-primary/5 to-accent-purple/5 dark:from-primary/10 dark:to-accent-purple/10">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x300?text=' + encodeURIComponent(project.title)
          }}
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-3"
        >
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-white/90 dark:bg-dark-elevated/90 backdrop-blur-sm rounded-xl hover:bg-white dark:hover:bg-dark-elevated transition-all duration-200 group/btn"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub className="w-4 h-4 text-light-text-primary dark:text-dark-text-primary" />
              <span className="text-sm font-medium text-light-text-primary dark:text-dark-text-primary">Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-primary hover:bg-primary-600 backdrop-blur-sm rounded-xl transition-all duration-200 group/btn"
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Live Demo</span>
            </a>
          )}
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
            {project.title}
          </h3>
          <motion.div
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaArrowRight className="w-5 h-5 text-primary dark:text-primary-light opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        </div>

        <p className="text-light-text-tertiary dark:text-dark-text-tertiary mb-5 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="skill-badge text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent-purple to-accent-pink opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  )
}

export default ProjectCard
