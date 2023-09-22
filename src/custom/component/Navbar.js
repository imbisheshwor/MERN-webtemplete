import React from 'react'
import  notificationIcon  from '../image/icon/NotificationIcon.png'
import  messageIcon  from '../image/icon/MessageIcon.png'
import  profile  from '../image/profile.jpeg'

const Navbar = () => {
  return (
    <div className='w-full px-3 bg-[#fff] h-28 flex'>

      <div className="first  w-3/4 flex justify-between items-center">
        <div className="title text-3xl font-bold">
          Dashboard
        </div>
        <div className="status flex gap-3 border-r-2 border-gray-400 pr-10 ">
          <div className="notification flex ">
            <img src={notificationIcon} className='relative' alt="" />
            <span className='bg-red-600 text-white rounded-full h-6 px-1 absolute ml-8'>12</span>
          </div>
          <div className="message flex">
            <img src={messageIcon} className='relative' alt="" />
            <span className='bg-red-600 text-white rounded-full h-6 px-1 absolute ml-8'>2</span>
          </div>
        </div>
      </div>
      <div className="second  w-1/4 flex gap-5 items-center px-5">
        <div className="text block text-center">
          <div>Good Morning</div>
          <div className='text-xl text-black font-bold'>Jolly K. Walter</div>
        </div>
        <div className="profile">
          <img src={profile}  className='rounded-full h-20 w-20 object-cover' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
