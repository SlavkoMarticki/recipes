import React, { useState, useEffect } from "react";
import "./userRecipes.css";
import { useNavigate } from "react-router-dom";
import EditRecipe from "../editRecipe/EditRecipe";

export default function UserRecipes(props) {
  const { setRecipeDetails, recipesData } = props;
  
  const setRecipeData = (recipe) => {
    const recipeDetail = {
      ingredients: recipe.ingredients,
      title: recipe.title,
      mesures: recipe.measure,
      instructions: recipe.instructions,
      open: true,
    }
    setRecipeDetails(recipeDetail);
  }
  const displayRecipesData = recipesData.map((item, index) => {
    //console.log(item);
    if (item != null) {
      return (
        <div className="recipe" >
          <img src={recipesData[index].img} />
          <p>{recipesData[index].title}</p>
          <button
            onClick={() => setRecipeData(recipesData[index])}
          >
            Details
          </button>
          <button  onClick={() => {<EditRecipe />;
            }}>
            Edit
          </button>
        </div>
      );
    }
  });

  const navigate = useNavigate();
  return (
    <div>
      <div className="sideBar">
        <div className="sideBar__logo">
          <h1>Logo</h1>
        </div>
        <div className="sideBar__buttonList">
          <button
            onClick={() => {
              navigate("/home");
            }}
          >
            Home
          </button>
          <button
            onClick={() => {
              navigate("/add-recipe");
            }}
          >
            Add Recipes
          </button>
        </div>
      </div>
      <div className="recipes">{displayRecipesData}</div>
    </div>
  );
}
