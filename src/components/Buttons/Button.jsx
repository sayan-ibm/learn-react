import React from 'react'

const Button = ({icon, handlingFunc}) => {
  return (
    <div>
        <button onClick={handlingFunc}>{icon}</button>
    </div>
  )
}

export default Button