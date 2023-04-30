import React from 'react';
import Input from '../components/resuable/Input';
import Button from './resuable/Button';


const Login = () => {
  return (
    <React.Fragment>
      <div className='login'>
        <div className='heading'>Login</div>
        <form>
          <Input
            labelFor="Username"
            inputType="text"
            name="name"
          />
          <Input
            labelFor="Password"
            inputType="password"
            name="password"
          />
          <Input
            labelFor="Enter CAPTCHA"
            inputType="text"
            name="captcha"
          />
          <Input
            labelFor="Remember me"
            inputType="checkbox"
            name="name"
          />
        </form>
        <Button
          buttonTitle="submit"
          type="submit" />
      </div>
    </React.Fragment>
  )
}

export default Login;