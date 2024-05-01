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
    domain="talkie-gen-z.us.auth0.com"
    clientId="YkdnPqgJnF1HcArmTcu3E7FaxHWWEWKV"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    {/* <TalkButton /> */}
  </Auth0Provider>,
);

reportWebVitals();
