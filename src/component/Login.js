
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



const Login = () => {

    const nav =useNavigate()
    const [Email,setEmail]=useState();
    const [Password,setPassword]=useState();
    function click(){
      const Semail=localStorage.getItem('Email')
      const Spassword=localStorage.getItem('Password')
     
      if(Semail === Email && Spassword === Password ){
        nav('/Profile')
      }else{
        alert("In-correct username and password")
      }
    }
    function email(e){
      setEmail(e.target.value)
    } 
    function password(e){
      setPassword(e.target.value)
    } 
    return (
        <div className='login text-white'>
            <div className='  2xl:containe py-36 h-[100vh]'>
            <div className='w-[75%] mx-auto grid grid-cols-1  h-[60vh]'>
                    <div className='flex flex-col justify-center items-center space-y-3'>
                        <h1 className='sm:xl md:text-2xl lg:text-3xl font-bold'>Experience the Extraordinary</h1>
                        <h2 className='sm:text-lg md:text-xl lg:text-2xl font-semibold'>Login here</h2>
                    </div>
                    <div className='w-[75%] mx-auto grid grid-cols-1 '>
                        <div className='flex flex-col justify-center items-center space-y-3'>
                            <div className='space-y-1'>
                                <h1 className='sm:text-md lg:text-xl font-medium'>Email Address</h1>
                                <input className='sm:w-[200px] lg:w-[300px] sm:h-[30px] lg:h-[45px] text-black font-medium p-3 rounded-xl' type='email' placeholder='Enter Your Email ' value={Email} onChange={email} />
                            </div>
                            <div className='space-y-1'>
                                <h1 className='sm:text-md lg:text-xl font-medium'>Password</h1>
                                <input className='sm:w-[200px] lg:w-[300px] sm:h-[30px] lg:h-[45px] text-black  font-medium p-3 rounded-xl' type='password' placeholder='Enter Your Password 'value={Password} onChange={password} />
                            </div>
                            <p className='sm:text-md'>If You Don't have Account...!!! <Link to={'/Signup'} className='underline hover:text-red-600' >Signup</Link ></p>
                                <button className = ' sm:text-md lg:text-lg bg-white text-black font-medium  rounded-full   px-8 py-2 hover:bg-blue-600 hover:text-white'onClick={click}>Login</button>
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
