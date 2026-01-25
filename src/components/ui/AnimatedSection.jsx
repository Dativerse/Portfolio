import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const animations = {
  'fade-up': {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  },
  'fade-in': {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  'slide-left': {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 }
  },
  'slide-right': {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 }
  },
  'scale': {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }
}

const AnimatedSection = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 0.6,
  className = ''
}) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const selectedAnimation = animations[animation] || animations['fade-up']

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={selectedAnimation}
      transition={{
        duration,
        delay,
        ease: 'easeOut'
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection
