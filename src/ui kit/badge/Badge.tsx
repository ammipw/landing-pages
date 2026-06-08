export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  ref?: React.Ref<HTMLSpanElement>;
  value?: number;
  max_value?: number;
  label?: string;
}

export default function Badge ({ ref, value, max_value = 99, children, label, ...props }: BadgeProps) {
  const count = value !== undefined ? (value > max_value ? `${max_value}+` : value) : null;

  return (
    <span ref={ref} role="status" aria-label={label} {...props}>
      {value ? count : children}
    </span>
  )
}