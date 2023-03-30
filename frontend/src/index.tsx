import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-bsoabtbd2ae2u6vw.us.auth0.com"
      clientId="4WtoMX50JaMfD9TSu5wZ7TOopM0jkkuL"
      authorizationParams={{
        redirect_uri: "http://localhost:3000/products"
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);


