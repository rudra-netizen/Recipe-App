import { useContext } from "react";

import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";
const Recipies = () => {
  const { data } = useContext(recipecontext);
  const renderrecipies = data.map((recipe) => {
    return <RecipeCard key={recipe.id} recipe={recipe} />;
  });
  return <div>{renderrecipies}</div>;
};

export default Recipies;
