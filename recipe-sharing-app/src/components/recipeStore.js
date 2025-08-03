import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',
  
  addRecipe: (newRecipe) =>
    set((state) => {
      const updated = [...state.recipes, newRecipe];
      return {
        recipes: updated,
        filteredRecipes: filter(updated, state.searchTerm)
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updated,
        filteredRecipes: filter(updated, state.searchTerm)
      };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      return {
        recipes: updated,
        filteredRecipes: filter(updated, state.searchTerm)
      };
    }),

  setRecipes: (recipes) =>
    set((state) => ({
      recipes,
      filteredRecipes: filter(recipes, state.searchTerm)
    })),

  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: filter(state.recipes, term),
    })),
}));

// Local helper function
function filter(recipes, term) {
  return recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(term.toLowerCase())
  );
}