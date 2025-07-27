// src/components/RecipeList.jsx
import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const { recipes, setRecipes, addFavorite, favorites } = useRecipeStore();

  useEffect(() => {
    setRecipes([
      {
        id: 1,
        title: "Jollof Rice",
        description: "A West African staple made with long-grain parboiled rice, tomato stew, onions, and spices. Best served with fried plantains or grilled chicken.",
      },
      {
        id: 2,
        title: "Indomie Noodles Deluxe",
        description: "Instant noodles elevated with sautéed onions, fresh pepper, fried eggs, and mixed veggies. A favorite among Nigerian students.",
      },
      {
        id: 3,
        title: "Egusi Soup",
        description: "Thick and hearty soup made with melon seeds, assorted meat, stockfish, and leafy vegetables. Traditionally enjoyed with pounded yam or fufu.",
      },
      {
        id: 4,
        title: "Moi Moi",
        description: "Steamed bean pudding blended with peppers, onions, oil, and proteins like boiled egg or sardines. Perfect side for rice or custard.",
      },
      {
        id: 5,
        title: "Fried Rice",
        description: "Colorful rice stir-fried with diced liver, vegetables, and a hint of curry. A must-have at Nigerian parties.",
      },
      {
        id: 6,
        title: "Ofada Sauce (Ayamase)",
        description: "Spicy green pepper sauce made with bleached palm oil, assorted meats, and locust beans. Served with native Ofada rice.",
      },
      {
        id: 7,
        title: "Suya",
        description: "Thinly sliced beef skewers marinated in yaji (spice mix) and grilled over open flame. A street food favorite served with onions and tomatoes.",
      },
      {
        id: 8,
        title: "Akara (Bean Cakes)",
        description: "Deep-fried bean fritters made from blended peeled beans and spices. Crispy outside, soft inside — ideal for breakfast with pap.",
      },
    ]);
  }, [setRecipes]);

  return (
    <div>
      <h2>📜 All Recipes</h2>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => addFavorite(recipe.id)}>
            {favorites.includes(recipe.id) ? "💖 Favorited" : "🤍 Add to Favorites"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;