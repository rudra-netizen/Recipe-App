import { useEffect } from "react";
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
