import React, { useState } from 'react';
import Input from './resuable/Input';


const form = () => {
const [form, setForm] = useState({
    name: "",
    email: "",
    username: ""
});
const onChangeHandle = (event) =>{
    // event.preventDefault();
    const {name,value} = event.target;
    console.log(event.target);
    setForm({
        ...form, [name]:value
    })
}
const abilityHandle = () =>{
    if(form.name.length < 7){
        return true;
    }
}
  return (
    <div>
        <form>
            <p>{form.inputname}</p>
            <Input
            labelFor="Username"
            inputType="text"
            inputName = "username"
            value = {form.inputName}
            onChange = {onChangeHandle}
            />
            <p>{form.name} </p>
            <label>Name</label>
            <input type='text' name="name" value={form.name} onChange={onChangeHandle}></input><br/>
            <p>{form.email}</p>
            <label>Email</label>
            <input type='email'name="email" value={form.email} onChange={onChangeHandle}></input><br/>
            <button disabled ={abilityHandle()} type='submit'>Okay</button>
        </form>
    </div>
  )
}

export default form;