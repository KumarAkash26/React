import React from "react";
/* import { useContext } from "react"; */
import { MyStore } from "../context/MyContext";
import { NavLink } from "react-router";

const Navbar = () => {
  /* let { setIsCardOpen } = useContext(MyStore); */

  return (
    <div className= "rounded p-5 items-center justify-between font-semibold text-black uppercase flex">
      <div>Logo</div>
      <div className="flex gap-10 text-sm">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/shop"}>Shop</NavLink>
        <NavLink to={"/cart"}>Cart</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </div>
      <button>Login</button>
    </div>
  );
};

export default Navbar;
