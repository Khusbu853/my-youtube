import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className="bg-gray-200 px-4 py-1 m-2 rounded-lg">{name}</button>
    </div>
  )
}

export default Button;
