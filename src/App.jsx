import React from "react";
import Mainroutes from "./routes/Mainroutes";
import Navbar from "./components/Navbar";
import Create from "./pages/Create";
const App = () => {
  return (
    <div className="bg-gradient-to-br from-zinc-900 via-gray-900 to-black text-white min-h-screen w-full px-6 md:px-[10%] py-10 font-[system-ui] selection:bg-red-400 selection:text-white overflow-x-hidden">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
