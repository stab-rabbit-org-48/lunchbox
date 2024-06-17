import React from 'react';
import { useNavigate } from 'react-router-dom';
import smallLogo from '../assets/lunchboxlogosmall.png';
import '../styles/account.css';

const SignUp = () => {
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

    return (
        <div className="accountBox">
            <header className="header">
                <img src={smallLogo} alt="Lunchbox Logo" />
                <h1>LunchBox</h1>
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
                    <button type="submit">Create Account</button>
                </form>
                <button onClick={handleClick}>Already have an account? Login</button>
            </div>
        </div>
    );
};

export default SignUp;