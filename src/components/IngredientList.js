import React from "react";
import Ingredient from "./Ingredient";

export default function IngredientList({
  ingredients,
  handleRecipeAdd,
  handleRecipeDelete
}) {
  const ingredientElements = ingredients.map(ingredient => {
    return <Ingredient key={ingredient.id} {...ingredient} />;
  });
  return <div className="ingredient-grid"> {ingredientElements}</div>;
}
