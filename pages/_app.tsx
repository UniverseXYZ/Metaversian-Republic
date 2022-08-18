import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';

import { BlocketDisplay, BlocketSans, Theme } from '@app/theme';

import '@app/globals.css';
import 'src/components/popups/PopUpStyle.scss';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <Theme>
      <Global styles={BlocketDisplay} />
      <Global styles={BlocketSans} />
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
