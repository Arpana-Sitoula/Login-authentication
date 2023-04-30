import React from 'react'

const Input = ({labelFor, inputType, inputName}) => {
  return (
    <React.Fragment>
        <label>{labelFor}</label>
        <input type={inputType} name = {inputName} />
    </React.Fragment>
  )
}

export default Input