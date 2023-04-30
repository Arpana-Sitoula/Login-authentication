import React from 'react'

const Button = ({title, value, onClick}) => {
  return (
    <button  value={value} onClick={onClick}>{title}</button>
  )
}

export default Button