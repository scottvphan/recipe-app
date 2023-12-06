import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import RecipeIngredientsComponent from "../components/RecipeIngredientsComponent";
import { useOutletContext, useParams, useNavigate } from "react-router-dom";

export default function RecipePage() {
  const { data } = useOutletContext();
  const [ingredientCards, setIngredientCards] = useState<any>();
  const [instructionCards, setInstructionCards] = useState<any>();
  const [recipe, setRecipe] = useState<any>("");
  // const recipe = data[0]
  const { id } = useParams();
  const recipeId = Number(id);
  const nav = useNavigate();

  useEffect(() => {
    const filteredRecipe = data.filter((recipes: any) => {
      if (recipes.id === recipeId) {
        return recipes;
      }
    });
    setRecipe(filteredRecipe[0]);
  }, []);

  useEffect(() => {
    if (recipe) {
      const mappedIngredients = recipe.ingredients.map((ingredients: any) => {
        return <li key={uuidv4()}>{ingredients}</li>;
      });
      setIngredientCards(mappedIngredients);
      const mappedInstructions = recipe.instructions.map(
        (instructions: any) => {
          return <li key={uuidv4()}>{instructions}</li>;
        }
      );
      setInstructionCards(mappedInstructions);
    }
  }, [recipe]);

  return (
    <div className="max-w-2xl mx-auto my-2 h-5/6 p-8 grid gap-4 ">
      <h1 className="text-3xl font-bold mb-2 ">{recipe.title}</h1>
      <div>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-auto mb-4"
        />
      </div>
      <h1 className="text-3xl font-bold border-blue-400 border-b-2 m-0 p-0">
        Ingredients
      </h1>
      <div>
        {ingredientCards && (
          <ul className="list-disc pl-6 text-blue-500 grid gap-1">
            {ingredientCards}
          </ul>
        )}
      </div>
      <div>
        <h1
          typeof="A"
          className="text-3xl font-bold border-blue-400 border-b-2 m-0 p-0"
        >
          Instructions
        </h1>
        <div>
          {instructionCards && (
            <ol className="list-decimal pl-6 text-blue-500 grid gap-1">
              {instructionCards}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
}
