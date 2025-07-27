// src/components/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  
  setRecipes: (recipes) => set({ recipes }),
  
  addFavorite: (recipeId) => set(state => ({
    favorites: [...new Set([...state.favorites, recipeId])]
  })),

  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) || Math.random() > 0.6
    );
    return { recommendations: recommended };
  }),
}));