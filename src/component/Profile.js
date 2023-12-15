import React from 'react'
import { Link } from 'react-router-dom';

const Profile = () => {

    const first = localStorage.getItem('First');
    const last = localStorage.getItem('Last');
    const email = localStorage.getItem('Email');
    const password = localStorage.getItem('Password');
    const phone = localStorage.getItem('Phone');


    return (
        <div className='login text-white'>
            <div className='  2xl:containe py-6 h-[100vh]'>
                <div className='w-[80%] mx-auto grid grid-cols-1  h-[60vh]'>
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className='text-lg lg:text-3xl font-bold'>Your Profile Information</h2>
                    </div>
                    <div className='flex flex-col justify-center items-start space-y-5' >
                        <h2 className='sm:text-md lg:text-xl'>Name :{first + last}</h2>
                        <h2 className='sm:text-md lg:text-xl'>Email :{email}</h2>
                        <h2 className='sm:text-md lg:text-xl' >Password :{password}</h2>
                        <h2 className='sm:text-md lg:text-xl' >Phone :{phone}</h2>
                    
                    </div>
                    <Link to={'/'}>
                            <button className=' sm:text-md lg:text-lg bg-white text-black font-medium  rounded-full   px-8 py-2 hover:bg-blue-600 hover:text-white'>Logout</button>
                        </Link>
                </div>
            </div>
        </div>
    )
}

export default Profile
