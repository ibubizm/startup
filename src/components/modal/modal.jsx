import { motion } from 'framer-motion'
import './modal.scss'
import closeImg from '../../icons/close.svg'

const variants = {
  start: {
    opacity: 0,
  },
  final: {
    position: 'absolute',
    margin: '0 auto',
    opacity: 1,
    background: '#0064eb',
    color: '#fff',
  },
}

export const Modal = ({ id, children, setSelectedItem, ...props }) => {
  return (
    <motion.div
      layoutId={id}
      className={'modal'}
      initial={'start'}
      variants={variants}
      animate={'final'}
      {...props}
    >
      <img
        className={'modal__close'}
        src={closeImg}
        alt="close"
        onClick={() => setSelectedItem(null)}
      />
      {children}
    </motion.div>
  )
}
