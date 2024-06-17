import React, { useEffect, useState } from 'react';
import { fetchRecipes } from '../apiService';
import smallLogo from '../assets/lunchboxlogosmall.png';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {

      // const [query, setQuery] = useState('');
      // const [recipes, setRecipes] = useState(null);
      // const [error, setError] = useState(null);
  
      // // fetches the recipe from the API
  //     useEffect(() => {
  //     const getRecipes = async (event) => {
  //         try {
  //             const result = await fetchRecipes(query);
  //             setRecipes(result.hits.slice(0,3));

  //         } catch (error){
  //             setError(er ror.message)
  //         }
  //     }
  //     getRecipes();
  // }, [query] );

  // use this when a query is input and that will trigger the state change the useEffect hook will then trigger
  // const handleSearch = (event) => {
  //     event.preventDefault();
  //     console.log('event:', event)
  //     setQuery(event.target.elements.query.value);
  // }


    const [menu, setMenu] = useState("Home");


  return (
    <div>
    <div className="home-header">
        <div className="logo">
            <img src={smallLogo} alt="logo" />
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
                <button onClick={() => { setMenu("TBD") }}>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/TBD'>TBD</Link>
                    {menu === "TBD" ? <hr /> : <></>}
                </button>
                <button onClick={() => { setMenu("Account") }}>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/Account'>Account</Link>
                    {menu === "Account" ? <hr /> : <></>}
                </button>
            </div>
        </nav>
    </div>
    <div className='bodyContainer'>
        <div className = 'main-elements-container'>
            <div className = 'quick-ingredients'>
            <div className = 'quick-ingredients-title'> Choose Your Protein</div>
            <button className='ingredient-button'>Chicken</button>
            <button className='ingredient-button'>Beef</button>
            <button className='ingredient-button'>Turkey</button>
            <button className='ingredient-button'>Fish</button>
            <button className='ingredient-button'>Vegetarian</button>
            <button className='ingredient-button'>Add New</button>
            </div>
            <div className='recent-recipes'>
            <div className='recent-recipes-title'>Recent Recipes</div>
            <div className='recipes-list'></div>
          </div>
        </div>
    </div>
</div>
  
    //   {/* <div className="recipeSearch">
    //     <form onSubmit={handleSearch}>
    //       <input
    //         type="text"
    //         name="query"
    //         value={query}
    //         onChange = {(e) => setQuery(e.target.value)} 
    //         placeholder="Search for a recipe"
    //         required
    //       />
    //       <button type="submit">Search</button>
    //     </form>
    //     {recipes.length > 0 && (
    //       <div className='recipeResults'>
    //         {recipes.map((recipe, index) => (
    //           <div key={index} className='recipeCard'>
    //             <h2>{recipe.recipe.label}</h2>
    //             <p>recipe.recipe.source</p>
    //             <img src={recipe.recipe.image} alt={recipe.recipe.label} />
    //           </div>
    //         ))}
    //       </div>
    //     )}
    // //   </div>
    // </> */}
  );
};

export default Home;
