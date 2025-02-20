export type InputRootProps = React.HTMLAttributes<HTMLDivElement> & {
  error?: boolean
}
const InputRoot: React.FC<InputRootProps> = ({
  children,
  error = false,
  ...rest
}) => {
  return (
    <div
      {...rest}
      data-error={error}
      className="group flex items-center gap-2 bg-gray-800 h-12 border border-gray-600 text-gray-100 rounded-md w-full px-4 focus-within:border-gray-100 data-[error=true]:border-danger"
    >
      {children}
    </div>
  )
}

export default InputRoot
