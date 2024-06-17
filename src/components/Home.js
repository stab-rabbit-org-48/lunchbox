import React, { useEffect, useState } from 'react';
import { fetchRecipes } from '../apiService';
// import smallLogo from '../assets/../assets/logotransparent.png';
import transparentLogo from '../assets/logotransparent.png';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('Navigating to recipe page');
    navigate('/recipe');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    handleClick();
  };
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  // fetches the recipe from the API
      useEffect(() => {
      const getRecipes = async (event) => {
          try {
              const result = await fetchRecipes(query);
              setRecipes(result.hits.slice(0,3));

          } catch (error){
              setError(error.message)
          }
      }
      getRecipes();
  }, [query] );

//   use this when a query is input and that will trigger the state change the useEffect hook will then trigger
  const handleSearch = async (event) => {
      event.preventDefault();
      try {
        const result = await fetchRecipes(query);
        setRecipes(result.hits.slice(0,3));
        console.log('searching')
  } catch(error) {
    setError(error.message);
  }
};

  const [menu, setMenu] = useState('Home');

  return (
    <>
      <div className="home-header">
            <div className="logo">
            <Link to="/home">
                <img src={transparentLogo} alt="logo" onClick={() => { setMenu("Home") }}/>
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
        <div>
    <div className="recipeSearch">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="query"
            value={query}
            onChange = {(e) => setQuery(e.target.value)}
            placeholder="Search for a recipe"
            required
          />
          <button type="submit">Search</button>
        </form>
        {recipes && recipes.length > 0 && (
          <div className='recipeResults'>
            {recipes.map((recipe, index) => (
              <div key={index} className='recipeCard'>
                <h2>{recipe.recipe.label}</h2>
                <p>{recipe.recipe.source}</p>
                <img src={recipe.recipe.image} alt={recipe.recipe.label} />
              </div>
            ))}
          </div>
        )}
    </div>
      <div className="bodyContainer">
        <div className="main-elements-container">
          <div className="quick-ingredients">
            <div className="quick-ingredients-title"> Choose Your Protein</div>
            <button onClick={handleClick} className="ingredient-button">
              Chicken
            </button>
            <button onClick={handleClick} className="ingredient-button">
              Beef
            </button>
            <button onClick={handleClick} className="ingredient-button">
              Turkey
            </button>
            <button onClick={handleClick} className="ingredient-button">
              Fish
            </button>
            <button onClick={handleClick} className="ingredient-button">
              Vegetarian
            </button>
            <button className="ingredient-button">Add New</button>
          </div>
          <div className="recent-recipes">
            <div className="recent-recipes-title">Recent Recipes</div>
            <div className="recipes-list">
                <Link to= '/recipe'>
                <div className="recent-recipe">
                    <div className="recent-recipe-title"> Honey Garlic Chicken</div>
                    <div className="recent-recipe-nutrition">Cal: 583 Protein: 58g Carb: 43g Fat: 20g </div>
                    <div className="recent-recipe-ingred"> Chicken, Rice, Broccoli, Quinoa...</div>
                </div>
                </Link>
                <Link to= 'recipe'>
                <div className="recent-recipe">
                    <div className="recent-recipe-title">Fried Siracha Tofu</div>
                    <div className="recent-recipe-nutrition">Cal: 254 Protein: 63g Carb: 10g Fat: 87g</div>
                    <div className="recent-recipe-ingred">Tofu, Siracha, Green Onions, Cornstarch...</div>
                </div>
                </Link>
                <Link to= 'recipe'>
                <div className="recent-recipe">
                    <div className="recent-recipe-title">Smoked Wagyu Beef Shank</div>
                    <div className="recent-recipe-nutrition">Cal: 918 Protein: 385g Carb: 0g Fat: 631g</div>
                    <div className="recent-recipe-ingred">Beef Shank, Beef Tallow, Beef Broth, Red Wine...</div>
                </div>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </> 
  );
};

export default Home;
