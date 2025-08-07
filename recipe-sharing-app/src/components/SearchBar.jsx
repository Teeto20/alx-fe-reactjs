import React from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  return (
    <div className="flex items-center gap-2 p-4 bg-white rounded shadow mb-4 sticky top-0 z-10">
      
      <input
        type="text"
        className="flex-grow p-2 border border-gray-300 rounded"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
