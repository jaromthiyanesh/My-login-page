import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {


    
  const nav = useNavigate();
  const [First,setFirst]=useState('');
  const [Last,setLast]= useState('');
  const [Email,setEmail]=useState('');
  const [Password,setPassword]= useState('');
  const [Confirmpass,setConfirmpass]=useState('');
  

    function click(){
            localStorage.setItem('Email',Email);
            localStorage.setItem('Password',Password);
            localStorage.setItem('First',First);
            localStorage.setItem('Last',Last);
            localStorage.setItem('Confirmpass',Confirmpass);
            
            if (Email !== '' && Password !== '' && First !== '' && Last !== '' && Confirmpass !== ''){
              nav('/')
            }else{
              alert("Fill all the content")
            }
            

    }
    function first(e){
       setFirst(e.target.value)
      
    } 
    function last(e){
      setLast(e.target.value)
    } 
    function email(e){
      setEmail(e.target.value)
    } 
    function confirmpass(e){
      setConfirmpass(e.target.value)
    } 
    function password(e){
      setPassword(e.target.value)
    } 

    return (
        <div className='login text-white'>
            <div className='  2xl:containe py-8 h-[100vh]'>
                <div className='w-[75%] mx-auto grid grid-cols-1  h-[60vh]'>
                    <div className='flex flex-col justify-center items-center space-y-3'>
                        <h1 className=' sm:xl md:text-2xl lg:text-3xl font-bold'>Experience the Extraordinary</h1>
                        <h2 className=' sm:text-lg md:text-xl lg:text-2xl font-semibold'>Signup here</h2>
                    </div>
                    <div className='w-[75%] mx-auto grid sm:grid-cols-1 md:grid-cols-2 '>
                        <div className='flex flex-col justify-center items-center space-y-3'>
                            <div className='space-y-1'>
                                <h1 className=' sm:text-md lg:text-xl font-medium'>First Name</h1>
                                <input className='sm:w-[200px] lg:w-[300px] sm:h-[30px] lg:h-[45px] text-black font-medium p-3 rounded-xl' type='text' placeholder='Enter Your First Name' value={First} onChange={first} />
                            </div>
                            <div className='space-y-1'>
                                <h1 className='sm:text-md lg:text-xl font-medium'>Last Name</h1>
                                <input className='sm:w-[200px] lg:w-[300px] sm:h-[30px] lg:h-[45px] text-black  font-medium p-3 rounded-xl' type='password' placeholder='Enter Your Last Name' value={Last} onChange={last} />
                            </div>

                            <div className='space-y-1'>
                                <h1 className='sm:text-md lg:text-xl font-medium'>Email Address</h1>
                                <input className='sm:w-[200px] lg:w-[300px] sm:h-[30px] lg:h-[45px] text-black font-medium p-3 rounded-xl' type='email' placeholder='Enter Your Email' value={Email} onChange={email}/>
                            </div>


                        </div>
                        <div className='flex flex-col justify-center items-center space-y-3'>

                            <div className='space-y-1'>
                                <h1 className='sm:text-md lg:text-xl font-medium'>Password</h1>
                                <input className='sm:w-[200px] lg:w-[300px] sm:h-[30px] lg:h-[45px] text-black  font-medium p-3 rounded-xl' type='password' placeholder='Enter Your Password'value={Password} onChange={password} />
                            </div>
                            <div className='space-y-1'>
                                <h1 className='sm:text-md lg:text-xl font-medium'>Confirm Password</h1>
                                <input className='sm:w-[200px] lg:w-[300px] sm:h-[30px] lg:h-[45px] text-black font-medium p-3 rounded-xl' type='password' placeholder='Re-enter Your Password' value={Confirmpass} onChange={confirmpass} />
                            </div>
                            <div className='space-y-1'>
                                <h1 className='sm:text-md lg:text-xl font-medium'>Phone Number</h1>
                                <input className='sm:w-[200px] lg:w-[300px] sm:h-[30px] lg:h-[45px] text-black font-medium p-3 rounded-xl' type='email' placeholder='Enter Your Phone Number' />
                            </div>


                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-2 p-5'>
                        <p className='sm:text-md '>If You have Account...??? <Link to={'/'} className='underline hover:text-red-600'>Login</Link> </p>
                        <button className='sm:text-md lg:text-lg bg-white text-black font-medium  rounded-full  px-8 py-2 hover:bg-blue-600 hover:text-white'onClick={click}>Signup</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
