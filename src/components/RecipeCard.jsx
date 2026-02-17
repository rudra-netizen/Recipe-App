const RecipeCard = (props) => {
  const { img, image, title, desc, chef } = props.recipe;
  return (
    <Link>
      <img src={image} alt="" />
      <h1>{title}</h1>
      <small>{chef}</small>
      <p>
        {desc.slice(0, 100)}...<small className="text-blue-400">more</small>
      </p>
    </Link>
  );
};

export default RecipeCard;
