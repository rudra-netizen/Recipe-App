import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-x-10 text-sm mb-10">
      <NavLink className={(e) => (e.isActive ? "text-red-300" : "")} to="/">
        Home
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-red-300" : "")}
        to="/recipies"
      >
        Recipies
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-red-300" : "")}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={`px-4 py-2 bg-gray-900 rounded ${(e) =>
          e.isActive ? "text-red-300" : ""}`}
        to="/create-recipe"
      >
        Create Recipe
      </NavLink>
    </div>
  );
};

export default Navbar;
