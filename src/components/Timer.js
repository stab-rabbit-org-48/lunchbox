import React, { useEffect, useState } from 'react';
import { fetchRecipes } from '../apiService';
// import smallLogo from '../assets/../assets/logotransparent.png';
import transparentLogo from '../assets/logotransparent.png'
import { Link } from 'react-router-dom';
import '../styles/Timer.css'



const Recipe = () => {

  const [menu, setMenu] = useState("");
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(10);
  const [initialMinutes, setInitialMinutes] = useState(1);
  const [initialSeconds, setInitialSeconds] = useState(10);

  useEffect(() => {
    let interval
    if (menu === 'Timer') {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds-1);
        } else if (minutes > 0) {
          setMinutes(minutes-1);
          setSeconds(59);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [menu, seconds, minutes]);

const handleStartTimer = (e) => {
  e.preventDefault();
  setMinutes(initialMinutes);
  setSeconds(initialSeconds);
  setMenu('Timer');
};

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
    <div className='content'>
      {menu === 'Timer' && (
        <div>
          {minutes === 0 && seconds === 0 ? (
            <h1>Time's up!</h1>
          ) : (
            <h1>
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </h1>
          )}
          </div>
          )}
          {menu !== 'Timer' && (
            <form onSubmit={handleStartTimer}>
                <h1>Cooking Timer</h1>
              <label>
                Minutes:
                <input
                type='number'
                value={initialMinutes}
                onChange={(e) => setInitialMinutes(parseInt(e.target.value))}
                min='0'
                />
              </label>
              <label>
                Seconds:
                <input
                type='number'
                value={initialSeconds}
                onChange = {(e) => setInitialSeconds(parseInt(e.target.value))}
                min='0'
                max='59'
                />
              </label>
            <button type='submit' className='start-timer'>Start Timer</button>
            </form>
          )}
     </div>
    </div>
  );
};

export default Recipe;
