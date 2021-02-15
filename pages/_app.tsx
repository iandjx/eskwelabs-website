import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';
import Router from 'next/router';
import NProgress from 'nprogress';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

declare global {
  interface Window {
    gtag: (
      type: string,
      eventName: string,
      options: { method?: string; page_location?: string; page_path?: string }
    ) => void;
  }
}

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
  if (window && window.gtag) {
    window.gtag('send', 'page_view', {
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
  }
});
Router.events.on('routeChangeError', () => NProgress.done());

Sentry.init({
  dsn: 'https://9c11a9dee49049adad14d00a8b305c5f@sentry.eskwelabs.com/2',
  autoSessionTracking: true,
  integrations: [new Integrations.BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app';

function EskwelabsApp({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// EskwelabsApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default EskwelabsApp;
