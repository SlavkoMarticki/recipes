import React, {useState, useEffect} from "react";
import "./userRecipes.css";
import {useNavigate} from "react-router-dom";
import EditRecipe from "../editRecipe/EditRecipe";

export default function UserRecipes(props){
    const {setRecipeDetails, newRecipe} = props;
    const [recipesData, setRecipesData] = useState([
        {id:0, title: "Cevapi", instructions: "neka instrukcija", ingredients: ["1kg", "3kg"], measure: ["so", "biber"], img: "../../pictures/pic.jpg"}
    ])

    useEffect(() => {
        if(newRecipe != []){
            setRecipesData(recipesData =>[...recipesData,  newRecipe])
        }
    }, newRecipe);

    const displayRecipesData = recipesData.map((item, index) => {
        console.log( item)
        if(item != []){
            return(<div className="recipe" onClick={() =>
                {setRecipeDetails({ingredients: recipesData[index].ingredients, title: recipesData[index].title, mesures: recipesData[index].measure, instructions: recipesData[index].instructions, open:true})}}>
                       <img src={recipesData[index].img}   />
                       <p>{recipesData[index].title}</p>
                       <button>Edit</button>
                   </div>);
        }
       
    });

    const navigate = useNavigate();
    return (<div>
        <div className="sideBar">
            <div className="sideBar__logo">
                <h1>Logo</h1>
            </div>
            <div className="sideBar__buttonList">
                <button onClick={() => {navigate("/home")}}>Home</button>
                <button onClick={() => {navigate("/add-recipe")}}>Add Recipes</button>
            </div>
        </div>
        <div className="recipes">
                {displayRecipesData}
            </div>
    </div>);
}