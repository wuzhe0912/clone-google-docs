import type { AppProps } from 'next/app';
// styles
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/chakra/theme';
import Layout from '@/components/Layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
