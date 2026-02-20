import { useContext } from "react";

import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";
const Recipies = () => {
  const { data } = useContext(recipecontext);
  const renderrecipies = data.map((recipe) => {
    return <RecipeCard key={recipe.id} recipe={recipe} />;
  });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center px-4">
      {data.length > 0 ? renderrecipies : "No recipes found!"}
    </div>
  );
};

export default Recipies;
