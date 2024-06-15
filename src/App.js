import React from "react";
// import "./src/App.js";
import Login from './components/Login.js';
import Home from './components/Home';
import Signup from './components/SignUp.js';
import Nutrition from './components/Nutrition.js';
import Recipe from './components/Recipe.js';
import TBD from './components/TBD.js';
import Account from './components/Account';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {

	
return (
	<div>
      {/* <BrowserRouter> */}
	  <Router>
        <Routes>
          <Route path="/Nutrition" element={<Nutrition />} />
          <Route path="/Recipe" element={<Recipe />} />
          <Route path="/TBD" element={<TBD />} />
          <Route path="/Account" element={<Account/>} />
		  <Route path="/" element={<Home/>} />
        </Routes>
	</Router>
      {/* </BrowserRouter> */}
    </div>
	);
};
//
export default App;
