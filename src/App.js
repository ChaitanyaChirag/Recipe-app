import React from 'react';
import { useEffect , useState } from "react"
import './App.css';
import Recipe from './Recipe'

const App = () => {
const APP_ID= "61fb55af";
const APP_KEY= "48ee67cc82b9a7fea5dc0366dd1976d0";

const[recipes, setRecipes]= useState([])
const[search, setSearch]=useState("")
const[query, setQuery]=useState('chicken')
useEffect(() => {
  getRecipes();
}, [query]);
const getRecipes = async ()=>{
  const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
const data = await response.json();
setRecipes(data.hits);
console.log(data.hits);

}
const updateSearch = e=>{
  setSearch(e.target.value);
  console.log(search)
}
const getSearch =e =>{
  e.preventDefault();
  setQuery(search);
  setSearch('')
}
  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
      <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
      <button  className="search-button" type="submit">
        Search
        </button>
      </form>
      <div className= "recipes">
    {recipes.map(recipe =>{
return( 
<Recipe 
key={recipe.recipe.label}
title={recipe.recipe.label}
 calories={recipe.recipe.calories}
 ingredients={recipe.recipe.ingredients}
 image={recipe.recipe.image}/>
)
    })}
    </div>
    </div>
  );
};


export default App;
