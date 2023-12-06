import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import RecipeIngredientsComponent from "../components/RecipeIngredientsComponent";
import { useOutletContext } from "react-router-dom";

export default function RecipePage() {
  const { data } = useOutletContext();
  const [ingredientCards, setIngredientCards] = useState<any>();
  const recipe = data[0];

  useEffect(() => {
    console.log(recipe)
    if (recipe) {
      const mappedIngredients = recipe.ingredients.map((ingredients: any) => {
        return <li>{ingredients}</li>;
      });
      setIngredientCards(mappedIngredients)
    }

  }, []);
  return (
    <div>
      <h1>{recipe.title}</h1>
      {ingredientCards && <ul>{ingredientCards}</ul>}
    </div>
  );
}
