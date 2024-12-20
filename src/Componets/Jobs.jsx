import React from 'react'
// importing the required icon 
import { AiOutlineBars } from "react-icons/ai";
import { FaCaretDown } from "react-icons/fa";
import { MdOutlineArrowLeft } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { GrNotes } from "react-icons/gr";
import { IoBookmark } from "react-icons/io5";
import { FaRegPenToSquare } from "react-icons/fa6";

//importing footer image
import footerImg from '../assets/footer image.png'
import footerLogo from '../assets/logo.png'

//importing image
import pp from '../assets/pp.jpg'
import ps1 from '../assets/ps1.jpg'
import ps2 from '../assets/ps2.avif'
import ps3 from '../assets/ps3.jpg'
import easyApply from '../assets/easyApply.png'
import Hybrid from '../assets/Hybrid.png'
import Remote from '../assets/remote.png'
import smallBiz from '../assets/smallbiz.png'
import resume from '../assets/resume.gif'


const Jobs = () => {
  return (
    <>
    {/* header section for sm screen */}
      <div className='flex justify-between px-2 py-4 bg-white border border-slate-300 md:hidden'>
        <div className='flex items-center gap-3 text-[1.1rem]'>
          <AiOutlineBars className='text-3xl'/>
          <h2 className='font-semibold text-sm'>Preferences</h2>
        </div>
        <div className='flex items-center gap-3 font-semibold'>
          <h2>More</h2> 
          <FaCaretDown />
        </div>
      </div>
      {/* all content for that will display in the md screen  */}
      <div className='md:grid md:grid-cols-3 lg:grid-cols-9 gap-6 md:py-8 md:px-20 lg:px-24'>
        {/* content that is going to display at left  */}
        <div className='md:col-span-1 lg:col-span-2'>
          {/* header section for md screen */}
            <div className='hidden md:block space-y-4 p-3 bg-white border border-slate-300 text-slate-700 font-semibold rounded-xl'>
              <p className='flex gap-3'><AiOutlineBars className='text-2xl'/>Preferences</p>
              <p className='flex gap-3'><IoBookmark className='text-2xl'/>My Jobs</p>
              <p className='flex gap-3'><GrNotes className='text-2xl'/>Interview Prem</p>
            </div>
            <button className='md:flex gap-1 px-4 py-2 border shadow-sm shadow-blue-600 border-blue-600 rounded-full text-blue-600 items-center font-semibold mt-3 hidden'><FaRegPenToSquare />Starting hiring with AI</button>
        </div>
        {/* content that is going to display at right  */}
      <div className='md:col-span-2 lg:col-span-4'>
          {/* recent job searches */}
        <div className='flex flex-col gap-3 bg-white mt-5 md:mt-0 p-3 border border-slate-300 md:rounded-xl'>
          <div className='flex justify-between'>
            <h2 className='font-semibold text-lg'>Recent job searches</h2>
            <h2 className='font-semibold text-slate-600'>Clear</h2>
          </div>
            <div>
              <h2 className='font-semibold'>frontend developer  <span className='font-semibold text-green-600 text-xs'>.2 new</span></h2>
              <p className='text-xs font-semibold text-slate-600'>Nepal . Apply on LinkedIn . Internship</p>
            </div>
            <hr />
            <div>
              <h2 className='font-semibold'>frontend developer <span className='font-semibold text-green-600 text-xs'>.2 new</span></h2>
              <p className='text-xs font-semibold text-slate-600'>Nepal . Apply on LinkedIn . Internship</p>
            </div>
            <hr />
            <div>
              <h2 className='font-semibold'>frontend developer <span className='font-semibold text-green-600 text-xs'>.2 new</span></h2>
              <p className='text-xs font-semibold text-slate-600'>Nepal . Apply on LinkedIn . Internship</p>
            </div>
            <hr />
            <button className='flex items-center justify-center gap-2'>Show more <FaCaretDown /></button>
        </div>

        {/* try premium section */}
        <div className='bg-white my-3 py-4 px-7 border border-slate-300 md:rounded-xl'>
          <div className='flex items-center gap-3'>
            <img src={pp} alt="profile image" className='h-12 w-12 rounded-full object-cover'/>
            <h1 className='font-semibold leading-tight'>See the full list of jobs where you'd be a top applicant</h1>
          </div>
          <div className='flex items-center ml-14 mt-1 gap-2'>
            <div className='flex '>
              <img src={ps1} alt="" className='h-7 w-7 rounded-full object-cover'/>
              <img src={ps2} alt="" className='h-7 w-7 rounded-full object-cover'/>
              <img src={ps3} alt="" className='h-7 w-7 rounded-full object-cover'/>
            </div>
            <p className='text-xs text-slate-600'>Millions of membes use Premium</p>   
          </div>
          <div className='p-3'>
            <button className='ml-11 bg-yellow-500 px-3 py-1 rounded-full my-2 font-semibold'>Try Premium for $0</button>
            <p className='ml-11  leading-tight text-xs text-slate-600'>1-month free trial. We'll send you a reminder 7 days before your trial ends.</p>
          </div>
        </div>

        {/* Explore with job collections section  */}
        <div className='p-4 bg-white mb-6 border border-slate-300 md:rounded-xl'>
          <div className='flex justify-between items-center'>
            <div>
                <h2 className='font-semibold text-lg'>Explore with job collections</h2>
                <p className='text-sm text-slate-500'>Broaden your job search with curated collections</p>
            </div>
            <div className='flex gap-2'>
              <MdOutlineArrowLeft className='border border-slate-400 rounded-full text-3xl bg-gray-200'/>
              <IoMdArrowDropright className='border border-slate-400 rounded-full text-3xl'/>
            </div>
          </div>
          <div className='flex gap-2 my-3'>
            <div className='rounded-xl bg-white p-4 shadow-lg flex flex-col flex-1 text-sm font-semibold space-y-2 items-center text-slate-600'>
              <img src={easyApply} alt="" />
              <p>Easy Apply</p>
            </div>
            <div className='rounded-xl bg-white p-4 shadow-lg flex flex-col flex-1 text-sm font-semibold space-y-2 items-center text-slate-600'>
              <img src={Hybrid} alt="" />
              <p>Hybrid</p>
            </div>
            <div className='rounded-xl bg-white p-4 shadow-lg flex flex-col flex-1 text-sm font-semibold space-y-2 items-center text-slate-600'>
              <img src={Remote} alt="" />
              <p>Remote</p>
            </div>
            <div className='rounded-xl bg-white p-4 shadow-lg flex flex-col flex-1 text-sm font-semibold space-y-2 items-center text-slate-600'>
              <img src={smallBiz} alt="" />
              <p>Small biz</p>
            </div>
          </div>
        </div>
        {/* show more result button  */}
        <div className='p-4'>
          <button className='w-full border-2 border-slate-500 font-semibold text-slate-600 rounded-full mb-4 py-1'>Show more Results</button>
        </div>
    
        {/* Job seeker section  */}
        <div className='bg-white border border-slate-300 p-4 md:rounded-xl lg:hidden'>
          <div>
            <h2 className='text-lg font-semibold'>Job seeker guidance</h2>
            <p className='text-xs text-slate-800'>Recommended based on your activity</p>
          </div>
          <div className='flex my-3 justify-between items-center shadow-sm shadow-slate-200 p-1'>
            <h2 className='font-semibold text-sm'>I want to improve my resume</h2>
            <img src={resume} alt="" />
          </div>
          <div>
            <p className='text-sm'>Explore our curated guide of expert-led courses, such as how to improve your resume and grow your network, to help you land your next opportunity.</p>
          </div>
          <button className='text-purple-400 font-semibold flex items-center gap-2 my-3'>Show more <FaArrowRight /></button>
        </div>

        {/* footer image  */}
        <div className=' flex justify-center bg-white mt-4 border border-slate-300 md:rounded-xl lg:hidden'>
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
        {/* the content which is going to display at the right side of the page  */}
        <aside className='hidden lg:block lg:col-span-3'>
          <div className='bg-white border border-slate-300 p-4 md:rounded-xl'>
            <div>
              <h2 className='text-lg font-semibold'>Job seeker guidance</h2>
              <p className='text-xs text-slate-800'>Recommended based on your activity</p>
            </div>
            <div className='flex my-3 justify-between items-center shadow-sm shadow-slate-200 p-1'>
              <h2 className='font-semibold text-sm'>I want to improve my resume</h2>
              <img src={resume} alt="" />
            </div>
            <div>
              <p className='text-sm'>Explore our curated guide of expert-led courses, such as how to improve your resume and grow your network, to help you land your next opportunity.</p>
            </div>
            <button className='text-purple-400 font-semibold flex items-center gap-2 my-3'>Show more <FaArrowRight /></button>
          </div>
          <div className=' flex justify-center bg-white mt-4 border border-slate-300 md:rounded-xl '>
              <img src={footerImg} alt="image" />
          </div>
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

export default Jobs