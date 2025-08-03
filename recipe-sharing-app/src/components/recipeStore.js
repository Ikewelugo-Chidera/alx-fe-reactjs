import { create } from 'zustand';

export const useRecipeStore = create(set => ({
  recipes: [
    {
      id: 1,
      title: "Spaghetti Bolognese",
      description: "A rich tomato and beef sauce served over spaghetti pasta.",
      ingredients: ["spaghetti", "minced beef", "tomato sauce", "onion", "garlic"],
      preparationTime: "30 minutes",
    },
    {
      id: 2,
      title: "Chicken Fried Rice",
      description: "Delicious stir-fried rice with eggs, vegetables, and chicken.",
      ingredients: ["rice", "chicken", "egg", "carrots", "peas", "soy sauce"],
      preparationTime: "25 minutes",
    },
    {
      id: 3,
      title: "Avocado Toast",
      description: "A simple and healthy breakfast of mashed avocado on toast.",
      ingredients: ["bread", "avocado", "lemon juice", "chili flakes"],
      preparationTime: "10 minutes",
    },
    {
      id: 4,
      title: "Creamy Chicken Alfredo",
      description: "Pasta tossed in a creamy white sauce with grilled chicken.",
      ingredients: ["pasta", "chicken", "cream", "garlic", "parmesan"],
      preparationTime: "35 minutes",
    },
    {
      id: 5,
      title: "Chocolate Chip Pancakes",
      description: "Fluffy pancakes loaded with chocolate chips and syrup.",
      ingredients: ["flour", "milk", "egg", "chocolate chips", "baking powder"],
      preparationTime: "20 minutes",
    }
  ],
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe]
  })),
  setRecipes: (newRecipes) => set(() => ({
    recipes: newRecipes
  })),
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),

  deleteRecipe: (idToDelete) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== idToDelete)
  })),
  
  favorites: [],
  addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [],
  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
}));