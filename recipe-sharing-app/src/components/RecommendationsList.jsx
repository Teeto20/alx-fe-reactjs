import useRecipeStore from "./recipeStore";

const RecommendationsList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);

  const recommendedRecipes = recipes.filter(
    (recipe) => !favorites.includes(recipe.id)
  );

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendedRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;