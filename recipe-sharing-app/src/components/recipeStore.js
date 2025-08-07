import { create } from "zustand";

const useRecipeStore = create((set,get) => ({
  recipes: [],
  searchTerm: '',
  selectedIngredients: [],
  maxCookingTime: null,
  filteredRecipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
  setRecipes: (recipes) => {
    set({ recipes });
    // initialize filtered list with all recipes
    set({ filteredRecipes: recipes });
  },

  setSearchTerm: (term) => {
    set({ searchTerm: term });

    const { recipes } = get();
    const filtered = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(term.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },
  favorites: [],
  addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [],
  generateRecommendations: () => set(state => {
    // Mock implementation based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;
