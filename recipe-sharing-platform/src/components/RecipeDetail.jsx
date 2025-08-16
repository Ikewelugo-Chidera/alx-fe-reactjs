import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams(); // get recipe id from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((item) => item.id === parseInt(id));
        setRecipe(selected);
      })
      .catch((err) => console.error("Error loading recipe:", err));
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-500 mt-10">Loading recipe...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full rounded-2xl shadow-lg mb-6"
      />

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">
              {ingredient}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="text-gray-700">
              {step}
            </li>
          ))}
        </ol>
      </section>

      <div className="text-center">
        <Link
          to="/"
          className="inline-block bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default RecipeDetail;