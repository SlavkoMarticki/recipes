import React, { useState } from "react";
import PageNotFoundError from "./components/pageNotFoundError/PageNotFoundError";
import LandingPage from "./components/welcomePage/LandingPage";
import Home from "./layouts/homePage/Home";
import RecipeDetails from "./components/recipeDetails/RecipeDetails";
import UserRecipes from "./components/userRecipes/UserRecipes";
import AddRecipe from "./components/addRecipe/AddRecipe";
import EditRecipe from "./components/editRecipe/EditRecipe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [newRecipe, setNewRecipe] = useState([]);
  const [] = useState([]);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route
            path="/home"
            element={<Home setRecipeDetails={setRecipeDetails} />}
          ></Route>
          <Route path="*" element={<PageNotFoundError />}></Route>
          <Route
            path="/user-recipes"
            element={
              <UserRecipes
                setRecipeDetails={setRecipeDetails}
                newRecipe={newRecipe}
              />
            }
          />
          <Route
            path="/add-recipe"
            element={<AddRecipe setNewRecipe={setNewRecipe} />}
          ></Route>
          <Route path="/edit-recipe" element={<EditRecipe />}></Route>
        </Routes>
      </Router>
      <RecipeDetails recipeDetails={recipeDetails} />
    </div>
  );
}
