import React from 'react'
import Sidebar from '../components/Sidebar'
import profile from "../images/profile.png"
import { LatestTable } from '../components/LatestEnrolmentTable'
import { BestStudentsTable } from '../components/BestStudentsTable'

const Overview = () => {



  return (
    <div className='flex m-auto'>
      <Sidebar />

      <div className='w-[92%] h-[auto] bg-[#F4F4F4]'>

        <div className='w-[90%] m-auto mt-[20px]'>

          {/* Overview */}
          <div>
            <p className='font-[700] text-[#83858B] text-[28px] leading-[39px] mt-[30px]'>Overview</p>
          </div>

          {/* Card */}
          <div className=' flex justify-between gap-[20px] mt-[40px] '>

            <div className=' bg-[#FFFFFF] w-[232px] h-[98px] rounded-[6px]'>

              <div className='flex items-center gap-[20px] mt-[5px] '>
                <div>
                  <img src={profile} alt="profile" className='ml-[10px] mt-[5px]' />
                </div>

                <div className='mt-[10px]'>
                  <p className='text-[22px] font-[400] text-[#212529]'>164</p>
                  <p className='text-[12px] font-[400] text-[#83858B]'>total number of students</p>
                </div>

              </div>

              <div className='flex justify-end mt-[10px] mr-[10px]'>
                <p className='text-[12px] font-[400] text-[#B33086]'>View</p>
              </div>
            </div>


            <div className=' bg-[#FFFFFF] w-[232px] h-[98px] rounded-[6px]'>

              <div className='flex items-center gap-[20px] mt-[5px] '>
                <div>
                  <img src={profile} alt="profile" className='ml-[10px] mt-[5px]' />
                </div>

                <div className='mt-[10px]'>
                  <p className='text-[22px] font-[400] text-[#212529]'>12</p>
                  <p className='text-[12px] font-[400] text-[#83858B]'>total number of courses</p>
                </div>

              </div>

              <div className='flex justify-end mt-[10px] mr-[10px]'>
                <p className='text-[12px] font-[400] text-[#B33086]'>View</p>
              </div>
            </div>

            <div className=' bg-[#FFFFFF] w-[232px] h-[98px] rounded-[6px]'>

              <div className='flex items-center gap-[20px] mt-[5px] '>
                <div>
                  <img src={profile} alt="profile" className='ml-[10px] mt-[5px]' />
                </div>

                <div className='mt-[10px]'>
                  <p className='text-[22px] font-[400] text-[#212529]'>$2000</p>
                  <p className='text-[12px] font-[400] text-[#83858B]'>total amount earned</p>
                </div>

              </div>

              <div className='flex justify-end mt-[10px] mr-[10px]'>
                <p className='text-[12px] font-[400] text-[#B33086]'>View</p>
              </div>
            </div>


            <div className=' bg-[#FFFFFF] w-[232px] h-[98px] rounded-[6px]'>

              <div className='flex items-center gap-[20px] mt-[5px] '>
                <div>
                  <img src={profile} alt="profile" className='ml-[10px] mt-[5px]' />
                </div>

                <div className='mt-[10px]'>
                  <p className='text-[22px] font-[400] text-[#212529]'>Guitar</p>
                  <p className='text-[12px] font-[400] text-[#83858B]'>best performing course</p>
                </div>

              </div>

              <div className='flex justify-end mt-[10px] mr-[10px]'>
                <p className='text-[12px] font-[400] text-[#B33086]'>View</p>
              </div>
            </div>

            <div className=' bg-[#FFFFFF] w-[232px] h-[98px] rounded-[6px]'>

              <div className='flex items-center gap-[20px] mt-[5px] '>
                <div>
                  <img src={profile} alt="profile" className='ml-[10px] mt-[5px]' />
                </div>

                <div className='mt-[10px]'>
                  <p className='text-[22px] font-[400] text-[#212529]'>Flute</p>
                  <p className='text-[12px] font-[400] text-[#83858B]'>worst performing course</p>
                </div>

              </div>

              <div className='flex justify-end mt-[10px] mr-[10px]'>
                <p className='text-[12px] font-[400] text-[#B33086]'>View</p>
              </div>
            </div>












          </div>

          {/* Latest Enrollment Table */}

          <div className='flex justify-between mt-[30px]'>
            <p className='text-[16px] text-[#83858B] font-[700]'>LATEST ENROLMENTS</p>
            <p className='text-[14px] text-[#901E75] font-[400]'>View All Courses</p>
          </div>

          {/* Table */}
          <div className='mt-[20px] bg-[#FFFFFF]'>
            <LatestTable />
          </div>

          {/* Best Students Table */}

          <div className='flex justify-between mt-[30px]'>
            <p className='text-[16px] text-[#83858B] font-[700]'>BEST STUDENTS</p>
            <p className='text-[14px] text-[#901E75] font-[400]'>View All Students</p>
          </div>

          {/* Table */}
          <div className='mt-[20px] bg-[#FFFFFF]'>
            <BestStudentsTable />
          </div>

        </div>

      </div>
    </div>
  )
}

export default Overview