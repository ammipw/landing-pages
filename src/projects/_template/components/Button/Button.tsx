interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
    
export default function Button({...props}: ButtonProps) {
    return <button {...props}>Click Me</button>
}