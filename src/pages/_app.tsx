import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from '../styles/global';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React</title>
        <link rel="stylesheet" href="/public/next.svg" />
        <link rel="manifest" href="manifest.json" />
        <meta name="description" content="BoilerPlate React" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
