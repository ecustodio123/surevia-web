import { motion } from 'framer-motion'

export function AppLoader() {
  return (
    <motion.div
      className="app-loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.32, ease: 'easeOut' }}
      role="status"
      aria-live="polite"
      aria-label="Cargando Surevia Group"
    >
      <motion.div
        className="loader-card"
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -8, scale: 0.98 }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="loader-logo" aria-hidden="true" />
        <span className="loader-bar" aria-hidden="true" />
      </motion.div>
    </motion.div>
  )
}
