interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  value?: string | number;
}

function Badge({ value, ...props }: BadgeProps) {
  return (
    <span {...props}
      className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 px-2 py-1 bg-red-300 rounded-full text-sm text-red-900"
    >
      {value}
    </span>
  )
}

export default Badge