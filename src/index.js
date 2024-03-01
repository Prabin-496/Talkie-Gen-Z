import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
// import TalkButton from './talkbutton';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-et2icwt8cvpvgpxs.us.auth0.com"
    clientId="znP44AzUkkVdULRBIWCoXwQ5bHfHa3AI"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    {/* <TalkButton /> */}
  </Auth0Provider>,
);

reportWebVitals();
