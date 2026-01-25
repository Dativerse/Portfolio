import { motion } from 'framer-motion'
import * as FaIcons from 'react-icons/fa'
import * as SiIcons from 'react-icons/si'

const SkillCard = ({ skill, index }) => {
  // Get the icon component dynamically
  const IconComponent = FaIcons[skill.icon] || SiIcons[skill.icon] || FaIcons.FaCode

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="group flex items-center gap-3 px-4 py-3 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl hover:border-primary/50 dark:hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-200"
    >
      <div className="text-primary dark:text-primary-light group-hover:scale-110 transition-transform">
        <IconComponent className="w-5 h-5" />
      </div>
      <span className="text-sm font-medium text-light-text-primary dark:text-dark-text-primary">
        {skill.name}
      </span>
    </motion.div>
  )
}

export default SkillCard
