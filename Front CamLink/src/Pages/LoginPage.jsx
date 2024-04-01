import React from 'react'
import {Link} from 'react-router-dom'

function LoginPage() {
  return (
    <div className='text-white flex justify-evenly'>

      <div className=' w-[20rem] h-[25rem] flex flex-col text-start justify-center items-center bg-red-200 bg-opacity-40 rounded-lg'> 

      <h1 className='font-bold text-2xl text-red pb-4 text-center'>Log In</h1>

      <div className=''>

         <h3 className='p-1'>Email Address</h3>
         <input className='p-1 text-gray-800 rounded-md font-serif bg-rounded-lg bg-opacity-50 w-[15rem]' type="text"
         placeholder='Enter Your Email Address' />

         <h3 className='p-1'>Password</h3>
         <input className='p-1 text-gray-800 rounded-md font-serif bg-rounded-lg bg-opacity-50 w-[15rem]' type="Password"
         placeholder='Enter your Password' />

         <p className='underline'>Forget Your Password</p>

        <Link to ='/SignUp'>
         <p className='text-center p-3'>Create New Account</p>
        </Link>



      </div>

         <button className='bg-gradient-to-br from-red-600 to-red-800 rounded-lg p-1 w-[10rem] mt-2 font-serif text-xl hover:scale-110 duration-300'>Sign In</button>
      </div>


      <div>
        <h1 className='text-red-400 text-4xl w-[11ch]' style={{ fontFamily: 'monoton' }}>LINKING CAMERAS FOR A BETTER VIEW</h1>
      </div>

    </div>
  )
}

export default LoginPage
