import './card.scss'
import { motion } from 'framer-motion'
import cn from 'classnames'

export const Card = ({ link, name, description, className, ...props }) => {
  const xOffset = 100
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? xOffset : -xOffset,
      opacity: 0,
    }),
    active: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.2 },
    },
    exit: (direction) => ({
      x: direction > 0 ? -xOffset : xOffset,
      opacity: 0,
    }),
  }
  return (
    <motion.div
      className={cn('card', className)}
      variants={variants}
      initial="enter"
      animate="active"
      exit="exit"
      {...props}
    >
      <a target="_blank" className="card__title" href={link}>
        {name}
      </a>
      <div className="card__description">{description}</div>
    </motion.div>
  )
}
