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
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center">
      {/* Main Heading */}
      <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-5 uppercase italic">
        Swaad<span className="text-red-500">Script.</span>
      </h1>

      <p className="text-zinc-400 text-lg md:text-2xl font-light max-w-2xl leading-relaxed mb-10">
        "The world's most intuitive digital cookbook. Seamlessly save, organize,
        and refine your recipes at any time
      </p>

      <div className="w-full max-w-4xl h-[40vh] overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/10 relative group">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
        <img
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop"
          alt="Kitchen"
        />
      </div>
    </div>
  );
};

export default Home;
