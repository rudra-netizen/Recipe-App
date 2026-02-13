import { Route, Routes } from "react-router-dom";
import Recipies from "../Recipies";
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
