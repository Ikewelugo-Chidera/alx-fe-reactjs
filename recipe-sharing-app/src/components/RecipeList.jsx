import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (!recipes || recipes.length === 0) {
    return <p>No recipes available.</p>;
  }

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: '1px solid #ccc',
            padding: '1rem',
            marginBottom: '1rem',
            borderRadius: '8px',
          }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>

          {/* Ensure recipe.id is valid */}
          {recipe.id && (
            <Link to={`/recipe/${recipe.id}`}>
              <button>View Details</button>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;