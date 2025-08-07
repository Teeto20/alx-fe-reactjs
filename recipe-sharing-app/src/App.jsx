import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import useRecipeStore from "./components/recipeStore";
import { useEffect } from "react";
import RecommendationsList from "./components/RecommendationsList";
import FavoritesList from "./components/FavoritesList";
function App() {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  useEffect(() => {
    // Example fetch or static list
    setRecipes([
      {
        id: 1,
        name: "Spaghetti",
        description: "With tomato",
        ingredients: ["pasta", "tomato"],
        cookingTime: 30,
      },
      {
        id: 2,
        name: "Grilled Chicken",
        description: "With herbs",
        ingredients: ["chicken"],
        cookingTime: 25,
      },
    ]);
  }, []);
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1>Recipe Sharing App</h1>
      {/* Top UI Filters */}
      <SearchBar />
      <Filters />
      <AddRecipeForm />
      {/* Main Search Results */}
      <RecipeList />
      <Routes>
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
      {/* User-focused sections */}
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
}

export default App;
