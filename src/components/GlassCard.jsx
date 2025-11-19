import { motion } from 'framer-motion'

const GlassCard = ({ 
  children, 
  className = '', 
  hover = true,
  neon = false,
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      className={`
        bg-white/95 backdrop-blur-sm
        border-2 border-teal-600/25
        rounded-2xl shadow-lg
        ${neon ? 'shadow-[0_0_20px_rgba(45,122,110,0.25)] border-teal-600' : ''}
        ${hover ? 'hover:shadow-xl hover:border-teal-600/40 hover:shadow-teal-600/15' : ''}
        transition-all duration-300
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default GlassCard
