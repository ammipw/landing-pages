import type { HTMLAttributes } from "react"
import styles from './Card.module.css'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  size?: 'small' | 'medium' | 'large'
  variant?: 'filled' | 'elevated' | 'outlined'
  shape?: 'rounded' | 'square'
}

function Card({ size = 'medium', variant = 'elevated', children, ...props }: CardProps) {
  return (
    <div {...props} className={`${styles.card} ${styles[`card-${size}`]} ${styles[`card-${variant}`]} ${props.className || ''}`}>
      {children}
    </div>
  )
}

export default Card