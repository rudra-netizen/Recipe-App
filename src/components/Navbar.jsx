import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-x-6 md:gap-x-10 text-sm mb-16 sticky top-5 z-[100] backdrop-blur-xl bg-white/5 py-4 px-8 rounded-full border border-white/10 shadow-2xl mx-auto w-fit">
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
      <NavLink className={(e) => (e.isActive ? "text-red-300" : "")} to="/fav">
        Favorite
      </NavLink>
    </div>
  );
};

export default Navbar;
