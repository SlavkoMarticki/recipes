import React, { useRef } from "react";
import "./addRecipe.css";
import { useNavigate } from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function AddRecipe(props) {
  const { setNewRecipe } = props;
  const navigate = useNavigate();
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const instructionsRef = useRef(null);

  const handleInput = (event) => {
    if (event.target.value === "addButton") {
      setNewRecipe({
        title: titleRef.current.value,
        instructions: titleRef.current.value,
        img: imageRef.current.value,
      });
      toast("New recipe added", 
        {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      });
    }
  };

  return (
    <div>
      <ToastContainer />
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
              navigate("/user-recipes");
            }}
          >
            Your Recipes
          </button>
        </div>
      </div>
      <div className="addRecipeBlock">
        <h1>Add recipe</h1>
        <div className="addRecipeBlock__inputs">
          <label htmlFor="img">Image</label> <br />
          <input id="img" name="image" ref={imageRef} /> <br />
          <label htmlFor="title">Title</label> <br />
          <input id="title" name="title" ref={titleRef} /> <br />
          <label htmlFor="instructions">Instructions</label>
          <br />
          <textarea
            id="instructions"
            name="instructions"
            ref={instructionsRef}
          />
          <button value="addButton" onClick={handleInput}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
