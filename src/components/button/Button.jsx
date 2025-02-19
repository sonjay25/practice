import React from 'react'

function Button({onClick, children}) {
  return (
    <button className='text-green-400  bg-red-400 rounded-lg border-4 shadow-lg stroke-green-500 fill-red-400' onClick={onClick}>
      {children}
    </button>
  )
}

export default Button