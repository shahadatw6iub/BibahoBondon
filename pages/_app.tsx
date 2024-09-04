import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '../components/Navbar';

import WalletContextProvider from '../contexts/WalletContextProvider';
import TransitionContextProvider from '../contexts/TransitionContextProvider';
import Head from 'next/head';
import { UploadProvider } from '../contexts/UploadContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BibahoBondhon</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <WalletContextProvider>
        <Navbar />
        <ToastContainer />
        <TransitionContextProvider>
          <UploadProvider>

            <Component {...pageProps} />
            <footer className="bg-slate-900 text-neutral-content p-4">
              <div className="container mx-auto text-center">
                © 2024 BlockLab. All rights reserved.
              </div>
            </footer>
          </UploadProvider>

        </TransitionContextProvider>
      </WalletContextProvider>
    </>
  );
}

export default MyApp
