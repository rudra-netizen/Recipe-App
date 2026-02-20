/*import { useEffect } from "react";
import axios from "../utils/axios";

const Home = () => {
  const getproduct = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);
      //const strdata = await fetch("https://fakestoreapi.com/products");
      //const jsondata = await strdata.json();
      //console.log(jsondata);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log("Home.jsx Mounted");
    getproduct();
    return () => {
      console.log("Home.jsx unmounted");
    };
  });
  return (
    <div>
      <h1>Home</h1>
      <button onClick={getproduct}>Get Products</button>
    </div>
  );
};

export default Home;
*/
const Home = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-950 text-white flex items-center px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            <span className="text-red-500">SwaadScript</span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Discover. Cook. Preserve Flavors.
          </h2>

          <p className="text-zinc-400 text-lg md:text-xl max-w-xl mx-auto md:mx-0">
            Your personal digital cookbook to store, organize, and revisit your
            favorite recipes anytime. Simple, clean, and beautifully crafted.
          </p>
        </div>

        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="Delicious Food"
            className="rounded-3xl object-cover w-full h-[450px] shadow-2xl"
          />
          <div className="absolute inset-0 bg-black/30 rounded-3xl group-hover:bg-black/10 transition duration-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
