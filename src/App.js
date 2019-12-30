import React from "react";
import RecipeList from "./RecipeList";

function App() {
  return <RecipeList recipes={SampleRecipes} />;
}

const SampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions: "1. Put salt on chicken\n2. Put chicken in oven"
  },
  {
    id: 2,
    name: "Plain moo",
    servings: 5,
    cookTime: "6:45",
    instructions: "1. Put salt on moo\n2. Put moo in oven"
  }
];
export default App;
