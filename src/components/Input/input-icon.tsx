export type InputIconProps = React.HTMLAttributes<HTMLSpanElement>

const InputIcon: React.FC<InputIconProps> = props => {
  return (
    <span
      {...props}
      className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
    />
  )
}

export default InputIcon
