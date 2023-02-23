import React from 'react';
import { Flex } from '@chakra-ui/react';
import AuthModel from '@/components/Modal/Auth/AuthModal';
import AuthButtons from './AuthButtons';

type RightContentProps = {};

const RightContent: React.FC<RightContentProps> = () => {
  return (
    <>
      <AuthModel />
      <Flex justify='center' align='center'>
        <AuthButtons />
      </Flex>
    </>
  );
};
export default RightContent;
