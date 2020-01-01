import React, { useContext } from "react";
import IngredientList from "./IngredientList";
import { RecipeContext } from "./App";

export default function Recipe({ ...props }) {
  const { handleRecipeDelete } = useContext(RecipeContext);

  return (
    <div className="recipe">
      <div className="recipe__header">
        <h3 className="recipe__title">{props.name}</h3>
        <div>
          <button className="btn btn--primary mr-1">Edit</button>
          <button
            onClick={() => handleRecipeDelete(props.id)}
            className="btn btn--danger"
          >
            Delete
          </button>
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Cooking Time</span>
        <span className="recipe__value">{props.cookTime}</span>
      </div>
      <div className="recipe_row">
        <span className="recipe__label">Servings</span>
        <span className="recipe__value">{props.servings}</span>
      </div>
      <div className="recipe_row">
        <span className="recipe__label">Instructions:</span>
        <div className="recipe__value recipe__instructions recipe_value--indented">
          {props.instructions}
        </div>
      </div>
      <div className="recipe_row">
        <span className="recipe__label">Ingredients:</span>
        <div className="recipe__value recipe__instructions recipe_value--indented">
          <IngredientList ingredients={props.ingredients} />
        </div>
      </div>
    </div>
  );
}
