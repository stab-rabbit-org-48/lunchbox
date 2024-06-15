import React, { useEffect, useState } from 'react';
import { fetchRecipes } from '../apiService';
import smallLogo from '../assets/lunchboxlogosmall.png';
import '../styles/Home.css';


	// </header>
const SignUp = () => {
	

	return (
		<div className="accountBox">
			<h1>LunchBox</h1>
				<header className="header">
					<img src='../assets/lunchboxlogosmall.png'/>
				</header>
			<div className ='boxClass'> 
				<form> 
					<input type='text' placeholder="username" className='inputBox'/>
					<input type='text' placeholder="password" className='inputBox'/>
					<button type='submit'> Create Account </button>
				</form>
			</div>
		</div>
	)
}

export default SignUp;