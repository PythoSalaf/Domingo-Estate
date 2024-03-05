import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import { motion } from "framer-motion";
import { logo } from "../Assets";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full fixed flex items-center top-0 h-[65px] md:h-[70px] bg-[#FAFAFA]  z-50 drop-shadow-lg">
      {/* DESKTOP VIEW */}
      <div className="w-[92%] mx-auto hidden md:block ">
        <div className="w-full flex items-center justify-between ">
          <Link
            to="/"
            className="text-3xl lg:text-4xl font-semibold lg:font-bold"
          >
            <img src={logo} alt="logo" className="w-[160px]" />
          </Link>
          <ul className="flex items-center justify-between bg-white rounded-xl px-2 py-1">
            <li className="text-lg mx-4">
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="about" className="text-lg mx-4">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to="property" className="text-lg mx-4">
                Properties
              </NavLink>
            </li>
          </ul>
          <button className="bg-primary text-white rounded-3xl px-4 py-[8px] capitalize">
            contact us
          </button>
        </div>
      </div>
      {/* MOBILE VIEW */}
      <div className="w-[95%] mx-auto flex md:hidden">
        <div className="w-full flex lg:hidden items-center justify-between  ">
          <Link
            to="/"
            className="text-3xl md:text[2rem] lg:text-4xl font-semibold lg:font-bold"
          >
            <img src={logo} alt="logo" className="w-[130px]" />
          </Link>
          <div onClick={() => setToggle((prevState) => !prevState)}>
            {toggle ? (
              <VscChromeClose size={27} color="#000080" />
            ) : (
              <VscMenu size={27} color="#000080" />
            )}
          </div>
        </div>
      </div>

      {toggle && (
        <motion.ul
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="fixed lg:hidden w-[50%] sm:w-[40%] h-[40vh] pl-8 py-8 bg-primary top-[68px] right-0 rounded-l-xl items-center flex flex-col   "
        >
          <li className="text-white text-[20px] md:text-[25px] my-5">
            <Link to="/" onClick={() => setToggle(!toggle)}>
              Home
            </Link>
          </li>
          <li className="text-white text-[20px] md:text-[25px] my-5">
            <Link to="about" onClick={() => setToggle(!toggle)}>
              About
            </Link>
          </li>
          <li className="text-white text-[20px] md:text-[25px] my-5">
            <Link to="property" onClick={() => setToggle(!toggle)}>
              Properties
            </Link>
          </li>
        </motion.ul>
      )}
    </div>
  );
};

export default Navbar;
