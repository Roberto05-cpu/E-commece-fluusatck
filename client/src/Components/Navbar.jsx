import React, { useState } from "react";
import { FaSearch, FaUser, FaBars } from "react-icons/fa";
import { BiHeart } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    navigate("/signup");
    window.location.reload(); // recharge la navbar
  };

  const [filter, setFilter] = useState("")

  return (
    <div className="md:h-[100px] w-full border-b border-b-gray-400 flex items-center justify-between p-1">
      <div className="md:ml-[100px]">
        <h1 className="text-2xl font-bold">Exclusive</h1>
      </div>
      <ul className="flex flex-col md:flex-row items-center md:gap-7">
        <li className={`${filter === "Home" ? "font-bold" : ""}`} onClick={() => setFilter("Home")}>
          <Link to="/">Home</Link>
        </li>
        <li className={`${filter === "Contact" ? "font-bold" : ""}`} onClick={() => setFilter("Contact")}>
          <Link to="/contact">Contact</Link>
        </li>
        <li className={`${filter === "About" ? "font-bold" : ""}`} onClick={() => setFilter("About")}>
          <Link to="/about">About</Link>
        </li>
        <li className={`${filter === "Sign Up" ? "font-bold" : ""}`} onClick={() => setFilter("Sign Up")}>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
      <div className="md:mr-[100px] flex items-center gap-5">
        <div className="hidden md:flex items-center">
          <input
            type="text"
            className="h-10 w-[250px] bg-gray-200 pl-4 text-[15px]"
            placeholder="What are you looking for?"
          />
          <FaSearch className="relative left-[-35px]" />
        </div>
        <BiHeart className="text-[20px]" />
        <Link to="/cart">
          <FaShoppingCart className="text-[20px]" />
        </Link>
        {user ? (
          <>
            <li className="flex flex-col justify-center items-center gap-2">
              <FaUser />
              <span>{user.name}</span>
            </li>
            <li
              className="flex items-center gap-1 cursor-pointer"
              onClick={handleLogout}
            >
              <FiLogOut size={20} />
              <span className="text-[13px]">Logout</span>
            </li>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
