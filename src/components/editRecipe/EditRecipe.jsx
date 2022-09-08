import React from "react";
import "./editRecipe.css";
import {useNavigate} from "react-router-dom";

export default function EditRecipe(props){
    const navigate = useNavigate();

    
    return (<div>
        <div className="sideBar">
           <div className="sideBar__logo">
               <h1>Logo</h1>
           </div>
           <div className="sideBar__buttonList">
               <button onClick={() => {navigate("/home")}}>Home</button>
               <button onClick={() => {navigate("/user-recipes")}}>Your Recipes</button>
               <button onClick={() => {navigate("/add-recipe")}}>Add Recipe</button>
           </div>
       </div>
   </div>);
}