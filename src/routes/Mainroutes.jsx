import { Route, Routes } from "react-router-dom";
import Recipies from "../pages/Recipies";
import Home from "../pages/Home";
import About from "../pages/About";
import Create from "../pages/Create";
import SingleRecipe from "../pages/SingleRecipe";
import PageNotFound from "../pages/PageNotFound";
import Fav from "../pages/Fav";
const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipies" element={<Recipies />} />
      <Route path="/recipies/details/:id" element={<SingleRecipe />} />
      <Route path="/create-recipe" element={<Create />} />
      <Route path="/about" element={<About />} />
      <Route path="/fav" element={<Fav />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Mainroutes;
