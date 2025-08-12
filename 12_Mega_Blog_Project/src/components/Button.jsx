import React from 'react'

function Button({
    children,
    type='button',
    bgColor='bg-blue-500',
    textColor='text-white',
    className='',
    ...props
}) {
  return (
    <div>
        <button className={`px-4 py-2 rounded ${bgColor} ${textColor} ${className}`} type={type} {...props}>
            {children}
        </button>
    </div>
  )
}

export default Button