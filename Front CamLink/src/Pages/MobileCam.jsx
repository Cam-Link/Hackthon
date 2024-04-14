import React from 'react'
import img from '../assets/Tech.jpg';

const MobileCam = () => {
  return (
    <div className='flex flex-col items-center'>
      <button className='bg-indigo-950 text-xl text-gray-300 rounded-full px-14 py-3 mt-8'>Link code: byzd5328</button>

      <div className='bg-opacity-70 p-4 mt-4 rounded-2xl' style={{ backgroundColor: "#06081f", width: '500px', height: 'auto', borderRadius:'3%'}}>
        <img src={img} alt="shared video" style={{ width: '450px', height:'500px', borderRadius:'3%' }} />
      </div>

      <div className='flex gap-14 mt-10'>
        <button className='bg-red-700 text-grey-300 rounded-full px-6 py-3 transition-all font-bold hover:bg-red-900 duration-350 hover:scale-90 font-serif'>
          Stop
        </button>
      </div>
    </div>
  )
}

export default MobileCam