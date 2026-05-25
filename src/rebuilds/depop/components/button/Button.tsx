import styles from './button.module.css';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  ref?: React.Ref<HTMLButtonElement>;
  color?: "filled" | "outlined" | "text";
  size?: "small" | "medium" | "large";
}

export const Button = ({ ref, children, className, color = "filled", size = "small", ...props }: ButtonProps) => {
  return (
    <button {...props} ref={ref} className={`${styles.button} ${styles[color]} ${styles[size]} ${className || ''}`} >
      { children }
    </button>
  )
}