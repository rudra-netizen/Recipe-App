import RecipeCard from "../components/RecipeCard";

const Fav = () => {
  const favorite = JSON.parse(localStorage.getItem("fav")) || [];
  const renderrecipies = favorite.map((recipe) => {
    return <RecipeCard key={recipe.id} recipe={recipe} />;
  });
  return (
    <div className="flex flex-wrap">
      {favorite.length > 0 ? renderrecipies : "No Favorite found!"}
    </div>
  );
};

export default Fav;
