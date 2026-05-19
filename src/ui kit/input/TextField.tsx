import Input, { type InputProps } from "./Input"

interface TextFieldProps extends InputProps {}

function TextField({...props}: TextFieldProps) {
  return <Input {...props} />
}

export default TextField