// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react';

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      100: '#ff3c00',
    },
    fonts: {
      body: 'Open Sans, sans-serif',
    },
  },
});
