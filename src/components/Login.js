import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import smallLogo from '../assets/lunchboxlogosmall.png';
import transparentLogo from '../assets/logotransparent.png';
import '../styles/account.scss';

// auth imports
import { useAuth } from '../hooks/AuthProvider';

const Login = () => {
  const [input, setInput] = useState({
    username: '',
    password: '',
  })
    // const [username , setUsername] = useState('');
    // const [password , setPassword] = useState('')
    // const [error , setError] = useState(false);
    const navigate = useNavigate();
  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //       const response = await fetch('http://localhost:3000/api/login', {
  //           headers: {
  //               'Content-Type': 'application/json'
  //           },
  //           method: 'POST',
  //           body: JSON.stringify({ username, password })
  //       });
  //       console.log('res -->' , response)
  //       console.log('username , password -->' , { username, password })
  //       // if username or password dosen't match (!200)
  //       if (response.status !== 200) {
  //           // alert incorrent username or password. please try again
  //           alert('Incorrect username or password. please try again')
  //       } else if (response.status === 400) {
  //           alert('Password is invalid, please try again')
  //       } else {
  //           response.json();
  //           navigate('/home');
  //       }
  //   } catch (err) {
  //       console.error('Error fetching username and password', err);
  //       setError(true);
  //   }
  // };
  const auth = useAuth();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    console.log('LogIn Submitted!');
    console.log('input.username:', input.username);
    console.log('input.password:', input.password);
    if (input.username !== "" && input.password !== "") {
      auth.loginAction(input);
    }
  }



  return (
    <div className='accountBox'>
      <header className='header'>
        <img src={transparentLogo} alt='Lunchbox Logo' />
        <h1>LunchBox</h1>
        <h2>Log In</h2>
      </header>
      <div className="boxClass">
        <form onSubmit={handleSubmitEvent}>
          <input
            name='username'
            type="text"
            placeholder="username"
            className="inputBox"

            required
            // onChange={(e) => setUsername(e.target.value)}
            onChange={handleInput}
          />
          <input
            name='password'
            type="password"
            placeholder="password"
            className="inputBox"
            required
            // onChange={(e) => setPassword(e.target.value)}
            onChange={handleInput}
          />
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
