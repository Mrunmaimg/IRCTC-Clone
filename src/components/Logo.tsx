import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-2"
    >
      <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
        <span className="text-xl font-bold text-white">IR</span>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold text-light-text-primary dark:text-dark-text-primary">
          IRCTC
        </span>
        <span className="text-xs text-light-text-muted dark:text-dark-text-muted">
          Indian Railways
        </span>
      </div>
    </motion.div>
  )
} 