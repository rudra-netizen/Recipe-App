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
        <button className="w-full py-4 mt-6 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white font-bold rounded-2xl shadow-lg shadow-red-900/20 active:scale-95 transition-all duration-300 uppercase tracking-widest text-xs">
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

/*
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
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-6 lg:px-16 py-10 flex flex-col lg:flex-row gap-12">
      
      <div className="lg:w-1/2 relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10">
       
        {favorite.find((f) => f.id === recipe.id) ? (
          <i
            onClick={UnFavHandler}
            className="ri-heart-fill absolute top-6 right-6 text-3xl text-red-500 hover:scale-110 transition cursor-pointer"
          ></i>
        ) : (
          <i
            onClick={FavHandler}
            className="ri-heart-line absolute top-6 right-6 text-3xl text-red-500 hover:scale-110 transition cursor-pointer"
          ></i>
        )}

        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
          {recipe.title}
        </h1>

        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-[350px] object-cover rounded-2xl mb-6 shadow-xl hover:scale-105 transition duration-500"
        />

        <p className="text-gray-300 mb-2">
          👨‍🍳 <span className="font-semibold text-white">{recipe.chef}</span>
        </p>

        <p className="text-gray-400 mb-6 leading-relaxed">{recipe.desc}</p>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-3 border-b border-white/10 pb-2">
            Ingredients
          </h3>
          <ul className="space-y-2 text-gray-300">
            {recipe.ingr.split(",").map((item, i) => (
              <li
                key={i}
                className="bg-white/5 px-4 py-2 rounded-lg hover:bg-white/10 transition"
              >
                {item.trim()}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3 border-b border-white/10 pb-2">
            Instructions
          </h3>
          <ol className="space-y-2 text-gray-300">
            {recipe.inst.split(",").map((step, i) => (
              <li
                key={i}
                className="bg-white/5 px-4 py-2 rounded-lg hover:bg-white/10 transition"
              >
                {step.trim()}
              </li>
            ))}
          </ol>
        </div>
      </div>

     
      <form
        onSubmit={handleSubmit(UpdateHandler)}
        className="lg:w-1/2 bg-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/10 space-y-5"
      >
        <h2 className="text-2xl font-bold mb-4">Edit Recipe</h2>

        <input
          {...register("image")}
          type="url"
          placeholder="Image URL"
          className="w-full p-3 rounded-xl bg-gray-800 border border-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition"
        />

        <input
          {...register("title")}
          type="text"
          placeholder="Recipe Title"
          className="w-full p-3 rounded-xl bg-gray-800 border border-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition"
        />

        <input
          {...register("chef")}
          type="text"
          placeholder="Chef Name"
          className="w-full p-3 rounded-xl bg-gray-800 border border-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition"
        />

        <textarea
          {...register("desc")}
          placeholder="Description"
          rows="3"
          className="w-full p-3 rounded-xl bg-gray-800 border border-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition"
        ></textarea>

        <textarea
          {...register("ingr")}
          placeholder="Ingredients (comma separated)"
          rows="3"
          className="w-full p-3 rounded-xl bg-gray-800 border border-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition"
        ></textarea>

        <textarea
          {...register("inst")}
          placeholder="Instructions (comma separated)"
          rows="3"
          className="w-full p-3 rounded-xl bg-gray-800 border border-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition"
        ></textarea>

        <select
          {...register("category")}
          className="w-full p-3 rounded-xl bg-gray-800 border border-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition"
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
        </select>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 font-semibold uppercase tracking-wide hover:scale-105 transition"
          >
            Update
          </button>

          <button
            type="button"
            onClick={DeleteHandler}
            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 font-semibold uppercase tracking-wide hover:scale-105 transition"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default SingleRecipe;
*/
