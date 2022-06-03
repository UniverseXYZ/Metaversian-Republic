import { ChakraProvider, ChakraProviderProps, extendTheme } from '@chakra-ui/react';
import React from 'react';

import * as components from './components';

const theme = extendTheme({
  fontSizes: {
    '4xl': '32px',
  },
  fonts: {
    heading: `'Blocket Display', sans-serif`,
    body: `'Blocket Sans', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: '#1C0531',
      },
    },
  },
  components: {
    ...components,
  },
});

export const Theme: React.FC<ChakraProviderProps> = (props) => (
  <ChakraProvider theme={theme} {...props} />
);
