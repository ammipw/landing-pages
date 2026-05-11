interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function Chip(props: ChipProps) {
  return <button {...props} className="px-4 py-2 bg-gray-200 rounded">{props.children}</button>
}

export default Chip