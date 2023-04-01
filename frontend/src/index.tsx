import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import AuthWrapper from './components/AuthWrapper';
import { shelfyConfig } from './config/config';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={shelfyConfig.domain}
      clientId={shelfyConfig.appId}
      authorizationParams={{
        redirect_uri: "http://localhost:3000/products",
        audience: shelfyConfig.audience,
        scope: shelfyConfig.scope
      }}

    >
      <AuthWrapper>
        <App />
      </AuthWrapper>
    </Auth0Provider>
  </React.StrictMode>
);
