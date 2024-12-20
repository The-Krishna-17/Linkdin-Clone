import React from 'react'
// importing lindin logo & pp
import logo from '../assets/logo.png'
import pp from '../assets/pp.jpg'
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
import {Routes, Route, Link} from 'react-router-dom'
//all the components
import Home from '../Componets/Home';
import Network from '../Componets/Network';
import Jobs from '../Componets/Jobs';
import Messaging from '../Componets/Messaging';
import Notification from '../Componets/Notification';
import More from '../Componets/More';
import Profile from '../Componets/Profile';


const Navbar = () => {
  return (
    <>
    {/* declaring navigation bar */}
        <nav className='flex max-w-full items-center text-2xl justify-evenly md:justify-between bg-white border border-slate-300 p-2 md:px-5 sticky z-10 top-0'>

            {/* logo & search icon here */}
            <img src={logo} alt="logo" className='w-10'/>
            <FaMagnifyingGlass />

            {/* all links */}
            <ul className='flex gap-6 md:gap-10'>
              <li>
                <Link to="/"> 
                  <IoHome />
                </Link> 
              </li>

              <li>
                <Link to="/network"> 
                  <BsFillPeopleFill /> 
                </Link>
              </li>

              <li>
                <Link to="/jobs"> 
                  <IoBagHandleSharp /> 
                </Link>
              </li>

              <li>
                <Link to="/messages"> 
                  <AiFillMessage /> 
                </Link>
              </li>

              <li>
                <Link to="/notification"> 
                  <FaBell /> 
                </Link>
              </li>

              <li>
                <Link to="/profile">
                  <img src={pp} alt="profile picture" className='w-6 h-6 rounded-full object-cover'/>
                </Link>
              </li>

              <li className='md:hidden'>
                <Link to="/more"> 
                  <FaEllipsisH /> 
                </Link>
              </li>
            </ul>
            <p className='hidden md:flex font-thin'>|</p>
            <div className='hidden md:flex items-center gap-8 justify-between'>
              <CgMenuGridR className='text-3xl text-slate-600'/>
              <div className='flex flex-col items-center'>
                <FaSquare className='w-4 text-[#E7A33E]'/>
                <p className='text-xs text-slate-600'>Try Premium for $0</p>
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
                <Route path='/profile' element={<Profile />}/>
                <Route path="/more" element={<More />}/>
        </Routes>
    </>
  )
}

export default Navbar