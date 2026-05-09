interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}
    
export default function Link({...props}: LinkProps) {
    return <a {...props}>Click Me</a>
}