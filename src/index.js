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
    domain="dev-8luaqlehtj00eoxi.us.auth0.com"
    clientId="lJL7wlZyyJqHAs4VVSJomYeTmKTkoYuH"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    {/* <TalkButton /> */}
  </Auth0Provider>,
);

reportWebVitals();
