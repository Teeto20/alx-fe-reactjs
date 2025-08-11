import { useState, useEffect } from "react";
import data from "../data.json";
import { Link } from "react-router-dom";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 ">Recipe Lists</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
            <div
              className="bg-white rounded-xl shadow-md
              overflow-hidden hover:shadow-lg transition-shadow duration-300 p-6"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{recipe.title}</h2>
                <p className="text-gray-600 mt-2">{recipe.summary}</p>
              </div>
            </div>
          </Link>
        ))}
        <Link to="/add-recipe">
          <button className="mx-auto inline-flex items-center
          justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium
          text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Add Recipe
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
