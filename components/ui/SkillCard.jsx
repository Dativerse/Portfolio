'use client'

import * as FaIcons from 'react-icons/fa'
import * as SiIcons from 'react-icons/si'

const SkillCard = ({ skill }) => {
  const IconComponent = FaIcons[skill.icon] || SiIcons[skill.icon] || FaIcons.FaCode

  return (
    <div className="flex items-center gap-2 px-3 py-2 border border-light-border dark:border-dark-border rounded-lg hover:border-light-text-tertiary dark:hover:border-dark-text-tertiary transition-colors">
      <IconComponent className="w-4 h-4 text-light-text-secondary dark:text-dark-text-secondary" />
      <span className="text-sm text-light-text-primary dark:text-dark-text-primary">
        {skill.name}
      </span>
    </div>
  )
}

export default SkillCard
