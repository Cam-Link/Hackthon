import React from 'react'
import img from '../assets/Tech.jpg';
import { Camera, CameraAltOutlined, RemoveRedEyeOutlined } from '@mui/icons-material';

function NewCam() {
  return (
    <div className='flex flex-col items-center'>
      <button className='bg-indigo-950 text-xl text-gray-300 rounded-full px-14 py-3 mt-8'>Link code: byzd5328</button>

      <div className='bg-opacity-70 p-4 mt-4 rounded-2xl' style={{ backgroundColor: "#06081f", width: '800px', height: 'auto', borderRadius:'3%'}}>
        <img src={img} alt="shared video" style={{ width: '800px', borderRadius:'3%' }} />
        <div className='ml-[40rem] pt-[0.5rem] flex gap-[1rem] text-gray-300 '><CameraAltOutlined color='primary'/> 0 <RemoveRedEyeOutlined color='primary'/> 0</div>
      </div>

      <div className='flex gap-14 mt-10'>
        <button className='bg-red-700 text-grey-300 rounded-full px-6 py-3 transition-all font-bold hover:bg-red-900 duration-350 hover:scale-90 font-serif'>
          Stop
        </button>
        <button className='bg-indigo-700 text-grey-300 rounded-full px-6 py-3 transition-all font-bold hover:bg-indigo-900 duration-350 hover:scale-90 font-serif '>
          Go Live
        </button>
      </div>
    </div>
  )
}

export default NewCam
