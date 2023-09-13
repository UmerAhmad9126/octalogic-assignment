import React from 'react'
import Sidebar from '../components/Sidebar'
import search from "../images/search.png"
import { CourseTable } from '../components/CourseTable'

const Course = () => {
  return (
    <div className='flex m-auto'>
      <Sidebar />
      <div className='w-[92%] h-[auto] bg-[#F4F4F4]'>

        <div className='w-[90%] m-auto mt-[20px]'>

          {/* Course */}
          <div>
            <p className='font-[700] text-[#83858B] text-[28px] leading-[39px]  '>Courses</p>
          </div>

          {/* Course List */}
          <div className='flex mt-[50px] justify-between'>

            <p className='font-[700] text-[#83858B] text-[16px] leading-[22px] '>COURSE LIST</p>


            <div className='flex items-center relative w-[223px] h-[32px] rounded-[4px]'>
              <input
                type="text"
                placeholder='Search'
                className='w-full h-full pl-8 pr-[13px] placeholder-mx-4 rounded-[4px]'
              />
              <img src={search} alt="search" className='absolute left-2 top-1/2 transform -translate-y-1/2 w-[16px] h-[16px]' />
            </div>

          </div>

          {/* Table */}

          <div className='mt-[20px] bg-[#FFFFFF]'>
            <CourseTable />
          </div>

          <div className='flex justify-end mt-[100px] mb-[100px]'>
            <button className='w-[150px] h-[60px] bg-[#FEC0CA] rounded-[10px]'>Add Course</button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Course