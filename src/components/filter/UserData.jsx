import React from 'react'

const UserData = ({data}) => {
   const name = data.available ? data.name:
    <span style={{color:"red"}}>
      {data.name}
    </span>
  return (
    <tr>
      <td>{name}</td>
      <td>{data.stack}</td>
    </tr>
  )
}

export default UserData