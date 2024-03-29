import React from 'react'
import NavBar from './NavBar'

function ScreenSharing() {
  return (
    <div className='flex gap-40'>

      <div>
      <NavBar />
      </div>

      <div className='flex flex-col gap-[5rem] justify-center font-serif'>
      <div className=' text-white felx flex-col bg-cyan-800 bg-opacity-70 p-4 h-[13rem] w-[50rem] justify-around rounded-2xl'>
      <label htmlFor='input-link' className=' p-2 text-3xl font-bold'>Watch a screen being shared</label>
      <div className='pt-[1.5rem] pl-[2rem]'>
        <input id ='input-link'className='rounded-full bg-teal-200 h-[3rem] w-[28rem]'type ="text" placeholder='  Link code'/>
        <button className='bg-green-600 rounded-md ml-[2rem] h-[2.5rem] w-[6rem] text-lg'>link</button>
      </div>
      </div>
      <div className=' text-white felx flex-col gap-[2rem] bg-cyan-800 bg-opacity-70 p-4 h-[13rem] w-[50rem] justify-around rounded-2xl'>
        <h1 className='p-2 text-3xl font-bold'>Share your screen for others</h1>
        <button className='bg-green-600 text-xl text-gray-900 rounded-full mt-[1.5rem] ml-[15rem] h-[3rem] w-[10rem]'>Start a link</button>
      </div>
    </div>
      
    </div>
  )
}

export default ScreenSharing
