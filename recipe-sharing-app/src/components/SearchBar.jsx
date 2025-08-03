import React from 'react';
import { useRecipeStore } from '../recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes by title..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: '8px',
        marginBottom: '16px',
        width: '100%',
        maxWidth: '400px',
      }}
    />
  );
};

export default SearchBar;