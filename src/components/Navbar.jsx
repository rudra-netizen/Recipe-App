const Navbar = () => {
  return (
    <div className="flex justify-center gap-x-10 text-sm">
      <NavLink className={(e) => e.isActive && "text-red-300"} to="/">
        Home
      </NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">Home</NavLink>
    </div>
  );
};

export default Navbar;
