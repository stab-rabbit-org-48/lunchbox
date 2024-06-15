// need to run npm install axios
import axios from 'axios';

// ID from edamam: c00b536b
// key from edamam: 7da2456b2e4730b1595b489a63bebaef
// docs about the API fetch: https://developer.edamam.com/edamam-docs-recipe-api	 

// Create an Account to Access the API

const APP_ID = 'c00b536b';
const APP_KEY = '7da2456b2e4730b1595b489a63bebaef';
const API_URL = 'https://api.edamam.com/api/recipes/v2';

export const fetchRecipes = async (query) => {
  try {
const response = await axios.get(API_URL, {
  params: {
    q: query,
    app_id: APP_ID,
    app_key: APP_KEY,
  },
});
return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error
  }
}