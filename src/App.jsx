import React from "react";
import Mainroutes from "./routes/Mainroutes";
import Navbar from "./components/Navbar";
import Create from "./pages/Create";
const App = () => {
  return (
    <div className="text-white py-10 px-[10%] w-screen h-screen font-thin bg-gray-800">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
