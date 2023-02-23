import { Button, Input } from '@chakra-ui/react';
import React from 'react';

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [loginForm, setLoginForm] = React.useState({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    console.log(loginForm);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        name='email'
        placeholder='Email'
        type='email'
        mb={2}
        onChange={() => {}}
      />
      <Input
        name='password'
        placeholder='Password'
        type='password'
        onChange={() => {}}
      />
      <Button type='submit'>Login</Button>
    </form>
  );
};
export default Login;
