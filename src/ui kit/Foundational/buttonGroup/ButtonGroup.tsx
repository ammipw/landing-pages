interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  // Define any props for ButtonGroup if needed
}

function ButtonGroup({children, ...props}: ButtonGroupProps) {
  return (
    <div {...props}>
      {children}
    </div>
  )
}

function ConnectedButtonGroup() {
  return (
    <></>
  )
}

export default ButtonGroup