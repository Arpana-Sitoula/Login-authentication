import React from 'react';
import Username from '../components/Username';
import Password from '../components/Password';
import Captcha from '../components/Captcha';
import RememberMe from '../components/RememberMe';
import LoginButton from '../components/LoginButton';


const Login = () => {
  return (
    <React.Fragment>
      <div>Login</div>
      <Username></Username>
      <Password></Password>
      <Captcha></Captcha>
      <RememberMe></RememberMe>
      <LoginButton></LoginButton>
    </React.Fragment>
  )
}

export default Login;