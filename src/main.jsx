import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App';
import { Web3ModalProvider } from './utils/Web3ModalProvider';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Web3ModalProvider>
    <App />
    </Web3ModalProvider>
  </React.StrictMode>
);