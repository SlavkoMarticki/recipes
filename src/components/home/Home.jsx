import React,{useEffect, useState} from "react";
import "./home.css";
import {useNavigate} from "react-router-dom"


const url = "https://www.themealdb.com/api/json/v1/1/random.php"

export default function Home(props){
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState([]);
    const {setRecipeDetails} = props;
    
    useEffect(() => {
        for (let i = 0; i < 8; i++) {
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                   setRecipes(old => [...old, recipes.recipe = data.meals]);        
            })   
        }
    }, []);
    const getIngridents = (recipe) => {
        
        let listIngridients = []
        
        const keys = Object.keys(recipe);
        const filteredKeys = keys.filter(key => key.includes("strIngredient"));
        for (const key  of filteredKeys) {
            if(recipe[key] != ""){
                listIngridients.push(recipe[key])
            }
        }
        return listIngridients;
    }
    const getMeasure = (recipe) => {
        
        let listMeasure = []
        
        const keys = Object.keys(recipe);
        const filteredKeys = keys.filter(key => key.includes("strMeasure"));
        for (const key  of filteredKeys) {
            if(recipe[key] != "" || recipe[key] != null){
                listMeasure.push(recipe[key])
            }
        }
        return listMeasure;
    }
    

    const displayRecipes = recipes.map(item => {
   
        return<div className="recipe" onClick={() =>
            {setRecipeDetails({ingredients: getIngridents(item[0]), title: item[0].strMeal, mesures: getMeasure(item[0]), instructions: item[0].strInstructions, open:true})}}>
                   <img src={item[0].strMealThumb}   />
                   <p>{item[0].strMeal}</p>
               </div>
        
       
    })

    return (
        <div>
            <div className="sideBar">
                <div className="sideBar__logo">
                    <h1>Logo</h1>
                </div>
                <div className="sideBar__buttonList">
                    <button onClick={() => {navigate("/user-recipes")}}>Your Recipes</button>
                    <button onClick={() => {navigate("/add-recipe")}}>Add Recipes</button>
                    <button>Render new Recipes</button>
                </div>
            </div>
            <div className="recipes">
                {displayRecipes}
            </div>
        </div>
    )
}