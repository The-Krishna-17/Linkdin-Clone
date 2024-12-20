import React from 'react'
// importing the required icon 
import { BsFillPeopleFill } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { FaCalendarAlt } from "react-icons/fa";
import { MdEventNote } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { MdOutlineArrowLeft } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { IoPersonAdd } from "react-icons/io5";




//importing footer image
import footerImg from '../assets/footer image.png'
import footerLogo from '../assets/logo.png'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import ps1 from '../assets/ps1.jpg'
import ps2 from '../assets/ps2.avif'
import ps3 from '../assets/ps3.jpg'


//importing connets.jsx
import connects from '../API/Connect';


const Network = () => {
  return (
    <>
    {/* all the content here */}
    <div className='md:grid grid-cols-[2fr_2.5fr]  md:p-6 gap-8'>
      {/* content that is displayed in left  */}
      <div>
        <div className='bg-white border-slate-300 my-4 md:my-0 p-6 border md:rounded-xl md:mb-6'>
          <h1 className='font-semibold text-lg'>Manage my network</h1>
          <hr className='my-3'/>
          <ul className='space-y-4 text-lg text-slate-600'>
            <li className='flex items-center gap-4'><BsFillPeopleFill />Connections</li>
            <li className='flex items-center gap-4'><IoPersonSharp />Following & followers</li>
            <li className='flex items-center gap-4'><HiUserGroup />Groups</li>
            <li className='flex items-center gap-4'><FaCalendarAlt />Events</li>
            <li className='flex items-center gap-4'><MdEventNote />Pages</li>
            <li className='flex items-center gap-4'><FaRegNewspaper />Newsletters</li>
          </ul>
        </div>
        {/* footer image  */}
        <div className=' flex justify-center bg-white mt-1 border border-slate-300 md:rounded-xl'>
              <img src={footerImg} alt="image" />
        </div>
        {/* footer  */}
        <div className='flex flex-col gap-3 mb-4 '>
            <div className='flex flex-wrap justify-center gap-3 text-xs px-8 py-3 text-slate-600'>
              <p>About</p>
              <p>Accessibility</p>
              <p>Help Center</p>
              <p className="flex items-center gap-1">Privacy & Terms <FaCaretDown /></p>
              <p>Ad Choices</p>
              <p>Advertising</p>
              <p className="flex items-center gap-1">Business Services <FaCaretDown /></p>
              <p>Get the LinkedIn app</p>
              <p>More</p>
            </div>
            <div className='flex gap-2 items-center justify-center mb-3'>
              <p className='font-bold text-blue-600 flex items-center text-sm'>Linked<img src={footerLogo} alt="logo" className='h-4'/> </p><p className='text-xs'>Linkedin Corporation © 2024</p>
            </div>
          </div>
        </div>
      {/* content that is displayed in right  */}
      <div>
        {/* grow catch section  */}
      <div className='flex justify-evenly bg-white items-center p-3 text-slate-700 font-semibold text-lg border border-slate-300 md:rounded-xl'>
          <h2>Grow</h2>
          <h2>Catch up</h2>
        </div>
        <div className='flex justify-between items-center bg-white mt-4 p-3 border border-slate-300 md:rounded-xl'>
          <h2>No pending invitations</h2>
          <h2 className='text-slate-700 font-semibold text-lg'>Catch up</h2>
        </div>
        {/* stay in touch through games section  */}
        <div className='border border-slate-300 bg-white mt-4 md:rounded-xl'>
          <div>
            <div className='flex items-center justify-between p-3'>
              <p>Stay in touch through daily games</p>
              <div className='flex items-center gap-2'>
                <MdOutlineArrowLeft className='border border-slate-400 rounded-full text-3xl bg-gray-200'/>
                <IoMdArrowDropright className='border border-slate-400 rounded-full text-3xl'/>
              </div>
            </div>
          </div>
          <div className='flex p-4 justify-between items-center mb-4 gap-6'>
            <div className='flex gap-3 items-center'>
              <img src={s1} alt="" className='w-10'/>
              <div>
                <h2 className='font-semibold'>Tango <span>#71</span></h2>
                <p className='text-xs text-slate-700'>Tuesday, Dec 17</p>
              </div>
              <button className='border-2 font-semibold border-blue-600 py-1 px-3 text-blue-700 rounded-full'>Play</button>
            </div>
            <div className='flex gap-3 items-center'>
              <img src={s2} alt="" className='w-10'></img>
              <div>
                <h2 className='font-semibold'>Queens <span>#231</span></h2>
                <p className='text-xs text-slate-700'>Tuesday, Dec 17</p>
              </div>
              <button className='border-2 font-semibold border-blue-600 py-1 px-3 text-blue-700 rounded-full'>Play</button>
            </div>
          </div>
        </div>
        {/* scale your business section  */}
      <div className='flex flex-col gap-2 bg-white my-3 p-4 border border-slate-300 md:rounded-xl'>
        <div className='flex justify-between font-semibold'>
          <h2>Scale your business</h2>
          <RxCross2 />
        </div>
        <p className='text-slate-800 text-sm'>Stand out and reach more customers with Premium Business</p>
        <div className='flex items-center mt-1 gap-2'>
          <div className='flex '>
            <img src={ps1} alt="" className='h-7 w-7 rounded-full object-cover'/>
            <img src={ps2} alt="" className='h-7 w-7 rounded-full object-cover'/>
            <img src={ps3} alt="" className='h-7 w-7 rounded-full object-cover'/>
          </div>
          <p className='text-xs text-slate-600'>Millions of membes use Premium</p>   
        </div>
        <div className='px-2 space-x-2'>
          <button className='bg-yellow-500 px-3 py-1 rounded-full my-2 font-semibold'>Try Premium for $0</button>
          <p className='leading-tight text-xs text-slate-600'>1-month free trial. Cancle anytime.</p>
        </div>
      </div>
      {/* connect friend cards section  */}
      <div className='border border-slate-300 md:rounded-xl bg-white'>
        <div className='flex justify-between items-center p-3'>
          <div className='flex-1'>
            <p className>People you may know from Asia Pacific University of Technology and Innovation (APU / APIIT)</p>
          </div>
          <div>
            <button className='font-semibold text-slate-700'>Show all</button>
          </div>
        </div>
        {/* connect card  */}
        <div className='flex flex-wrap gap-4 mb-4 p-4'>
          {connects.map((data) =>(
            <div className='flex flex-col flex-1 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl p-4' key={data.id}>
              <div className='flex flex-col items-center gap-1'>
                <img src={data.profile} alt="" className='h-28 w-28 rounded-full object-cover'/>
                <h2 className='font-semibold text-lg'>{data.name}</h2>
                <p className='text-sm text-slate-600'>{data.profession}</p>
              </div>
              <div className='flex items-center gap-1 my-3'>
                <img src={data.mutualImg} alt="" className='h-5 w-5 rounded-full object-cover'/>
                <p className='text-xs text-slate-700'>{data.mutual}</p>
              </div>
              <button className='flex items-center justify-center gap-2 text-blue-600 border shadow-blue-300 shadow-sm border-blue-600 py-1 px-3 rounded-full font-semibold'> <IoPersonAdd />Connect</button>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Network