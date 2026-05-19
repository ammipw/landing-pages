import styles from './Badge.module.css';

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  ref?: React.Ref<HTMLSpanElement>;
  value?: number;
  max_value?: number;
}

export default function Badge ({ ref, value, max_value = 99, children, ...props }: BadgeProps) {
  return (
    <div className={styles.badge}>
      <span ref={ref} {...props}
        className={`${styles.indicator} ${value !== undefined ? styles.large : styles.small} ${props.className || ''}`}
      >
        {value && (value > max_value ? `${max_value}+` : value)}
      </span>
      {children}
    </div>
  )
}