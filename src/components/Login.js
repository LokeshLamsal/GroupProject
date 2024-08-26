import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      // Handle signup logic here
      console.log('Sign Up:', { username, email, password });
      
      // Simulate successful signup by redirecting to login page
      navigate('/');
    } else {
      // Handle login logic here
      console.log('Login:', { email, password });
      
      // Simulate successful login by redirecting to dashboard
      navigate('/dashboard');
    }
  };

  const toggleSignup = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          )}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="auth-button">
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
        </form>
        <button onClick={toggleSignup} className="toggle-button">
          {isSignup ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'}
        </button>
      </div>
    </div>
  );
}

export default Login;
