import styles from './Badge.module.css';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  value?: number;
  max_value?: number;
}

function Badge({ value, max_value = 999, ...props }: BadgeProps) {
  return (
    <span {...props}
      className={`${styles.badge} ${value !== undefined ? styles.large : styles.small} ${props.className || ''}`}
    >
      {value && (value > max_value ? `${max_value}+` : value)}
    </span>
  )
}

export default Badge