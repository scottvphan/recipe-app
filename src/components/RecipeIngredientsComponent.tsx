import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function RecipeIngredientsComponent({ data }: any) {
  const [ingredientCards, setIngredientCards] = useState<any>();

  useEffect(() => {
    if (data) {
      const mappedIngredients = data.map((ingredient: string) => (
        <li key={uuidv4()}>{ingredient}</li>
      ));

      setIngredientCards(mappedIngredients);
    }
  }, [data]);

  return (
    <>
      {ingredientCards && ingredientCards}
    </>
  )
}
