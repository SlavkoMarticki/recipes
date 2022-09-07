import React, { useState, useEffect } from "react";
import "./userRecipes.css";
import { useNavigate } from "react-router-dom";
import EditRecipe from "../editRecipe/EditRecipe";

export default function UserRecipes(props) {
  const { setRecipeDetails, newRecipe } = props;
  const [recipesData, setRecipesData] = useState([]);
  const [uzmiPodatke, setUzmiPodatke] = useState([]);

  useEffect(() => {
    if (newRecipe.lenght != 0) {
      setRecipesData([...recipesData, newRecipe]);
    }
  }, newRecipe);

  const displayRecipesData = recipesData.map((item, index) => {
    console.log(item);
    if (item != null) {
      return (
        <div className="recipe">
          <img src={recipesData[index].img} />
          <p>{recipesData[index].title}</p>
          <button
            onClick={() => {
              setRecipeDetails({
                ingredients: recipesData[index].ingredients,
                title: recipesData[index].title,
                mesures: recipesData[index].measure,
                instructions: recipesData[index].instructions,
                open: true,
              });
            }}
          >
            Details
          </button>
          <button
            onClick={() => {
              <EditRecipe setUzmiPodatke={setUzmiPodatke}/>;
            }}
          >
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
