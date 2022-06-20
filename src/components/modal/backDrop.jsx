import { motion } from 'framer-motion'
import './modal.scss'

export const BackDrop = ({ children, ...props }) => {
  return (
    <motion.div
      className={'back__drop'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
