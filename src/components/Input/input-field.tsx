export type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement>

const InputField: React.FC<InputFieldProps> = props => {
  return (
    <input
      {...props}
      className="flex-1 outline-0 placeholder-gray-400 bg-transparent"
    />
  )
}

export default InputField
