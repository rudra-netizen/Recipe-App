import { Route, Routes } from "react-router-dom";
import Recipies from "../pages/Recipies";
import Home from "../pages/Home";
import About from "../pages/About";
import Create from "../pages/Create";
const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipies" element={<Recipies />} />
      <Route path="/about" element={<About />} />
      <Route path="/create-recipe" element={<Create />} />
    </Routes>
  );
};

export default Mainroutes;
