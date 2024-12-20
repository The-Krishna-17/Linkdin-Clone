import React from 'react'
// importing the required icon 
import { FaEllipsisH } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
// import { FaMagnifyingGlass } from "react-icons/fa6";

//importing footer image
import footerImg from '../assets/footer image.png'
import footerLogo from '../assets/logo.png'

//importing required images
import Rajesh from '../assets/rajesh.jpeg'
import Franklin from '../assets/franklin.jpeg'
import Aditi from '../assets/aditi.jpeg'


const Messaging = () => {
  return (
    <> 
      <div className='md:px-20 md:py-4 lg:grid grid-cols-7 gap-6'>
        {/* content that is going display to the right side of the page */}
        <div className='bg-white mt-3 lg:mt-0 mb-3 pb-20 border border-slate-300 md:rounded-xl col-span-5'>
          <div className='flex items-center justify-between p-3'>
              <div className='flex gap-5'>
                <h2 className='font-semibold'>Messaging</h2>
                <input type="text" placeholder='Search messages' className='bg-slate-200 h-8 w-full rounded-md p-2'/>
              </div>
              <div className='flex gap-5 text-2xl'>
                <FaEllipsisH />
                <FaRegPenToSquare />
              </div>
          </div>
          {/* focused and filter button  */}
          <div className='flex gap-2 items-center p-3 border border-slate-300'>
              <button className='flex gap-2 text-white font-semibold items-center bg-green-700 px-3 py-1 rounded-full'>Focused<FaCaretDown /></button>
              <p className=' text-xl'>|</p>
              <button className='flex gap-2 text-white font-semibold items-center bg-green-700 px-3 py-1 rounded-full'>All filters<FaCaretDown /></button>
          </div>
          <div className='flex items-center px-3 py-1'>
            <img src={Rajesh} alt="" className='h-14 w-14 rounded-full object-cover'/>
            <div className='px-6 py-3'>
              <div className='flex items-center justify-between'>
                <h2 className='text-lg'>Rajesh Kumar Tharu</h2>
                <p className='text-sm'>Nov 28</p>
              </div>
              <p className='text-xs text-slate-700'>Rajesh: Hey, have you tried using Framer Motion for animations in React? It's super smooth for adding cool effects to your components! </p>
            </div>
          </div>
          <hr />
          <div className='flex items-center px-3 py-1'>
            <img src={Franklin} alt="" className='h-14 w-14 rounded-full object-cover'/>
            <div className='px-6 py-3'>
              <div className='flex items-center justify-between'>
                <h2 className='text-lg'>Franklin Tavarez</h2>
                <p className='text-sm'>Nov 28</p>
              </div>
              <p className='text-xs text-slate-700'><span className='font-semibold'>Franklin Tarvarez</span> Hi Krishna, i'd like to offer you a free trial of Linkedin Premium. Linkedin Premium gives you access</p>
            </div>
          </div>
          <hr />
          <div className='flex items-center px-3 py-1 gap-2'>
            <img src={Aditi} alt="" className='h-14 w-14 rounded-full object-cover'/>
            <div className='px-6 py-3'>
              <div className='flex items-center justify-between'>
                <h2 className='text-lg'>Aditi Kedia</h2>
                <p className='text-sm'>Jul 18</p>
              </div>
              <p className='text-xs text-slate-700'>Aditi: Hi Krishna, I understand that time can be tight. But if you ever find a moment, feel free to share your Programi...</p>
            </div>
          </div>
          <div className='flex items-center justify-center p-2'>
            <button className=' font-semibold text-sm text-slate-700'>Load more conversations</button>
          </div>
        </div>
        {/* content that is going to display at the right side of the page */}
        <div className='col-span-2'>
          {/*footer image  */}
          <div className=' flex justify-center lg:px-2 bg-white mt-1 border border-slate-300 md:rounded-xl'>
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
      </div>
    </>
  )
}

export default Messaging