import React from 'react';
import useRecipeStore from './recipeStore';

const allIngredients = ['pasta', 'chicken', 'tomato', 'cheese'];

const Filters = () => {
  const setSelectedIngredients = useRecipeStore(state => state.setSelectedIngredients);
  const setMaxCookingTime = useRecipeStore(state => state.setMaxCookingTime);

  const handleIngredientChange = (e) => {
    const selected = Array.from(e.target.selectedOptions).map(o => o.value);
    setSelectedIngredients(selected);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-4">
      <div>
        <label className="block font-semibold mb-1">Ingredients</label>
        <select multiple onChange={handleIngredientChange} className="p-2 border rounded w-full md:w-60">
          {allIngredients.map((ingredient) => (
            <option key={ingredient} value={ingredient}>{ingredient}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-semibold mb-1">Max Cooking Time (minutes)</label>
        <input
          type="number"
          min="0"
          className="p-2 border rounded"
          onChange={(e) => setMaxCookingTime(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default Filters;
