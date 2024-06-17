import React from 'react';
import { useNavigate } from 'react-router-dom';
import smallLogo from '../assets/lunchboxlogosmall.png';
import transparentLogo from '../assets/logotransparent.png';
import '../styles/account.css';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    // Add your login logic here
    navigate('/home');
  };

  return (
    <div className="accountBox">
      <header className="header">
        <img src={transparentLogo} alt="Lunchbox Logo" />
        <h1>LunchBox</h1>
        <h2>Log In</h2>
      </header>
      <div className="boxClass">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            className="inputBox"
            required
          />
          <input
            type="password"
            placeholder="password"
            className="inputBox"
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
