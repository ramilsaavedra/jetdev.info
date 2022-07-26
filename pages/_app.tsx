import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Abstract from '../layout/Abstract';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <Abstract />
    </ThemeProvider>
  );
}

export default MyApp;
