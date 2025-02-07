import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { CartProvider } from './Pages/Context/CartProvider';
import { WishlistProvider } from './Pages/Context/WhishlistProvider';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WishlistProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </WishlistProvider>,
);

reportWebVitals();
