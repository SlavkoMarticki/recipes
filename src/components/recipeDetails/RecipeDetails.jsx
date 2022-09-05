import React, {useState, useEffect} from 'react';
import ReactDom from "react-dom";
import "./recipeDetails.css";


export default function RecipeDetails(props) {
  const [openTab, setOpenTab] = useState(false);
  const {recipeDetails} = props;
  const {ingredients = [], title, open, instructions = [],mesures = []} = recipeDetails;

  
  useEffect(() => {
    setOpenTab(open)
  }, [recipeDetails])


  const displayIngridentsAndMeasure = ingredients.map((item, index) => {
    const value = mesures[index];
    if(value != undefined && item != undefined){
        return  <li>{item} {value}</li>
    }
});

  if(title != undefined && openTab == true ){
    return ReactDom.createPortal (
      <div className='recipeDetailsBackground'>
        <div className='recipeDetailsBlock'>
          <div className='recipeDetailsBlock__header'>
            <h2>{title}</h2>
            <button onClick={() => setOpenTab(false)}>X</button>
          </div>
          <div className='recipeDetailsBlock__body'>
              <div className='recipeDetailsBlock__body__ingredient'>  
                <ul>
                  {displayIngridentsAndMeasure}
                </ul>
              </div>
              <div className='recipeDetailsBlock__body__description'>
                <p>{instructions}</p>
              </div>
          </div>
        </div>
      </div>, document.getElementById('modal')
    );
  }
 
}
