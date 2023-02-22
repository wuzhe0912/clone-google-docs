import React from 'react';
import { Button } from '@chakra-ui/react';

type AuthButtonsProps = {};

const AuthButtons: React.FC<AuthButtonsProps> = () => {
  return (
    <>
      <Button>Login</Button>
      <Button>Sign Up</Button>
    </>
  );
};
export default AuthButtons;
