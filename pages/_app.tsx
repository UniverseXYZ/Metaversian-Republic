import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';

import { BlocketDisplay, BlocketSans, Theme } from '@app/theme';

import '@app/globals.css';
import { Provider } from 'react-redux';
import 'src/components/popups/PopUpStyle.scss';
import '@app/components/carousel/Hero.scss';
import store from 'utils/dispatch';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <Provider store={store}>
      <Theme>
        <Global styles={BlocketDisplay} />
        <Global styles={BlocketSans} />
        <Component {...pageProps} />
      </Theme>
    </Provider>
  );
}

export default MyApp;
