import React ,{useEffect, useState} from 'react'
import NavBar from './NavBar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScreenSharingg from './ScreenSharingg';


function ScreenSharing() {

  const [isLinkStarted,setIsLinkStarted]=useState(false);

  const handleStartLink = () => {
    setIsLinkStarted(true);
  };



  return (
    <div className='flex gap-40'>
      <div>
        <NavBar />
      </div>


      {isLinkStarted ? (
          <ScreenSharingg />
        ) : (


      <div className='flex flex-col gap-[5rem] justify-center font-serif'>
        <div className= 'text-gray-300 felx flex-col bg-opacity-70 p-4 h-[13rem] w-[50rem] justify-around rounded-2xl'style={{backgroundColor: "#06081f "}} data-aos="zoom-in">
          <label htmlFor='input-link' className='p-2 text-3xl '>
            Watch a screen being shared
          </label>
          <div className='pt-[1.5rem] pl-[2rem]'>
            <input
              id='input-link'
              className='rounded-full bg-gray-800 bg-opacity-50 h-[3rem] w-[28rem]'
              type='text'
              placeholder='  Link code'
            />
            <button className='bg-indigo-950  text-gray-300 rounded-md ml-[2rem] h-[2.5rem] w-[6rem] text-lg transition-all hover:bg-indigo-800 duration-350 hover:scale-125'>
              link
            </button>
          </div>
        </div>
        <div className=' text-gray-300 felx flex-col gap-[2rem]bg-opacity-70 p-4 h-[13rem] w-[50rem] justify-around rounded-2xl' style={{backgroundColor: "#06081f "}} data-aos="zoom-in">
          <h1 className='p-2 text-3xl '>Share your screen for others</h1>
          <button onClick={handleStartLink} className='bg-indigo-950 text-xl text-gray-300 rounded-full mt-[1.5rem] ml-[15rem] h-[3rem] w-[10rem] transition-all hover:bg-indigo-800 duration-350 hover:scale-125'>
             Start a link
          </button>
        </div>
      </div>
      )}
    </div>
  );
}

export default ScreenSharing;