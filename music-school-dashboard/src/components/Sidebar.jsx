import React from 'react'
import Logo from "../images/logo.png"
import homeLogo from "../images/home-logo.svg"
import courseLogo from "../images/course-logo.png"
import logoutLogo from "../images/logout-logo.png"

const Sidebar = () => {
  return (
    <div className='w-[8%] h-[640px] border-2 bg-[#ffffff] '>

      <div className='w-[80%]  m-auto'>

        {/* Logo */}
        <div className='mt-[10px]'>
          <img src={Logo} alt="logo" className='m-auto' />
        </div>

        {/* Home and Course Logo */}
        <div className='mt-[60px]'>
          <div className='bg-[#FEDFE1] w-[72px] h-[50px] rounded-[6px] pt-[5px]'>
            <img src={homeLogo} alt="home-logo" className='m-auto' />
            <p className='text-center text-[12px] font-[400] text-[#901E75]'>Home</p>
          </div>

          <div className='mt-[20px] bg-[#E5E7EB] w-[72px] h-[50px] rounded-[6px] pt-[12px]'>
            <img src={courseLogo} alt="courseLogo" className='m-auto' />
            <p className='text-center text-[12px] font-[400] text-[#83858B]'>Courses</p>
          </div>
        </div>

      </div>


      {/* Logout */}
      <div className='  w-[60%]  m-auto  mt-[350px] '>
        <img src={logoutLogo} alt="logoutLogo" className='m-auto' />
        <p className='text-center text-[12px] font-[400] text-[#83858B] '>Logout</p>
      </div>
    </div >
  )
}

export default Sidebar