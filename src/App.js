import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Nutrition from './components/Nutrition';
import Recipe from './components/Recipe';
import Timer from './components/Timer';
import Account from './components/Account';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Nutrition" element={<Nutrition />} />
        <Route path="/Recipe" element={<Recipe />} />
        <Route path="/Timer" element={<Timer />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;