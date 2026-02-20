import { recipecontext } from "../context/RecipeContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useState } from "react";
const SingleRecipe = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);
  const recipe = data.find((recipe) => params.id == recipe.id);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: recipe?.title,
      chef: recipe?.chef,
      image: recipe?.image,
      inst: recipe?.inst,
      desc: recipe?.desc,
      ingr: recipe?.ingr,
    },
  });
  const UpdateHandler = (recipe) => {
    const recipeindex = data.findIndex((recipe) => params.id == recipe.id);
    const copydata = [...data];
    copydata[recipeindex] = { ...copydata[recipeindex], ...recipe };
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("Recipe Updated Successfully!");
  };
  // const { data } = useContext(recipecontext);

  //const recipe = data.find((recipe) => params.id == recipe.id);
  console.log(recipe);
  const DeleteHandler = () => {
    const filterdata = data.filter((r) => r.id != params.id);
    setdata(filterdata);
    localStorage.setItem("recipes", JSON.stringify(filterdata));
    toast.success("Recipe Deleted Successfully!");
    navigate("/recipies");
  };

  const [favorite, setfavorite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );
  const FavHandler = () => {
    let copyfav = [...favorite];
    copyfav.push(recipe);
    setfavorite(copyfav);
    localStorage.setItem("fav", JSON.stringify(copyfav));
  };
  const UnFavHandler = () => {
    const updatedFav = favorite.filter((f) => f.id != recipe.id);
    setfavorite(updatedFav);
    localStorage.setItem("fav", JSON.stringify(updatedFav));
  };
  useEffect(() => {
    console.log("SingleRecipe.jsx Mounted");

    return () => {
      console.log("SingleRecipe.jsx unmounted");
    };
  }, [favorite]);
  return recipe ? (
    <div className="w-full flex flex-col lg:flex-row gap-12 p-5 lg:p-12 items-start justify-center">
      <div className="relative left w-1/2 p-10">
        {favorite.find((f) => f.id == recipe?.id) ? (
          <i
            onClick={UnFavHandler}
            className="right-[5%] absolute text-3xl text-red-400 ri-heart-line"
          ></i>
        ) : (
          <i
            onClick={FavHandler}
            className="right-[5%] absolute text-3xl text-red-400 ri-heart-fill"
          ></i>
        )}

        <h1 className="text-5xl font-black">{recipe.title}</h1>
        <img
          className="w-full max-h-[60vh] object-cover rounded-[3rem] shadow-2xl border-8 border-white/5 ring-1 ring-white/10"
          src={recipe.image}
          alt=""
        />
        <h1 className="text-white">{recipe.chef}</h1>
        <h1 className="text-white">{recipe.desc}</h1>
      </div>

      <form className="w-1/2 p-2" onSubmit={handleSubmit(UpdateHandler)}>
        <input
          className="block border-b outline-0 p-2"
          {...register("image")}
          type="url"
          placeholder="Enter image Url"
        />
        <small className="text-red-400">This is how the error is shown</small>
        <input
          className="block border-b outline-0 p-2"
          {...register("title")}
          type="text"
          placeholder="recipe Title"
        />
        <input
          className="block border-b outline-0 p-2"
          {...register("chef")}
          type="text"
          placeholder="chef name"
        />

        <textarea
          className="block border-b outline-0 p-2"
          {...register("desc")}
          placeholder="//start from here"
        ></textarea>

        <textarea
          className="block border-b outline-0 p-2"
          {...register("ingr")}
          placeholder="//write ingredients separated by comma"
        ></textarea>

        <textarea
          className="block border-b outline-0 p-2"
          {...register("inst")}
          placeholder="//write instructions separated by comma"
        ></textarea>
        <select
          className="block border-b outline-0 p-2"
          {...register("category")}
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
        </select>
        <button className="w-full py-4 mt-6 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-bold rounded-2xl shadow-lg shadow-red-900/20 active:scale-95 transition-all duration-300 uppercase tracking-widest text-xs">
          Update recipe
        </button>
        <button
          onClick={DeleteHandler}
          className="w-full py-4 mt-6 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-bold rounded-2xl shadow-lg shadow-red-900/20 active:scale-95 transition-all duration-300 uppercase tracking-widest text-xs"
        >
          Delete recipe
        </button>
      </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;
