import React, { useState } from 'react';


const form = () => {
const [form, setForm] = useState({
    name: "",
    email: ""
});
const onChangeHandle = (event) =>{
    // event.preventDefault();
    const {name,value} = event.target;
    console.log(event.target);
    setForm({
        ...form,
        [name]:value
    })
}
  return (
    <div>
        <form>
            <p>{form.name} </p>
            <label>Name</label>
            <input type='text' name="name" value={form.name} onChange={onChangeHandle}></input><br/>
            <p>{form.email}</p>
            <label>Email</label>
            <input type='email'name="email" value={form.email} onChange={onChangeHandle}></input><br/>
            <button disabled type='submit'>Okay</button>
        </form>
    </div>
  )
}

export default form;