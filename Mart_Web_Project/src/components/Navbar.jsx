import React, { useContext } from "react";
/* import { useContext } from "react"; */
import { MyStore } from "../context/MyContext";
import { NavLink, useNavigate } from "react-router";
import Login from "../pages/Login";
import { LogOut } from "lucide-react";

const Navbar = () => {

  /* let { setIsCardOpen } = useContext(MyStore); */
  const navigate = useNavigate();
  

  const { loggedUser, setloggedUser } = useContext(MyStore);

  const loginOut = () =>{
    localStorage.removeItem("loggedUser");
    setloggedUser(null);
    navigate("/");
  }

  return (
    <div className="rounded-xl border-b-2 border-gray-300 shadow-md p-5 items-center justify-between font-semibold text-black uppercase flex">
      <div>Logo</div>
      <div className="flex gap-10 text-sm">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={loggedUser ? "/shop" : "/login"}>Shop</NavLink>
        <NavLink to={loggedUser ? "/cart" : "/login"}>Cart</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </div>
      <div className="flex gap-3 items-center">
        <button
          className="cursor-pointer"
          onClick={() => navigate(loggedUser ? "/" : "/login")}
        >
          {loggedUser ? loggedUser.name : "Login"}
        </button>
        <LogOut
          className="cursor-pointer"
          onClick={ loginOut }
          size={20}
        />
      </div>
    </div>
  );
};

export default Navbar;
