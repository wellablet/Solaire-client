import React from 'react'
import Avatar from '../assests/img1.png'

export default function SideBar() {
  return (
    <div className='bg-primary w-[10%] h-screen min-w-fit'>
      <header className='flex flex-col items-center justify-center pt-10'>
        <img src={Avatar} className='w-32 h-32 object-cover' alt='' />
        <h3 className='text-white text-md mt-5 '>User Name</h3>
      </header>
    </div>
  )
}
