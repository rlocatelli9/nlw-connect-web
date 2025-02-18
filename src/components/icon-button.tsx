import React, { PropsWithChildren } from 'react';

export type IconButtonProps = PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>

const IconButton: React.FC<IconButtonProps> = (props) => {
  return (
    <button
      className='p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300'
      {...props}
    />
  )
}

export default IconButton;