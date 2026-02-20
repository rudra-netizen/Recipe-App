import { Link } from "react-router-dom";
const RecipeCard = (props) => {
  const { id, image, title, desc, chef } = props.recipe;
  return (
    <Link
      to={`/recipies/details/${id}`}
      className="group relative duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(239,68,68,0.15)] mb-8 block w-full sm:w-[30vw] lg:w-[22vw] rounded-3xl overflow-hidden bg-zinc-800/40 border border-white/5 backdrop-blur-sm gap-x-6"
    >
      <img className="object-cover w-full  h-[20vh]" src={image} alt="" />
      <h1 className="px-2 mt-2 font-black">{title}</h1>
      <small className="px-2 text-red-400">{chef}</small>
      <p className="px-2 pb-3">
        {desc.slice(0, 100)}...<small className="text-blue-400">more</small>
      </p>
    </Link>
  );
};

export default RecipeCard;
