import logo from './Rotation.png';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import Login from './login';

function App() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  console.log("Current User" , user);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      

        {/* Show username if user is logged in */}
        <ul className='userNameShow'>{isAuthenticated && <p> Welcome {user.name}</p>}</ul>

        {/* Show login button if user is not logged in, otherwise show logout button */}
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
      <div>
        <Login />
      </div>
    </div>
  );
}

export default App;
