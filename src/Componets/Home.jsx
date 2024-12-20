import React from 'react'

// importing the required icon 
import { GrGallery } from "react-icons/gr";
import { FaCalendarAlt } from "react-icons/fa";
import { LuNotepadText } from "react-icons/lu";
//importing the custom api
import datas from '../API/Data';
import addToFeed from '../API/AddToFeed';

//importing required icon
import { AiTwotoneLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { FaEllipsisH } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FaHeart } from "react-icons/fa";
import { BsExclamationSquareFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

//importing footer image
import footerImg from '../assets/footer image.png'
import footerLogo from '../assets/logo.png'
//other images
import bgImg from '../assets/bg-img.jpeg'
import pp from '../assets/pp.jpg'
import IS from '../assets/IS.png'
import w3School from '../assets/w3School.jpeg'
import paudel from '../assets/paudel.jpg'

const Home = () => {
  return (
    <>
    {/* main div whole content in this div  */}
    <div className='md:p-8 lg:px-12 grid md:grid-cols-3 lg:grid-cols-6 gap-6 '>
      {/* aside (content i.e. going to display at left on md screen) profile for medium screen */}
      <aside className=' hidden md:block md:col-span-1'>
        <div className='bg-white p-4 rounded-xl border border-slate-300'>
          <div className='relative w-full h-auto'>
            <img src={bgImg} alt=""/>
            <img src={pp} alt="" class="w-16 h-16 rounded-full object-cover absolute top-5 left-14 border-2 border-white"/>
          </div>
          <div className='flex flex-col items-center mt-[4.5rem]'>
            <h2 className='text-lg font-semibold'>Krishna Dhami</h2>
            <p className='text-xs text-slate-700'>Attended Asia Pacific University of Technology and Innovation (APU / APIIT)</p>
          </div>
          <hr className='my-4 border-gray-300'/>
          <div className='flex justify-between my-3'>
            <p className='text-slate-700 text-xs font-semibold'>Profile viewers</p>
            <p className='text-blue-700 text-xs font-semibold'>16</p>
          </div>
          <div className='flex justify-between'>
            <p className='text-slate-700 text-xs font-semibold'>Post impressions</p>
            <p className='text-blue-700 text-xs font-semibold'>19</p>
          </div>
          <hr className='my-4 border-gray-300'/>
          <div>
            <p className='text-sm text-slate-700'>Accelerate your career</p>
            <p className='flex items-center text-sm gap-3 pl-3 font-semibold'><div className='h-4 w-4 bg-[#E7A33E] rounded-sm shadow-lg shadow-[#C37D16]'></div>Try Premium for $0</p>
          </div>
          <hr className='my-4 border-gray-300'/>
          <p className='flex items-center gap-3 text-sm font-semibold'><FaBookmark className='text-slate-600'/>Saved items</p>
        </div>
        <div className='bg-white mt-4 p-4 rounded-xl border border-slate-300'>
          <p className='text-blue-700 text-xs font-semibold mb-3'>Groups</p>
          <p className='text-blue-700 text-xs font-semibold flex items-center justify-between'>Events <IoMdAdd className='text-lg text-stone-900'/></p>
          <hr className='my-4 border-gray-300'/>
          <p className='text-center font-semibold text-sm text-slate-800'>Discover more</p>
        </div>
      </aside>
      
      {/* all the content for sm screen only */}
      <div className='md:col-span-2 lg:col-span-3'>
        {/* header  */}
        <header className='bg-white border border-slate-300 md:rounded-xl'>
          {/* image and start a post div  */}
          <div className='flex items-center p-4 gap-4'>
            <img src={pp} alt="profile picture" className='w-14 h-14 rounded-full object-cover'/>
            <input type="text" placeholder='Start a post' className='border border-slate-400 h-12 w-full rounded-3xl p-4 placeholder-slate-700'/>
          </div>
          {/* media, event and write article div  */}
          <div className='flex justify-evenly pb-3'>
            <div className='flex items-center gap-2'>
              <GrGallery className='text-blue-500'/>
              <p>Media</p>
            </div>
            <div className='flex items-center gap-2'>
              <FaCalendarAlt className='text-orange-400'/>
              <p>Event</p>
            </div>
            <div className='flex items-center gap-2'>
              <LuNotepadText className='text-orange-700'/>
              <p>Write article</p>
            </div>
          </div>
        </header>
        <hr className='my-4 border-1 border-gray-400'/>

        {/* main body  */}
          {/* linkdin feed */}
          {datas.map((data) => (
            <div key={data.id} className='bg-white mt-3 p-5 border border-slate-300s md:rounded-xl'>
                <div className='flex items-center justify-between'>
                  <p className='text-xs text-gray-700'>Suggested</p>
                  <div className='flex gap-4'>
                    <FaEllipsisH />
                    <RxCross2 />
                  </div>
                </div>
                <hr className='my-3 border-1 border-gray-300'/>
              {/* user profile and info */}
              <div className='flex justify-between'>
                  <div className='flex gap-4'>
                    <img src={data.profilePhoto} alt="profile picture" className='w-14 h-14 rounded-full object-cover'/>
                    <div>
                      <p className='font-bold'>{data.name}</p>
                      <p>{data.university}</p>
                      <p>{data.day}</p>
                    </div>
                  </div>
                  <button className='font-bold text-blue-600'>+ Follow</button>
              </div>
              {/* description */}
              <div>
                <p>{data.description}</p>
                <div className='py-2'>
                  <img src={data.postPhoto} alt="post photos" />
                  <div className='flex justify-between mt-1'>
                    <p className='flex items-center gap-2 font-semibold text-slate-500'>
                      <div className='flex'>
                        <FaHeart className='text-red-600'/><AiFillLike className='text-blue-600'/>
                      </div>
                      {data.likes}
                    </p>
                    <p className='font-semibold text-slate-600'>{data.comments} comments . {data.repost} reposts</p>
                  </div>
                </div>
              </div>
              <hr className='mb-4 border-1 border-gray-400'/>
              {/* like, comment, repost and send  */}
              <div className='flex justify-between'>
                  <div className='flex items-center gap-2 font-semibold text-slate-800'>
                    <button className='text-lg'><AiTwotoneLike /></button>
                    <p>Like</p>
                  </div>
                  <div className='flex items-center gap-2 font-semibold text-slate-800'>
                    <button className='text-lg'><FaRegCommentDots /></button>
                    <p>Comment</p>
                  </div>
                  <div className='flex items-center gap-2 font-semibold text-slate-800'>
                    <button className='text-lg'><BiRepost /></button>
                    <p>Repost</p>
                  </div>
                  <div className='flex items-center gap-2 font-semibold text-slate-800'>
                    <button className='text-lg'><FiSend /></button>
                    <p>Send</p>
                  </div>
              </div>
            </div>
          ))}

        {/* show more feed updates button  */}
        <div className='flex justify-center w-full my-8'>
          <button className='w-[90%] border-2 border-slate-700 p-1 rounded-full font-semibold text-slate-700'>Show more feed upadates</button>
        </div>
        {/* add to your feed section  */}
        <div className='bg-white mb-4 border border-slate-300 md:rounded-xl lg:hidden'>
          <div className='flex items-center justify-between p-4 '>
            <h2 className='font-semibold text-slate-700'>Add to your feed</h2>
            <BsExclamationSquareFill />
          </div>
          {/* data from Data.jsx  */}
          {addToFeed.map((data) => (
            <div key={data.id} className='flex gap-3 py-1 px-3 '>
              <img src={data.logo} alt="logo" className='w-12 h-12 object-cover rounded-full'/>
              <div>
                <h2 className='font-semibold'>{data.name}</h2>
                <p className='text-xs text-slate-700'>{data.description}</p>
                <button className='border border-slate-800 px-3 py-1 rounded-full my-2 font-semibold text-slate-600'>+ Follow</button>
              </div>
            </div>
          ))}
          <p className='flex items-center px-3 pb-3 gap-2 text-sm font-semibold text-slate-700'>View all recommendations <FaArrowRightLong /></p>
        </div>
        {/* footer image  */}
        <div className=' flex justify-center bg-white mt-1 border border-slate-300 md:rounded-xl lg:hidden'>
          <img src={footerImg} alt="image" />
        </div>
        {/* footer  */}
        <div className='flex flex-col gap-3 mb-4 lg:hidden'>
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
      {/* content that is going to be displayed at right side of the home page */}
      <aside className='hidden lg:block col-span-2'>
      {/* add to your feed */}
      <div className='bg-white p-4 space-y-4 rounded-xl col-span-2'>
          <h2 className='flex items-center justify-between font-semibold'>Add to your feed <BsExclamationSquareFill /></h2>
          <div className='flex gap-2'>
            <img src={IS} alt="" className='h-12 w-12 rounded-full object-cover'/>
            <div>
              <h2 className='font-semibold text-sm'>InterSathi - Internships in Nepal</h2>
              <p className='text-xs text-slate-700'>Company . Human Resources Services</p>
              <button className='flex items-center gap-2 font-bold border border-slate-700 py-1 px-3 rounded-full shadow-sm shadow-slate-400 mt-3'><FaPlus />Follow</button>
            </div>
          </div>
          <div className='flex gap-1'>
            <img src={paudel} alt="" className='h-12 w-12 rounded-full object-cover'/>
            <div>
              <h2 className='font-semibold text-sm'>Bishworaj Poudel</h2>
              <p className='text-xs text-slate-700'>Contetnt Creator || 279K+ Subscribers ||</p>
              <p className='text-xs text-slate-700'>100K+ App Downloads</p>
              <button className='flex items-center gap-2 font-bold border border-slate-700 py-1 px-3 rounded-full shadow-sm shadow-slate-400 mt-3'><FaPlus />Follow</button>
            </div>
          </div>
          <div className='flex gap-1'>
            <img src={w3School} alt="" className='h-12 w-12 rounded-full object-cover'/>
            <div>
              <h2 className='font-semibold'>W3Schools.com</h2>
              <p className='text-xs text-slate-700'>Company . E-learning Providers</p>
              <button className='flex items-center gap-2 font-bold border border-slate-700 py-1 px-3 rounded-full shadow-sm shadow-slate-400 mt-3'><FaPlus />Follow</button>
            </div>
          </div>
          <button className='flex items-center gap-4 text-slate-600 font-semibold'>View all recomendations <FaArrowRightLong /></button>
      </div>
        {/* footer image  */}
        <div className=' flex justify-center bg-white mt-1 border border-slate-300 md:rounded-xl lg:mt-4'>
          <img src={footerImg} alt="image" />
        </div>
        {/* footer  */}
        <div className='flex flex-col gap-3 mb-4'>
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
     </aside>
    </div>
    </>
  )
}

export default Home