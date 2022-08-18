import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
      <title>Lipodat|company</title>
      <link rel="shortcut icon" href="logo.ico" type="image/x-icon" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet"/>
    </Head>
    <Component {...pageProps} />
  </>)
  
  
}

export default MyApp
