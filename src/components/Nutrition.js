import React, { useEffect, useState } from 'react';
import { fetchRecipes } from '../apiService';
import smallLogo from '../assets/lunchboxlogosmall.png';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Nutrition = () => {
  return (
    <div>
      <header className="header">
        <h1>Nutrition</h1>
      </header>
      <div>{/* Nutrition information here */}</div>
    </div>
  );
};

export default Nutrition;
