import React from 'react'

const Category = ({gender}) => {
  return (
    <tr>
        <th colSpan="2">
        {gender}
        </th> 
    </tr>
  )
}

export default Category