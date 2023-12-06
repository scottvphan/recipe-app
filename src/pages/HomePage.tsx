import { useOutletContext } from "react-router-dom";
import RecipeCardComponent from "../components/RecipeCardComponent";
import {v4 as uuidv4} from 'uuid'
import { useState, useEffect } from 'react'

export default function HomePage() {
  const { data } = useOutletContext();
  const [mappedCards, setMappedCards] = useState<any>('')
  useEffect(() => {
    if(data) {
      const mappedRecipes = data.map((data:any) => {
        return (
          <RecipeCardComponent key={uuidv4()} data={data} />
        )
      })
      setMappedCards(mappedRecipes)
    }
  }, [])

  console.log(data);
  return (
    <div className="flex flex-col justify-between h-screen">
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl text-gray-800 font-bold mb-8">
            Featured Recipes
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mappedCards && mappedCards}
          </div>
        </div>
      </section>
    </div>
  );
}
