import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';

import { BlocketDisplay, BlocketSans, Theme } from '@app/theme';

import '@app/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Global styles={BlocketDisplay} />
      <Global styles={BlocketSans} />
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
