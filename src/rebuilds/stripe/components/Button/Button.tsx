import { ChevronDown } from 'lucide-react';
import styles from './Button.module.css';

type ButtonProps = {
  children: React.ReactNode;
  fill?: 'light' | 'dark' | 'none';
  arrow?: boolean;
  outline?: boolean;
}

function Button({ children, fill, arrow, outline }: ButtonProps) {
  const classNames = [
    styles.btn,
    fill ? styles[`btn-fill-${fill}`] : '',
    outline ? styles['btn-outline'] : '',
  ].join(' ');

  return (
    <button className={classNames}>
      <span>{children}</span>
      {arrow && <ChevronDown size={16} className={styles['btn-arrow']} />}
    </button>
  )
}

export default Button