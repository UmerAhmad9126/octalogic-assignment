import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCourseData, postCourseData } from '../Redux/CourseReducer/action';
import { useToast } from "@/components/ui/use-toast"

const initailState = {
    name: "",
    description: "",
    instructor: "",
    instrument: "",
    dayOfWeek: "",
    numberOfStudents: 10,
    price: "",
    status: "Closed"
}

function ModalForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [courses, setCourses] = useState(initailState);
    const dispatch = useDispatch();
    const {toast} = useToast();

    const handleChange = (e) => {
        const { name, value } = e.target
        // console.log(name, value)
        setCourses((course) => {
            return {
                ...course, [name]: name === "price" ? + value : value
            }
        })
    }

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        closeModal();
        dispatch(postCourseData(courses));
        toast({
            description: "New Course Added.",
        })


    };

    useEffect(() => {
        dispatch(getCourseData());
    })

    return (
        <div>
            <button
                onClick={openModal}
                className="w-[150px] h-[60px] bg-[#FEC0CA] rounded-[10px]"
            >
                Add Course
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="modal-background fixed inset-0 bg-gray-800 opacity-50"></div>

                    <div className="modal-content bg-white p-6 rounded shadow-lg relative w-[500px] h-[auto]">
                        <p className="font-[400px] text-[22px] text-[#212529]">Add Course</p>

                        <form onSubmit={handleSubmit} className='mt-[15px]'>

                            <input type="text" name="name" onChange={(e) => handleChange(e)} placeholder='Course Name' className='border-[#E5E7EB]  border w-[100%] h-[32px] my-[5px] rounded-[4px] text-[12px] font-[400] text-[#83858B]  pl-2' />
                            <input type="text" name="description" onChange={(e) => handleChange(e)} placeholder='Description' className='border-[#E5E7EB]  border w-[100%] h-[32px] my-[5px] rounded-[4px] text-[12px] font-[400] text-[#83858B]  pl-2' />
                            <input type="text" name="instructor" onChange={(e) => handleChange(e)} placeholder='Instructor' className='border-[#E5E7EB]  border w-[100%] h-[32px] my-[5px] rounded-[4px] text-[12px] font-[400] text-[#83858B]  pl-2' />
                            <select name="instrument" onChange={(e) => handleChange(e)} className='border-[#E5E7EB]  border w-[100%] h-[32px] my-[5px] rounded-[4px] text-[12px] font-[400] text-[#83858B]'>
                                <option value="">Instrument</option>
                                <option value="Piano">Piano</option>
                                <option value="Violin">Violin</option>
                                <option value="Guitar">Guitar</option>
                                <option value="Drums">Drums</option>
                            </select >
                            <select name="dayOfWeek" onChange={(e) => handleChange(e)} className='border-[#E5E7EB]  border w-[100%] h-[32px] my-[5px] rounded-[4px] text-[12px] font-[400] text-[#83858B]'>
                                <option value="">Day of the week</option>
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>
                                <option value="Sunday">Sunday</option>
                            </select>
                            <input name="price" type="number" onChange={(e) => handleChange(e)} placeholder='Price' className='border-[#E5E7EB]  border w-[100%] h-[32px] my-[5px] rounded-[4px] text-[12px] font-[400] text-[#83858B]  pl-2' />
                            <div className='flex text-[14px] font-[400] text-[#212529] mt-[10px] items-center justify-end gap-[20px]'>
                                <p onClick={closeModal} className='cursor-pointer'>Cancel</p>
                                <input type="submit" value={"Add Course"} className='w-[106px] h-[35px] rounded-[4px] bg-[#FEC0CA]' />
                            </div>

                        </form>
                    </div>
                </div>
            )
            }
        </div >
    );
}

export default ModalForm;
