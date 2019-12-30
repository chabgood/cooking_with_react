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
    instructions: "1. Put salt on chicken\n2. Put chicken in oven",
    ingredients: [
      {
        id: 1,
        name: "chicken",
        amount: "1"
      },
      {
        id: 2,
        name: "salt",
        amount: "1 tbl"
      }
    ]
  },
  {
    id: 2,
    name: "Plain moo",
    servings: 5,
    cookTime: "6:45",
    instructions: "1. Put salt on moo\n2. Put moo in oven",
    ingredients: [
      {
        id: 1,
        name: "moo",
        amount: "1 tbl"
      },
      {
        id: 2,
        name: "new moo",
        amount: "1 spn"
      }
    ]
  }
];
export default App;
