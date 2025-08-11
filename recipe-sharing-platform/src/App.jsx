import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';
import data from './data.json';

function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage  />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/add-recipe" element={<AddRecipeForm  />} />
      </Routes>
    </Router>
  );
}
export default App;