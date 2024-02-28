import React, { useState } from 'react'; // Import useState for conditional rendering
import logo from './Rotation.png';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import SearchBar from './SearchBar'; // Import your SearchBar component

function App() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State for search bar visibility

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen); // Function to toggle search bar

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* Username and Search bar conditionally rendered */}
        {isAuthenticated && (
          <>
            <ul className='userNameShow'><p> Welcome {user.name}</p></ul>
            <SearchBar isOpen={isSearchOpen} toggleSearch={toggleSearch} />
          </>
        )}

        {/* Login/Logout button */}
        {isAuthenticated ? (
          <ul>
            <button className='LogInButton' onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
          </ul>
        ) : (
          <ul>
            <button className='LogInButton' onClick={() => loginWithRedirect()}>Log In</button>
          </ul>
        )}
      </header>

      {/* Push-to-Talk button conditionally rendered */}
      {isAuthenticated && <button className='PushToTalkButton'>Push to Talk</button>}
    </div>
  );
}

export default App;
