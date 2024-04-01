import React from 'react'


function SignUpPage() {


  return (
    <div className='app signup flex justify-evenly h-[72vh]'>

    <div className=' w-[20rem] h-[30rem] flex flex-col text-start justify-center items-center bg-blue-700 bg-opacity-40 rounded-lg'> 

    <h1 className='font-bold text-2xl text-red pb-4 text-center'> Sign Up</h1>

    <div className=''>

       <h3 className='p-1'>First Name</h3>

       <input className='p-1 text-gray-800 rounded-md font-serif bg-rounded-lg bg-opacity-50 w-[15rem]' type="text"
       placeholder='Enter Your Email Addrass' />
       <h3 className='p-1'>Last Name</h3>
       <input className='p-1 text-gray-800 rounded-md font-serif bg-rounded-lg bg-opacity-50 w-[15rem]' type="text"
       placeholder='Enter Your Email Addrass' />
       <h3 className='p-1'>Email Address</h3>
       <input className='p-1 text-gray-800 rounded-md font-serif bg-rounded-lg bg-opacity-50 w-[15rem]' type="text"
       placeholder='Enter Your Email Addrass' />

       <h3 className='p-1'>Password</h3>
       <input className='p-1 text-gray-800 rounded-md font-serif bg-rounded-lg bg-opacity-50 w-[15rem]' type="Password"
       placeholder='Enter your Password' />
       <h3 className='p-1'>Confirm Password</h3>
       <input className='p-1 text-gray-800 rounded-md font-serif bg-rounded-lg bg-opacity-50 w-[15rem]' type="Password"
       placeholder='Enter your Password' />

    </div>

       <button className='bg-gradient-to-br from-red-600 to-red-800 rounded-lg p-1 w-[10rem] mt-2 font-serif text-xl hover:scale-110 duration-300'>Create</button>
    </div>


    <div>
      <h1 className='text-4xl w-[11ch]' style={{ fontFamily: 'monoton' }}>LINKING CAMERAS FOR A BETTER VIEW</h1>
    </div>

  </div>
  )
}

export default SignUpPage
