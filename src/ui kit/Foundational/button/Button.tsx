import { useState } from 'react'
import styles from './styles/Button.module.css'
import { ChevronUp } from 'lucide-react'

interface ButtonBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: React.Ref<HTMLButtonElement>
  variant?: 'default' | 'toggle' | 'split' | 'icon'
  colour?: 'filled' | 'elevated' | 'tonal' | 'outlined' | 'text'
  size?: 'small' | 'medium' | 'large'
  icon?: React.ReactNode
  shape?: 'round' | 'square'
  selected?: boolean
  defaultSelected?: boolean
}

function ButtonBase({
  children,
  variant = 'default',
  colour = 'filled',
  size = 'small',
  icon,
  shape = 'round',
  selected,
  defaultSelected = false,
  onClick,
  className,
  ref,
  ...props }: ButtonBaseProps) {
  const isControlled = selected !== undefined
  const [isSelected, setIsSelected] = useState(defaultSelected)
  const resolvedSelected = isControlled ? selected : isSelected;

  return (
    <button ref={ref} {...props}
      className={`
        ${styles.btn}
        ${styles[variant]}
        ${styles[colour]}
        ${styles[size]}
        ${styles[shape]}
        ${resolvedSelected ? styles.selected : ''}
        ${className || ''}
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

export interface ButtonProps extends Omit<ButtonBaseProps, 'variant' | 'selected' | 'defaultSelected'> {}

export const Button = ({ ref, children, ...props }: ButtonProps) => {
  return (
    <ButtonBase ref={ref} {...props}>
      {children}
    </ButtonBase>
  )
}

interface ToggleButtonProps extends Omit<ButtonBaseProps, 'variant'> {}

function ToggleButton({ ref, children, ...props }: ToggleButtonProps) {
  return (
    <ButtonBase ref={ref} {...props} variant="toggle">
      {children}
    </ButtonBase>
  )
}

interface IconButtonProps extends Omit<ButtonBaseProps, 'variant' | 'children'> {
  icon: React.ReactElement
}

function IconButton({ ref, icon, ...props }: IconButtonProps) {
  return (
    <ButtonBase ref={ref} {...props} variant="icon" icon={icon} />
  )
}

interface ToggleIconButtonProps extends Omit<ButtonBaseProps, 'variant' | 'children'> {
  icon: React.ReactElement
}

function ToggleIconButton({ ref, icon, ...props }: ToggleIconButtonProps) {
  return (
    <ButtonBase ref={ref} {...props} variant="toggle" icon={icon} />
  )
}

interface SplitButtonProps extends Omit<ButtonBaseProps, 'variant'> {}

function SplitButton({ ref, children, ...props }: SplitButtonProps) {
  return (
    <ButtonBase ref={ref} {...props} variant="split" className={styles.split}>
      <span className='content'>{children}</span>
      <span className='indicator'>
        <ChevronUp size={16}/>
      </span>
    </ButtonBase>
  )
}

Button.displayName = 'Button'
ToggleButton.displayName = 'ToggleButton'
IconButton.displayName = 'IconButton'
ToggleIconButton.displayName = 'ToggleIconButton'
SplitButton.displayName = 'SplitButton'

export { ToggleButton, IconButton, ToggleIconButton, SplitButton }