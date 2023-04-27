import React from 'react';
import Username from '../components/Username';
import Password from '../components/Password';
import Captcha from '../components/Captcha';
import RememberMe from '../components/RememberMe';
import LoginButton from '../components/LoginButton';
import '../styles/login.scss';


const Login = () => {
  return (
    <React.Fragment>
      <div className='login'>
        <div className='heading'>Login</div>
        <div className='formEl'>
        <Username></Username>
        <Password></Password>
        <Captcha></Captcha>
        <RememberMe></RememberMe>
        <LoginButton></LoginButton>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Login;