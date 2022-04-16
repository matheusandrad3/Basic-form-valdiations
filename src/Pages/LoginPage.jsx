import React, { useEffect, useState } from 'react';
import { validate } from '../common/validate';
import Button from '../Components/Buttons/Button';
import Input from '../Components/Inputs/Input';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isLoginSuccessful, setIsLoginSuccessful]=useState(false);


    const handleSubmit = (event) =>{
    event.preventDefault();
    setErrors(validate({ email, password }));

  }
  useEffect(()=>{
    if(errors.length !== 0){
      setIsLoginSuccessful(true);
    }
  }, [errors]);
    
  return (
    <form>
        {isLoginSuccessful ? 'Login Succesful' : ''}
      LoginPage
      <Input type='email' name='email' placeholder='email' id='email' error={errors.email} value={email} setValue = {setEmail} />
      <Input type='password' name='password' placeholder='password' id='password' error={errors.password} value={password} setValue = {setPassword} />
      <Button name='Login' type='submit' click={handleSubmit} />
    </form>
  )
}

export default LoginPage;
