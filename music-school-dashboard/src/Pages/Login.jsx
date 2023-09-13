import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Redux/AuthReducer/action';
import { toast } from 'react-toastify';
import { Navigate, useLocation } from 'react-router-dom';



const initialState = {
  email: "",
  password: "",
}


const LoginPage = () => {

  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();
  const token = useSelector((store) => store.AuthReducer.token);
  const location = useLocation();
  // console.log('token:', token)

  if (token) {
    toast.success('Login Successfull!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
    });
    return <Navigate to="/overview" />
  }



  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => {
      return { ...user, [name]: value }
    });
  }


  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(user))
    setUser(initialState);
  }


  return (
    <div>
      <div className='w-[100%] h-[100px] bg-[#ffffff] flex justify-center items-center '>
        <p className='font-[700] text-[#83858B] text-[28px] leading-[39px]'>Music School Login</p>
      </div>

      <div className='w-[100%] h-[545px] bg-[#E5E7EB] flex justify-center items-center'>

        <form onSubmit={(e) => handleLogin(e)} className='my-[50px] w-[30%] m-auto'>

          <input onChange={(e) => handleChange(e)} type="text" value={user.email} name="email" placeholder='Enter Email' className='border-[#E5E7EB]  border w-[100%] h-[32px] my-[5px] rounded-[4px] text-[12px] font-[400] text-[#83858B]  pl-2' />
          <input onChange={(e) => handleChange(e)} type="password" value={user.password} name="password" placeholder='Enter Password' className='border-[#E5E7EB]  border w-[100%] h-[32px] my-[5px] rounded-[4px] text-[12px] font-[400] text-[#83858B]  pl-2' />
          <input type="submit" value={"Login"} className=' w-[106px] h-[35px] rounded-[4px] bg-[#FEC0CA] ml-[140px] mt-[20px] cursor-pointer' />
        </form>
      </div>
    </div>
  )
}

export default LoginPage