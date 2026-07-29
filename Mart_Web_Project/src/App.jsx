import React from "react";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import ProductCards from "./components/ProductCards";
import CardScreen from "./pages/CardScreen";
import { MyStore } from "./context/MyContext";
import { Routes, Route } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";


const App = () => {
 
 

  return (
    <div className="h-screen p-2 flex flex-col gap-3">
      <Navbar />

      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/cart" element={ <CardScreen/> } />
        <Route path="/shop" element={ <Shop/>} />
        <Route path="/login" element={ <Login/>} />
        <Route path="/register" element={<Register/>} />
      
      </Routes>

      
    </div>
  );
};

export default App;
