import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const found = data.find((item) => item.id === Number(id));
    setRecipe(found);
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-gray-700">Recipe not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <h1 className="text-3xl font-bold text-green-700 mb-4">{recipe.title}</h1>
        <p className="text-gray-700 mb-6">{recipe.summary}</p>
        {recipe.ingredients && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-700">
              {recipe.ingredients.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>
          </div>
        )}
        {recipe.instructions && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Instructions</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              {recipe.instructions.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipeDetail;