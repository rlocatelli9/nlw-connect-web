import { twMerge } from 'tailwind-merge'

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const IconButton: React.FC<IconButtonProps> = ({ className, ...rest }) => {
  return (
    <button
      className={twMerge(
        'p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300',
        className
      )}
      {...rest}
    />
  )
}

export default IconButton
