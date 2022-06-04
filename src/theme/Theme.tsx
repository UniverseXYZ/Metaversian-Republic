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
        bg: 'wine.100',
      },
    },
  },
  colors: {
    cream: {
      10: '#FFFBF31A',
      20: '#FFFBF333',
      40: '#FFFBF366',
      60: '#FFFBF399',
      80: '#FFFBF3CC',
      100: '#FFFBF3',
    },
    wine: {
      10: '#1C05311A',
      20: '#1C053133',
      40: '#1C053166',
      60: '#1C053199',
      80: '#1C0531CC',
      100: '#1C0531',
    },
    peach: {
      a10: '#FB884D1A',
      a20: '#FB884D33',
      a40: '#FB884D66',
      a60: '#FB884D99',
      a80: '#FB884DCC',
      a100: '#FB884D',
      b10: '#F340781A',
      b20: '#F3407833',
      b40: '#F3407866',
      b60: '#F3407899',
      b80: '#F34078CC',
      b100: '#F34078',
    },
    sea: {
      a10: '#01AEE91A',
      a20: '#01AEE933',
      a40: '#01AEE966',
      a60: '#01AEE999',
      a80: '#01AEE9CC',
      a100: '#01AEE9',
      b10: '#6C42E31A',
      b20: '#6C42E333',
      b40: '#6C42E366',
      b60: '#6C42E399',
      b80: '#6C42E3CC',
      b100: '#6C42E3',
    },
  },
  components: {
    ...components,
  },
});

export const Theme: React.FC<ChakraProviderProps> = (props) => (
  <ChakraProvider theme={theme} {...props} />
);
