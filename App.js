<<<<<<< HEAD
import React, { useState, useEffect, createRef } from 'react';
import Switch from 'react-switch';
import walkieTalkieSound from './walkie_talkie_beep.mp3';
import onLogo from './of.png';
import offLogo from './on.png';
import rotationLogo from './Rotation.png';
import { useAuth0 } from '@auth0/auth0-react';
import Slider from '../src/slider';
// import FeedbackForm from './FeedbackForm';

const TalkButton = ({ isTalking, onMouseDown, onMouseUp, onTouchStart, onTouchEnd }) => (
  <button
    onMouseDown={onMouseDown}
    onMouseUp={onMouseUp}
    onTouchStart={onTouchStart}
    onTouchEnd={onTouchEnd}
    style={{
      width: '500px',
      height: '500px',
      backgroundImage: `url(${isTalking ? offLogo : onLogo})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      color: 'transparent',
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      position: 'relative',
    }}
  >
    {isTalking && (
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '10px',
            padding: '5px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          talking
        </span>
      </div>
    )}
  </button>
);

function App() {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const [isTalking, setIsTalking] = useState(false);
  const audioRef = createRef();
  const [StatusSwitch, setStatusSwitch] = useState(false);
  const [showRotationLogo, setShowRotationLogo] = useState(true);

  const handlePushToTalk = () => {
    setIsTalking(true);
    audioRef.current.play();
    // Additional logic for audio recording and transmission
  };

  const handleReleaseTalk = () => {
    setIsTalking(false);
    // Additional logic to stop audio recording and transmission
  };

  const handleStatusSwitchChange = (checked) => {
    setStatusSwitch(checked);
    // Additional logic for switching between friends
  };

  useEffect(() => {
    setShowRotationLogo(!isAuthenticated);
  }, [isAuthenticated]);

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', marginTop: '150px' }}>
      {showRotationLogo && (
        <img
          src={rotationLogo}
          className="rot"
          alt="Talkie Gen Z - Logo"
          style={{ width: '500px', height: '500px'}}
          
        />
      )}
      
      {isAuthenticated && (
      <>
    <div>
      <div style={{ marginBottom: '20px' }}>
        
        
      </div>
      <TalkButton
        isTalking={isTalking}
        onMouseDown={handlePushToTalk}
        onMouseUp={handleReleaseTalk}
        onTouchStart={handlePushToTalk}
        onTouchEnd={handleReleaseTalk}
      />
    </div>
    <Slider />
    {/* <FeedbackForm /> */}
  </>
      )}
      <audio ref={audioRef} src={walkieTalkieSound} />
      {!isAuthenticated ? (
        <button className="LogInButton" onClick={() => loginWithRedirect()}>Login</button>
      ) : (
        <div>
          
          <ul>
            <p>Welcome {user.name}</p>
          </ul>
          <div  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <Switch
          onChange={handleStatusSwitchChange}
          checked={StatusSwitch}
          offColor="#d3d3d3"
          onColor="#86d3ff"
          uncheckedIcon={false}
          checkedIcon={false}
          height={30}
          width={60}
          handleDiameter={30}
          
        />
        <p>Status: {StatusSwitch ? 'Online' : 'Offline'}</p>
        </div>
          <button className="LogInButton" onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;
=======
import React from "react";

import './App.css';
import Home from '../src/home';

function App() {
  return (
    <div className="App">
      <Chatbot />
      <Home />
      
    </div>
  );
}

export default App; 
>>>>>>> 2cf4f49 (AI)
