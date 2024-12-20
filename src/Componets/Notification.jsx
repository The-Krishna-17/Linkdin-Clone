import React from 'react'

//importing required icon
import { FaCaretDown } from "react-icons/fa";
import { FaEllipsisH } from "react-icons/fa";

//importing footer image
import footerImg from '../assets/footer image.png'
import footerLogo from '../assets/logo.png'

//importing required image
import no1 from '../assets/no1.jpeg'
import no2 from '../assets/no2.jpeg'
import no3 from '../assets/no3.jpeg'
import no4 from '../assets/no4.jpeg'
import bgImg from '../assets/bg-img.jpeg'
import pp from '../assets/pp.jpg'
import apu from '../assets/apuLogo.jpg'

const Notification = () => {
  return (
    <> 
    {/* section that is only display in sm screen */}
      <div className="flex bg-white justify-between p-4 mt-2 items-center border border-slate-300 md:hidden">
        <h2 className='font-semibold'>Manage your Notifications</h2>
        <h2 className='font-semibold text-blue-600'>View Settings</h2>
      </div>
      {/* the whole content that is going to display at md screen  */}
      <div className='md:grid grid-cols-3 md:p-6 md:gap-8'>
        {/* content that is going to display at left on md screen  */}
        <aside className=' hidden md:block col-span-1'>
          <div className='bg-white p-4 rounded-xl border border-slate-300'>
            <div className='relative w-full h-auto'>
              <img src={bgImg} alt=""/>
              <img src={pp} alt="" class="w-16 h-16 rounded-full object-cover absolute top-5 border-2 border-white"/>
            </div>
            <div className='flex flex-col gap-1 mt-12'>
              <h2 className='text-lg font-semibold'>Krishna Dhami</h2>
              <p className='text-xs text-slate-700'>Attended Asia Pacific University of Technology and Innovation (APU / APIIT)</p>
              <p className='text-xs text-slate-700'>Kathmandu, Bagmati</p>
            </div>
            <div className='flex gap-1 items-center mt-3'>
              <img src={apu} alt="" className='h-8 w-8 rounded-full object-cover'/>
              <p className='font-semibold text-slate-900 text-xs'>Attended Asia Pacific University of Technology and Innovation (APU / APIIT)</p>
            </div>
          </div>
          <div className='bg-white mt-4 p-3 rounded-xl border border-slate-300'>
            <p className='text-slate-700 font-semibold'>Groups</p>
            <p className='text-slate-700 font-semibold'>Events</p>
            <p className='font-semibold text-blue-700'>View Settings</p>
          </div>
        </aside>
        {/* content that is going to display at right on md screen  */}
        <div className='col-span-2'>
          <div className="flex justify-start gap-4 bg-white p-4 mt-3 md:mt-0 items-center font-semibold border border-slate-300 md:rounded-xl">
            <button className='border border-slate-300 p-1 rounded-full w-14'>All</button>
            <button className='border border-slate-300 p-1 rounded-full w-16'>Jobs</button>
            <button className='border border-slate-300 p-1 rounded-full w-24'>My posts</button>
            <button className='border border-slate-300 p-1 rounded-full w-24'>Mentions</button>
          </div>
          {/* all notification list  */}
          <div className='bg-white my-3 p-3 border border-slate-300 md:rounded-xl'>
            <div className='flex gap-4 p-2'>
              <img src={no1} alt="" className='w-12'/>
              <p className='text-sm'>Clock b Business Innovations is an institution that works as a partner of entrepreneurs and investors to</p>
              <div className='flex flex-col items-center text-sm gap-2'>
                <p>40m</p>
                <FaEllipsisH />
              </div>
            </div>
            <hr />
            <div className='flex gap-4 p-2'>
              <img src={no2} alt="" className='w-12'/>
              <p className='text-sm'>Tuesday <span>Wrap-Up</span>: Sailing the leader's ship; Buldak ramen's viral success; and more.</p>
              <div className='flex flex-col items-center text-sm gap-2'>
                <p>2h</p>
                <FaEllipsisH />
              </div>
            </div>
            <hr />
            <div className='flex gap-4 p-2'>
              <img src={no1} alt="" className='w-12'/>
              <p className='text-sm'>Akhir tahun adalah waktu yang baik untuk kita melakukan refleksi. Untuk tetap semangat di tahun</p>
              <div className='flex flex-col items-center ext-sm gap-2'>
                <p>5h</p>
                <FaEllipsisH />
              </div>
            </div>
            <hr />
            <div className='flex gap-4 p-2'>
              <img src={no3} alt="" className='w-12'/>
              <p className='text-sm'>Tuesday <span>Wrap-Up</span>: Sailing the leader's ship; Buldak ramen's viral success; and more.</p>
              <div className='flex flex-col items-center ext-sm gap-2'>
                <p>7h</p>
                <FaEllipsisH />
              </div>
            </div>
            <hr />
            <div className='flex gap-4 p-2'>
              <img src={no4} alt="" className='w-12'/>
              <p className='text-sm'>Prestasi apa saja yang paling kamu banggakan di tahun 2024? Yuk, saling berbagi di bagian komentar..</p>
              <div className='flex flex-col items-center ext-sm gap-2'>
                <p>8h</p>
                <FaEllipsisH />
              </div>
            </div>
            <div className='p-4'>
              <button className='w-full border-2 border-slate-500 font-semibold text-slate-600 rounded-full mb-4 py-1'>Show more Results</button>
            </div>
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
      </div>
    </>
  )
}

export default Notification