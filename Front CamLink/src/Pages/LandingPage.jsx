import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className="flex justify-evenly mb-[0px] m-11 gap-[2rem] text-white">

   <div className='w-[30rem]'>

    <h1 className='font-bold font text-4xl p-2 animate-bounce' style={{ fontFamily: 'monoton' }}>CamLink</h1>

    <p className='font-serif font-bold text-xl'>"Empower Your Presentations, Expand Your Perspectives"</p>

    <p className='p-4' style={{ fontFamily: 'Merriweather', fontWeight: 100 }}>Introducing a versatile solution tailored for seamless presentations and immersive event experiences. Our innovative platform offers two distinct options: first, facilitating screen sharing with synchronized audio for seamless sessions even without a projector; second, a multi-camera streaming service providing viewers with diverse perspectives for an enriched event viewing experience. Elevate your presentations and events with our comprehensive solution.</p>

    <Link to='/Home'>

    <button className='bg-blue-500 rounded-lg  text-white text-xl p-2 font-serif m-3 w-[15rem] hover:bg-blue-600 active:bg-blue-700 hover:scale-110 duration-300'>Go to Livestreem</button>
    </Link>



   </div>

   <div>
    <img className='h-[25rem] w-[25rem]' src="./Images/home2.jpg" alt="" />
   </div>

 

  
</div>
  )
}

export default LandingPage
