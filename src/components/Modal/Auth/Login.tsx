import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React from 'react';

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [loginForm, setLoginForm] = React.useState({
    email: '',
    password: '',
  });

  // Firebase login
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
        required
        name='email'
        placeholder='Email'
        type='email'
        onChange={() => {}}
        mb={2}
        fontSize='14px'
        _placeholder={{ color: 'gray.500' }}
        _hover={{
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        _focus={{
          outline: 'none',
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        bg='gray.50'
      />
      <Input
        required
        name='password'
        placeholder='Password'
        type='password'
        onChange={() => {}}
        mb={2}
        fontSize='14px'
        _placeholder={{ color: 'gray.500' }}
        _hover={{
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        _focus={{
          outline: 'none',
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        bg='gray.50'
      />
      <Button width='100%' height='36px' mb={2} mt={2} type='submit'>
        Login
      </Button>
      <Flex justifyContent='center' mb={2}>
        <Text fontSize='12px' mr={1}>
          Forgot your password?
        </Text>
        <Text
          fontSize='12px'
          color='blue.500'
          cursor='pointer'
          // onClick={() => toggleView("resetPassword")}
        >
          Reset
        </Text>
      </Flex>
      <Flex fontSize='12px' justifyContent='center'>
        <Text mr={1}>New here?</Text>
        <Text
          color='blue.500'
          fontWeight={700}
          cursor='pointer'
          // onClick={() => toggleView("signUp")}
        >
          SIGN UP
        </Text>
      </Flex>
    </form>
  );
};
export default Login;
