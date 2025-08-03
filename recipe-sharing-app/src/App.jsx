import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

function App() {
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  return (
    <Router>
      <div style={{ padding: "16px" }}>
        <h1>Recipe Sharing App</h1>

        <nav style={{ marginBottom: "16px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/favorites" style={{ marginRight: "10px" }}>My Favorites</Link>
          <Link to="/recommendations">Recommended</Link>
        </nav>

        <SearchBar />
        <AddRecipeForm />

        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;