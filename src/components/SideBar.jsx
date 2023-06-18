import React from 'react'
import Avatar from '../assests/img1.png'
import { BsChatSquareFill } from "react-icons/bs";
import { FaUser, FaBoxOpen } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
export default function SideBar() {
  return (
    <div className='bg-primary w-[10%] h-screen min-w-fit'>
      <header className='flex flex-col items-center justify-center pt-10'>
        <img src={Avatar} className='w-32 h-32 object-cover' alt='' />
        <h3 className='text-white text-md mt-5 '>User Name</h3>
      </header>
      <div className='flex flex-col h-[65%] justify-between items-center mt-14'>
        <Link className='h-12 w-12 rounded-full flex items-center justify-center sidebar-icon '>
          <BsChatSquareFill className='text-white text-2xl mx-auto ' />
        </Link>
        <Link className='h-12 w-12 rounded-full flex items-center justify-center sidebar-icon '>
          <FaUser className='text-white text-2xl mx-auto' />
        </Link>
        <Link className='h-12 w-12 rounded-full flex items-center justify-center sidebar-icon '>
          <AiTwotoneSetting className='text-white text-2xl mx-auto' />
        </Link>
        <Link className='h-12 w-12 rounded-full flex items-center justify-center sidebar-icon '>
          <RiLogoutBoxRFill className='text-white text-2xl mx-auto' />
        </Link>
      </div>
    </div>
  )
}
