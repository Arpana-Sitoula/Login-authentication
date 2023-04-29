import React from 'react'

const Username = () => {
  const handleOnChange = (event) =>{
    if(event.target.value < 2){
      console.log("Invalid");
    }
  }
  return (
    <React.Fragment>
      <form>
        <label>Username</label><br/>
        <input type='text' onChange={handleOnChange}></input>
      </form>
    </React.Fragment>
  )
}

export default Username;