import { recipecontext } from "../context/RecipeContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { useEffect } from "react";
const SingleRecipe = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);
  const recipe = data.find((recipe) => params.id == recipe.id);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: recipe.title,
      chef: recipe.chef,
      image: recipe.image,
      inst: recipe.inst,
      desc: recipe.desc,
      ingr: recipe.ingr,
    },
  });
  const SubmitHandler = (recipe) => {
    const recipeindex = data.findIndex((recipe) => params.id == recipe.id);
    const copydata = [...data];
    copydata[recipeindex] = { ...copydata[recipeindex], ...recipe };
    setdata(copydata);
    toast.success("Recipe Updated Successfully!");
  };
  // const { data } = useContext(recipecontext);

  //const recipe = data.find((recipe) => params.id == recipe.id);
  console.log(recipe);
  const DeleteHandler = () => {
    const filterdata = data.filter((r) => r.id != params.id);
    setdata(filterdata);
    toast.success("Recipe Deleted Successfully!");
    navigate("/recipies");
  };
  useEffect(() => {
    console.log("SingleRecipe.jsx Mounted");

    return () => {
      console.log("SingleRecipe.jsx unmounted");
    };
  }, []);
  return recipe ? (
    <div className="w-full flex">
      <div className="left w-1/2 p-2">
        <h1 className="text-5xl font-black">{recipe.title}</h1>
        <img className="h-[20vh]" src={recipe.image} alt="" />
        <h1 className="text-white">{recipe.chef}</h1>
        <h1 className="text-white">{recipe.desc}</h1>
      </div>

      <form className="w-1/2 p-2" onSubmit={handleSubmit(SubmitHandler)}>
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
        <button className="mt-5 block bg-blue-900 px-4 py-2 rounded">
          Update recipe
        </button>
        <button
          onClick={DeleteHandler}
          className="mt-5 block bg-red-900 px-4 py-2 rounded"
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
