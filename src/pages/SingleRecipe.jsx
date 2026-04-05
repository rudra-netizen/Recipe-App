/*import { recipecontext } from "../context/RecipeContext";
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

*/
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

  if (!recipe)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white font-bold">
        Recipe not found.
      </div>
    );

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 px-4 sm:px-10 lg:px-24 py-12 selection:bg-cyan-500/30">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-8 bg-slate-800/40 backdrop-blur-xl p-6 sm:p-12 rounded-[2.5rem] border border-slate-700/50 shadow-2xl">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-900">
              {favorite.find((f) => f.id === recipe.id) ? (
                <button
                  onClick={UnFavHandler}
                  className="absolute top-6 right-6 z-20 bg-slate-900/80 backdrop-blur-md p-3.5 rounded-2xl shadow-xl hover:scale-110 active:scale-90 transition-all border border-red-500/50"
                >
                  <i className="ri-heart-fill text-2xl text-red-500"></i>
                </button>
              ) : (
                <button
                  onClick={FavHandler}
                  className="absolute top-6 right-6 z-20 bg-slate-900/80 backdrop-blur-md p-3.5 rounded-2xl shadow-xl hover:scale-110 active:scale-90 transition-all border border-slate-700"
                >
                  <i className="ri-heart-line text-2xl text-slate-400"></i>
                </button>
              )}
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-[400px] sm:h-[550px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-7xl font-black bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent tracking-tight">
              {recipe.title}
            </h1>
            <div className="flex items-center gap-4 text-cyan-400 font-medium tracking-widest text-xs uppercase">
              <span className="px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10">
                Chef {recipe.chef}
              </span>
              <span className="h-px w-12 bg-slate-700"></span>
              <span className="text-slate-500 italic lowercase">
                {recipe.category} special
              </span>
            </div>
          </div>

          <p className="text-slate-400 leading-relaxed text-xl font-light border-l-2 border-cyan-500/50 pl-6 italic">
            {recipe.desc}
          </p>

          <div className="grid sm:grid-cols-2 gap-8 pt-6">
            <div className="bg-slate-900/50 p-8 rounded-[2rem] border border-slate-700/30">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <i className="ri-restaurant-line"></i>
                </span>
                Ingredients
              </h3>
              <ul className="space-y-4">
                {recipe.ingr
                  .split(/,|\n/)
                  .filter((item) => item.trim() !== "")
                  .map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-300 text-sm group"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-500 group-hover:shadow-[0_0_8px_#22d3ee]"></span>
                      <span className="whitespace-pre-line leading-relaxed">
                        {item.trim()}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="p-4">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <i className="ri-list-check"></i>
                </span>
                Instructions
              </h3>
              <ol className="space-y-6">
                {recipe.inst
                  .split(/,|\n/)
                  .filter((step) => step.trim() !== "")
                  .map((step, i) => (
                    <li key={i} className="flex gap-4 group">
                      <span className="flex-none w-6 h-6 rounded-md bg-slate-800 border border-slate-700 text-[10px] flex items-center justify-center text-cyan-400 font-bold group-hover:border-cyan-500/50 transition-colors">
                        {i + 1}
                      </span>
                      <span className="text-slate-400 text-sm leading-relaxed whitespace-pre-line group-hover:text-slate-200">
                        {step.trim()}
                      </span>
                    </li>
                  ))}
              </ol>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <form
            onSubmit={handleSubmit(UpdateHandler)}
            className="sticky top-10 bg-gradient-to-b from-slate-800 to-slate-900 p-8 sm:p-10 rounded-[2.5rem] border border-slate-700 shadow-2xl space-y-6"
          >
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-white tracking-tight">
                Edit Recipe
              </h2>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-tighter underline decoration-cyan-500/50 underline-offset-4">
                Edit Recipe as per your choice
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {[
                { label: "Image URL", name: "image", icon: "ri-image-line" },
                { label: "Title", name: "title", icon: "ri-edit-box-line" },
                { label: "Chef", name: "chef", icon: "ri-user-heart-line" },
              ].map((field) => (
                <div key={field.name} className="relative group">
                  <i
                    className={`${field.icon} absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors`}
                  ></i>
                  <input
                    {...register(field.name)}
                    placeholder={field.label}
                    className="w-full bg-slate-950/50 border border-slate-700 rounded-2xl pl-12 pr-4 py-4 text-sm focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500/50 outline-none transition-all placeholder:text-slate-600"
                  />
                </div>
              ))}

              <select
                {...register("category")}
                className="w-full bg-slate-950/50 border border-slate-700 rounded-2xl px-4 py-4 text-sm focus:border-cyan-500/50 outline-none text-slate-400"
              >
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="supper">Supper</option>
                <option value="dinner">Dinner</option>
              </select>

              {["desc", "ingr", "inst"].map((area) => (
                <textarea
                  key={area}
                  {...register(area)}
                  placeholder={area.toUpperCase()}
                  rows="2"
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-2xl px-4 py-4 text-sm focus:border-cyan-500/50 outline-none transition-all placeholder:text-slate-600 resize-none"
                ></textarea>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-6">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white py-4 rounded-2xl font-bold text-sm shadow-[0_10px_20px_-10px_rgba(8,145,178,0.5)] active:scale-95 transition-all"
              >
                Update Recipe
              </button>

              <button
                type="button"
                onClick={DeleteHandler}
                className="w-full bg-red-500/10 hover:bg-red-500/20 text-red-400 py-3 rounded-2xl font-bold text-xs transition-all border border-red-500/20"
              >
                Delete Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
