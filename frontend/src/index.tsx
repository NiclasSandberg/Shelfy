import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import AuthWrapper from './components/AuthWrapper';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-bsoabtbd2ae2u6vw.us.auth0.com"
      clientId="reCDJ9IYAH79T8k1TXongVDR4aKMv0AA"
      authorizationParams={{
        redirect_uri: "http://localhost:3000/products"

      }}

    >
      <AuthWrapper>

        <App />
      </AuthWrapper>
    </Auth0Provider>
  </React.StrictMode>
);
