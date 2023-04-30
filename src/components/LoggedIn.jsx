import React, { useState } from 'react';
import Button from './resuable/Button';
import Login from '../components/Login';
import Form from '../components/form';

const LoggedIn = () => {
    const [isLogIn, setIsLogIn] = useState(true);

    const handleYesClick = () =>{
       setIsLogIn(true);
       console.log("Yes");
    }
    const handleNoClick = () =>{
        setIsLogIn(false);
        console.log("No");
    }
 
    let content;
    if (!isLogIn) {
        content = <Form />;
    } else {
        content = <Login />;
    }

    return (
        <div>
            <p>Already have an account?</p>
            <Button title="Yes" value="true" type="submit" onClick={handleYesClick}/>
            <Button title="No" value="false" type="submit" onClick={handleNoClick} />

            {content}
        </div>
    )
}

export default LoggedIn;
