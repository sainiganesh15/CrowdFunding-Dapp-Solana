import React from 'react';
import ReactDOM from 'react-dom';
import { WalletProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <WalletProvider wallets={[new PhantomWalletAdapter()]}>
      <App />
    </WalletProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
