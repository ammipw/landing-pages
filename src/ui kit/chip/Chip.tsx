import { useState } from "react"

import styles from './Chip.module.css'

type ChipProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {}

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