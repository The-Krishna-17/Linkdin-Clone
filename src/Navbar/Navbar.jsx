import React, { useState } from "react";
// importing lindin logo & pp
import logo from "../assets/logo.png";
import pp from "../assets/pp.jpg";
//importing all the required icons
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoBagHandleSharp } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { FaEllipsisH } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { FaSquare } from "react-icons/fa6";

// importing Routes and Route
import { Routes, Route, NavLink } from "react-router-dom";
//all the components
import Home from "../Componets/Home";
import Network from "../Componets/Network";
import Jobs from "../Componets/Jobs";
import Messaging from "../Componets/Messaging";
import Notification from "../Componets/Notification";
import More from "../Componets/More";
import Profile from "../Componets/Profile";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      {/* declaring navigation bar */}
      <nav className="flex max-w-full items-center text-2xl justify-evenly md:justify-between bg-white border border-slate-300 p-2 md:px-5 sticky z-10 top-0">
        {/* logo & search icon here */}

        <NavLink to="/">
          <img src={logo} alt="logo" className="w-9 h-auto" />
        </NavLink>
        {/* search button */}
        {showSearch ? (
          <input
            type="text"
            placeholder="Search..."
            className="border p-1 rounded-md  max-w-xs ml-4 h-9 text-xl"
            onBlur={() => setShowSearch(false)}
          />
        ) : (
          <FaMagnifyingGlass onClick={() => setShowSearch(true)} />
        )}

        {/* all NavLinks */}
        <ul className="flex gap-6 md:gap-10">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-black flex items-center transition-all duration-200 ease-in-out"
                  : "text-gray-600"
              }
            >
              {showSearch ? (
                <IoHome className="hidden lg:flex" />
              ) : (
                <IoHome className="flex" />
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/network"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-black flex items-center transition-all duration-200 ease-in-out"
                  : "text-gray-600"
              }
            >
              {showSearch ? (
                <BsFillPeopleFill className="hidden lg:flex" />
              ) : (
                <BsFillPeopleFill className="flex" />
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/jobs"
              className={({ isActive }) =>
                isActive
                  ? "underline border-b-2 border-black flex items-center transition-all duration-200 ease-in-out"
                  : "text-gray-500"
              }
            >
              {showSearch ? (
                <IoBagHandleSharp className="hidden lg:flex" />
              ) : (
                <IoBagHandleSharp className="flex" />
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/messages"
              className={({ isActive }) =>
                isActive
                  ? "underline border-b-2 border-black flex items-center transition-all duration-200 ease-in-out"
                  : "text-gray-500"
              }
            >
              {showSearch ? (
                <AiFillMessage className="hidden lg:flex" />
              ) : (
                <AiFillMessage className="flex" />
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/notification"
              className={({ isActive }) =>
                isActive
                  ? "underline border-b-2 border-black flex items-center transition-all duration-200 linear"
                  : "text-gray-500"
              }
            >
              {showSearch ? (
                <FaBell className="hidden lg:flex" />
              ) : (
                <FaBell className="flex" />
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "underline border-b-2 border-black flex items-center transition-all duration-200 ease-in-out"
                  : "text-gray-500"
              }
            >
              {showSearch ? (
                <img
                  src={pp}
                  alt="profile picture"
                  className="w-6 h-6 rounded-full object-cover hidden lg:flex"
                />
              ) : (
                <img
                  src={pp}
                  alt="profile picture"
                  className="w-6 h-6 rounded-full object-cover flex"
                />
              )}
            </NavLink>
          </li>

          <li className="md:hidden">
            <NavLink
              to="/more"
              className={({ isActive }) =>
                isActive
                  ? "underline border-b-2 border-black flex items-center"
                  : "text-gray-500"
              }
            >
              {showSearch ? (
                <FaEllipsisH className="hidden lg:flex" />
              ) : (
                <FaEllipsisH className="flex" />
              )}
            </NavLink>
          </li>
        </ul>
        <p className="hidden md:flex font-thin">|</p>
        <div className="hidden md:flex items-center gap-8 justify-between">
          <CgMenuGridR className="text-3xl text-slate-600" />
          <div className="flex flex-col items-center">
            <FaSquare className="w-4 text-[#E7A33E]" />
            <p className="text-xs text-slate-600">Try Premium for $0</p>
          </div>
        </div>
      </nav>

      {/* giving routes and route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/network" element={<Network />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/messages" element={<Messaging />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </>
  );
};

export default Navbar;
