import { Search } from "lucide-react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  ref?: React.Ref<HTMLInputElement>;
}

export const Input = ({ ref, className, ...props }: InputProps) => {
  return (
    <div className={`flex items-center border border-gray-300 rounded-full p-0 w-full max-w-2xl overflow-hidden focus-within:ring-2 focus-within:ring-black hover:bg-gray-100 cursor-text ${className}`}>
      <label htmlFor="search" className="p-2 cursor-text"><Search /></label>
      <input id="search" type="text" placeholder={`Search for "apple bottom jeans"`} ref={ref} className="w-full py-2 outline-none bg-transparent" autoComplete="off" {...props} />
    </div>
  )
}