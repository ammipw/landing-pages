interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  user: {
    name: string
    title?: string
    imageUrl?: string
    location?: string
  },
  orientation?: 'horizontal' | 'vertical',
  size?: 'small' | 'medium' | 'large'
}

function Fallback({name}: {name: string}) {
  const initials = name.split(' ').map(n => n.charAt(0)).join('');

  return (
    <div className="rounded-full size-24 bg-gray-300 flex items-center justify-center">
      <span className="text-gray-500 text-4xl font-semibold">{initials}</span>
    </div>
  )
}

function Avatar({ user, orientation = 'horizontal', size = 'medium', ...props }: AvatarProps) {
  return (
    <div {...props}
      className={`inline-flex ${orientation === 'horizontal' ? 'flex-row' : 'flex-col'} items-center`}
    >
      {user.imageUrl ? (
        <img src={user.imageUrl} alt={user.name} className="rounded-full size-24" />
      ) : (
        <Fallback name={user.name} />
      )}
      <div className={`${orientation === 'vertical' ? 'mt-4 text-center' : 'ml-4'}`}>
        <h3 className="text-lg font-semibold">{user.name}</h3>
        {user.title && <p className="text-sm text-gray-500">{user.title}</p>}
        {user.location && <p className="text-sm text-gray-500">{user.location}</p>}
      </div>
    </div>
  )
}

export default Avatar