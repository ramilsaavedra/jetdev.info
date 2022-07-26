import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
