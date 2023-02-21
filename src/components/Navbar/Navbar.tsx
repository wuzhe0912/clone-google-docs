import React from 'react';
import { Flex, Image } from '@chakra-ui/react';

const Navbar: React.FC = () => {
  return (
    <Flex bg='white' height='44px' padding='6px 12px'>
      <Flex align='center'>
        <Image src='/images/redditFace.svg' height='30px' alt='logo' />
        <Image
          src='/images/redditText.svg'
          display={{ base: 'none', md: 'unset' }}
          height='46px'
          alt='logo text'
        />
      </Flex>
    </Flex>
  );
};

export default Navbar;
