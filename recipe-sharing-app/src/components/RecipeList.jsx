import React from "react";
import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <Link to={`/recipes/${recipes.id}`} className="block hover:text-blue-500">
        <h2 className="text-lg font-bold mb-2">{recipes.name}</h2>
      </Link>
      {recipes.length === 0 ? (
        <p className="text-center col-span-full text-gray-600">
          No recipes match your filters.
        </p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} className="p-4 border rounded shadow bg-white">
            <h2 className="text-lg font-bold mb-2">{recipe.name}</h2>
            <p className="text-sm text-gray-700">{recipe.description}</p>
            <p className="text-sm text-gray-500 mt-2">
              Time: {recipe.cookingTime} min
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
