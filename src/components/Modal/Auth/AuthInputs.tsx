import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { authModalStateAtom } from '@/atoms/authModalAtom';
import Login from './Login';
import SignUp from './SignUp';

type AuthInputsProps = {};

const AuthInputs: React.FC<AuthInputsProps> = () => {
  const [modalState, setModalState] = useRecoilState(authModalStateAtom);

  return (
    <Flex direction='column' align='center' width='100%' mt={4}>
      {modalState.view === 'login' ? <Login /> : <SignUp />}
    </Flex>
  );
};
export default AuthInputs;
