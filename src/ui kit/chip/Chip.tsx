import { useState } from "react"

import styles from './Chip.module.css'

interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function Chip(props: ChipProps) {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <button {...props}
      onClick={() => setIsSelected(prev => !prev)}
      className={`${styles.chip} ${isSelected ? styles.selected : ''}`}>
      {props.children}
    </button>
  )
}

export default Chip