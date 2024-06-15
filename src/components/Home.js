import React, { useEffect, useState } from 'react';
import { fetchRecipes } from './apiService';
import './src/Home.css';



const Home = () => {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState(null);
    const [error, setError] = useState(null);

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const result = await fetchRecipes(query);
            setRecipes(result.hits);
    
        } catch (error){
            setError(error.message)
        }
    }



    return (

        <div className = 'home-header'>
            <div className = 'logo'>
                <img src = 'src/assets/logomedfullnoback.png' id = 'logo'/>
            </div>
            <div className = 'navBar'>

            </div>
        </div>

    )



}