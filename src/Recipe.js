import React from "react";
import style from './recipemodule.css'
const Recipe=({title,calories,image,ingredients})=>{
    return(
        <div className={style.recipe}>
            <h1 >{title}</h1>
            <p> Calories : {calories}</p> 
            <ol>{ingredients.map(ingredients =>
                <li>{ingredients.text}</li>
                
                )}</ol>
            <img className={style.image} src={image} alt=""/>
        </div>
    )
}
export default Recipe;