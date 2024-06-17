import React, { useEffect, useState } from 'react';
import { fetchRecipes } from '../apiService';
// import smallLogo from '../assets/../assets/logotransparent.png';
import transparentLogo from '../assets/logotransparent.png'
import userIcon from '../assets/user-icon.png'
import '../styles/account.css';
import { Link } from 'react-router-dom';

const Account = () => {

    const [menu, setMenu] = useState("Account");

    return (
        <div>
          <div className="home-header">
            <div className="logo">
            <Link to="/home">
                <img src={transparentLogo} alt="logo" />
                </Link>
            </div>
            <nav className="navBar">
                <div className="navBarButtons">
                    <button onClick={() => { setMenu("Nutrition") }}>
                        <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/Nutrition'>Nutrition</Link>
                        {menu === "Nutrition" ? <hr /> : <></>}
                    </button>
                    <button onClick={() => { setMenu("Recipe") }}>
                        <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/Recipe'>Recipe</Link>
                        {menu === "Recipe" ? <hr /> : <></>}
                    </button>
                    <button onClick={() => { setMenu("Timer") }}>
                        <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/Timer'>Timer</Link>
                        {menu === "Timer" ? <hr /> : <></>}
                    </button>
                    <button onClick={() => { setMenu("Account") }}>
                        <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/Account'>Account</Link>
                        {menu === "Account" ? <hr /> : <></>}
                    </button>
                </div>
            </nav>
        </div>
        <div className="account-page">
            <div className="sidebar">
                <div className="logo">
                    <Link to="/home">
                        <img src={transparentLogo} alt="logo" />
                    </Link>
                </div>
                <nav className="navBar">
                    <ul>
                        <li><Link to="/account">Account Details</Link></li>
                        <li><Link to="/">Logout</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="main-content">
                <h1>Account Information</h1>
                <div className="user-info">
                    <img src={userIcon} alt="User Icon" className="user-icon" />
                    <p><strong>Username:</strong> John Smith</p>
                    <p><strong>Email:</strong> john.smith@example.com</p>
                    <p><strong>Birthday:</strong> January 1, 1990</p>
                </div>
            </div>
        </div>
        </div>
      );
}

export default Account;