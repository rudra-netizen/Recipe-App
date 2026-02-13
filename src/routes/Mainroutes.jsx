import { Route, Routes } from "react-router-dom";
import Recipies from "../pages/Recipies";
import Home from "../pages/Home";
import About from "../pages/About";
const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipies" element={<Recipies />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Mainroutes;
