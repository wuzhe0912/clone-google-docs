import { authModalStateAtom } from '@/atoms/authModalAtom';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Flex,
} from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import AuthInputs from './AuthInputs';

type AuthModalProps = {};

const AuthModal: React.FC<AuthModalProps> = () => {
  const [modalState, setModalState] = useRecoilState(authModalStateAtom);

  const handleClose = () => {
    setModalState((prev) => ({ ...prev, open: false }));
  };

  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {modalState.view === 'login' ? 'Login' : 'Sign Up'}
            {modalState.view === 'resetPassword' && 'Reset Password'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
          >
            <Flex
              direction='column'
              alignItems='center'
              justifyContent='center'
              width='70%'
              border='1px solid red'
            >
              <AuthInputs />
              {/* <OAuthButtons />
              <ResetPassword /> */}
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModal;
