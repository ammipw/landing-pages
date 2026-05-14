import { useState } from 'react'
import styles from './Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'default' | 'toggle'
  colour?: 'filled' | 'elevated' | 'tonal' | 'outlined' | 'text'
  size?: 'small' | 'medium' | 'large'
  icon?: React.ReactNode
  shape?: 'round' | 'square'
  selected?: boolean
  defaultSelected?: boolean
}
    
function Button({
  children,
  variant = 'default',
  colour = 'filled',
  size = 'small',
  icon,
  shape = 'round',
  selected,
  defaultSelected = false,
  onClick,
  ...props }: ButtonProps) {
  const isControlled = selected !== undefined
  const [isSelected, setIsSelected] = useState(defaultSelected)
  const resolvedSelected = isControlled ? selected : isSelected;

  return (
    <button {...props}
      className={`
        ${styles.btn}
        ${styles[variant]}
        ${styles[colour]}
        ${styles[size]}
        ${styles[shape]}
        ${resolvedSelected ? styles.selected : ''}
      `}
      onClick={(e: React.PointerEvent<HTMLButtonElement>) => {
        if (variant === 'toggle' && !isControlled) {
          setIsSelected(!isSelected)
        }

        onClick?.(e)
      }}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  )
}

Button.ButtonGroup = () => {
  return (<></>)
}

export default Button