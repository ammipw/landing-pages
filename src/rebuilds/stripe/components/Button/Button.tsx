import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  fill?: 'light' | 'dark' | 'none';
  arrow?: boolean;
  outline?: boolean;
}

function Button({ children, fill, arrow, outline }: ButtonProps) {
  const classNames = [
    styles.btn,
    fill ? styles[`btn-fill-${fill}`] : '',
    arrow ? styles['btn-arrow'] : '',
    outline ? styles['btn-outline'] : '',
  ].join(' ');

  return (
    <button className={classNames}>
      <span>{children}</span>
    </button>
  )
}

export default Button