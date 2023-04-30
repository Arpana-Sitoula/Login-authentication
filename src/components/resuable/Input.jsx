import React from 'react'

const Input = ({labelFor, inputType, inputName, onChange}) => {
  return (
    <React.Fragment>
        <label>{labelFor}</label>
        <input type={inputType} name = {inputName} onChange={onChange}/>
    </React.Fragment>
  )
}

export default Input;