import React from 'react';
import { Link } from 'react-router-dom';
import smallLogo from '../assets/lunchboxlogosmall.png';
import '../styles/account.css'; // Ensure this path is correct

const SignUp = () => {
    return (
        <div className="accountBox">
            <header className="header">
                <img src={smallLogo} alt="Lunchbox Logo" />
                <h1>LunchBox</h1>
            </header>
            <div className='boxClass'> 
                <form> 
                    <input type='text' placeholder="username" className='inputBox'/>
                    <input type='password' placeholder="password" className='inputBox'/>
                    <button type='submit'>Create Account</button>
                </form>
                <Link to="/login">Already have an account? Login</Link>
            </div>
        </div>
    );
}

export default SignUp;