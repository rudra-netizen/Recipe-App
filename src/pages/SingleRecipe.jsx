import { recipecontext } from "../context/RecipeContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { nanoid } from "nanoid";
const SingleRecipe = () => {
  const navigate = useNavigate();
  // const { data, setdata } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();
  const SubmitHandler = (recipe) => {};
  const { data } = useContext(recipecontext);
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);
  console.log(recipe);
  return recipe ? (
    <div className="w-full flex">
      <div className="left w-1/2 p-2">
        <h1 className="text-5xl font-black">{recipe.title}</h1>
        <img className="h-[20vh]" src={recipe.image} alt="" />
      </div>

      <form className="w-1/2 p-2" onSubmit={handleSubmit(SubmitHandler)}>
        <input
          className="block border-b outline-0 p-2"
          {...register("image")}
          type="url"
          value={recipe.image}
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
        <button className="mt-5 block bg-gray-900 px-4 py-2 rounded">
          Save recipe
        </button>
      </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;
