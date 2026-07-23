import React from "react";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import ProductCards from "./components/ProductCards";
import CardScreen from "./pages/CardScreen";
import { MyStore } from "./context/MyContext";
import { Routes, Route } from "react-router";

const App = () => {
 
 

  return (
    <div className="h-screen p-2 flex flex-col gap-3">
      <Navbar />

      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/shop" element={ <Shop/>} />
      </Routes>

      
    </div>
  );
};

export default App;
