import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import "../css/app.css";
import uuid from "uuid";

export const RecipeContext = React.createContext();

const LOCAL_STORAGE_KEY = "cookingWithReac.recipe";

function App() {
  const [recipes, setRecipes] = useState(SampleRecipes);

  useEffect(() => {
    const recipeJson = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJson !== null) setRecipes(JSON.parse(recipeJson));
  }, []);
  useEffect(() => {
    console.log("recipes changed");
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const handleRecipeAdd = recipe => {
    const newRecipe = {
      id: uuid(),
      name: "new",
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
    };
    setRecipes([...recipes, newRecipe]);
  };

  const handleRecipeDelete = id => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete
  };
  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
    </RecipeContext.Provider>
  );
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
