import { useState } from 'react'
import styles from './Button.module.css'
import { ChevronUp } from 'lucide-react'

// Button Base component that handles all the logic and styling for different button variants
type ButtonBaseProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
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

// Standard Button
export type ButtonProps = Omit<ButtonBaseProps, 'variant' | 'selected' | 'defaultSelected' | 'icon'>

export const Button = ({ ref, children, ...props }: ButtonProps) => {
  return (
    <ButtonBase {...props}>
      {children}
    </ButtonBase>
  )
}

Button.displayName = 'Button'

// Toggle Button
type ToggleButtonProps = Omit<ButtonBaseProps, 'variant' | 'icon'>

export const ToggleButton = ({ ref, children, ...props }: ToggleButtonProps) => {
  return (
    <ButtonBase {...props} variant="toggle">
      {children}
    </ButtonBase>
  )
}

ToggleButton.displayName = 'ToggleButton'

// Icon Button
type IconButtonProps = Omit<ButtonBaseProps, 'variant' | 'children'> & {
  icon: React.ReactElement
}

export const IconButton = ({ ref, icon, ...props }: IconButtonProps) => {
  return (
    <ButtonBase {...props} variant="icon" icon={icon} />
  )
}

IconButton.displayName = 'IconButton'

// Toggle Icon Button
type ToggleIconButtonProps = Omit<ButtonBaseProps, 'variant' | 'children'> & {
  icon: React.ReactElement
}

export const ToggleIconButton = ({ ref, icon, ...props }: ToggleIconButtonProps) => {
  return (
    <ButtonBase {...props} variant="toggle" icon={icon} />
  )
}

ToggleIconButton.displayName = 'ToggleIconButton'

// Split Button
type SplitButtonProps = Omit<ButtonBaseProps, 'variant'>

export const SplitButton = ({ ref, children, ...props }: SplitButtonProps) => {
  return (
    // <div {...props} variant="split" className={styles.split}>
    <div className={styles.split}>
      <ButtonBase {...props} className={styles.content}>{children}</ButtonBase>
      <IconButton {...props} icon={<ChevronUp />} className={styles.indicator} />
    </div>
    // </div>
  )
}

SplitButton.displayName = 'SplitButton'