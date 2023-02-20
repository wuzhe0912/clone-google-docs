import type { AppProps } from 'next/app';
// styles
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/chakra/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
