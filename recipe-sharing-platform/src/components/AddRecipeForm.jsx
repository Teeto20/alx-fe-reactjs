import { useState } from "react";

function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: fields not empty and at least 2 ingredients
    if (!title.trim() || !ingredients.trim() || !steps.trim()) {
      setError("All fields are required.");
      return;
    }
    const ingredientList = ingredients.split(",").map((i) => i.trim()).filter(Boolean);
    if (ingredientList.length < 2) {
      setError("Please enter at least two ingredients, separated by commas.");
      return;
    }
    const stepsList = steps.split("\n").map((s) => s.trim()).filter(Boolean);
    if (stepsList.length < 1) {
      setError("Please enter at least one step.");
      return;
    }

    setError("");
    if (onAddRecipe) {
      onAddRecipe({ title, ingredients: ingredientList, instructions: stepsList });
    }
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="text-red-600 text-sm font-medium">{error}</div>
      )}
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">
          Ingredients <span className="text-xs text-gray-500">(comma separated)</span>
        </label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">
          Steps <span className="text-xs text-gray-500">(one per line)</span>
        </label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium
        text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
}

export default AddRecipeForm;