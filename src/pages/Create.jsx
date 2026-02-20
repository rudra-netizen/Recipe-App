import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();
  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    console.log(recipe);
    const copydata = [...data];
    copydata.push(recipe);
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("New Recipe Created!");
    navigate("/recipies");
    reset();
  };
  return (
    <form
      className="w-full max-w-3xl mx-auto space-y-6 p-10 bg-zinc-900/80 rounded-[2.5rem] border border-white/10 shadow-2xl backdrop-blur-lg"
      onSubmit={handleSubmit(SubmitHandler)}
    >
      <input
        className="w-full bg-zinc-800/50 border border-zinc-700 focus:border-red-500/50 focus:ring-4 focus:ring-red-500/10 outline-none p-4 rounded-2xl text-white placeholder:text-zinc-500 transition-all duration-300"
        {...register("image")}
        type="url"
        placeholder="Enter image Url"
      />
      <small className="text-red-400">This is how the error is shown</small>
      <input
        className="w-full bg-zinc-800/50 border border-zinc-700 focus:border-red-500/50 focus:ring-4 focus:ring-red-500/10 outline-none p-4 rounded-2xl text-white placeholder:text-zinc-500 transition-all duration-300"
        {...register("title")}
        type="text"
        placeholder="recipe Title"
      />
      <input
        className="w-full bg-zinc-800/50 border border-zinc-700 focus:border-red-500/50 focus:ring-4 focus:ring-red-500/10 outline-none p-4 rounded-2xl text-white placeholder:text-zinc-500 transition-all duration-300"
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
      <button className="mt-5 block bg-gray-900 px-4 py-2 rounded">
        Save recipe
      </button>
    </form>
  );
};

export default Create;
