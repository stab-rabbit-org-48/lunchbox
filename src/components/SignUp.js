import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
// import smallLogo from '../assets/lunchboxlogosmall.png';
import transparentLogo from '../assets/logotransparent.png'
import '../styles/account.css';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleClick = () => {
        console.log('Navigating to login');
        navigate('/login');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
        // Add your account creation logic here
        handleClick();
    };

    axios.post('http://localhost:8080/signup', { username, password })
        .then(response => {
            console.log('Account created', response.data);
            handleClick();
        })
        .catch(error => {
            console.log('Error getting account info', error)
        });

    return (
        <div className="accountBox">
            <header className="header">
                <img src={transparentLogo} alt="Lunchbox Logo" />
                <h1>LunchBox</h1>
            </header>
            <div className="boxClass">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="username"
                        className="inputBox"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="password"
                        className="inputBox"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Create Account</button>
                </form>
                <button onClick={handleClick}>Already have an account? Login</button>
            </div>
        </div>
    );
};

export default SignUp;