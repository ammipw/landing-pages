import Input, { type InputProps } from "./Input"

type TextFieldProps = InputProps & {}

function TextField({...props}: TextFieldProps) {
  return <Input {...props} />
}

export default TextField