import React ,{useEffect,useState} from 'react'
import NavBar from './NavBar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import MobileCam from './MobileCam';

function CamLinkPage() {

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const [isLinkStarted,setIsLinkStarted]=useState(false);

  const handelContribute = () => {
    setIsLinkStarted(true);
  };
  return (
    <div className='flex gap-40'>
      <div>
      <NavBar />
      </div>
      
      {isLinkStarted ? (
          <MobileCam />
        ) : (

      
      <div className='flex flex-col gap-[5rem] justify-center font-serif'>
      <div className=' text-gray-300 felx flex-col  bg-opacity-70 p-4 h-[13rem] w-[50rem] justify-around rounded-2xl' style={{backgroundColor: "#06081f "}} data-aos="zoom-in">
      <label htmlFor='input-link' className=' p-2 text-3xl '>Join a connection and contribute your camera</label>
      <div className='pt-[1.5rem] pl-[2rem]'>
        <input id ='input-link'className='rounded-full bg-gray-800 bg-opacity-50 h-[3rem] w-[28rem]'type ="text" placeholder='  Link code'/>
        <button className='bg-indigo-950  rounded-md ml-[2rem] h-[2.5rem] w-[6rem] text-lg hover:bg-transparent hover:scale-90' onClick={handelContribute}>link</button>
      </div>
      </div>
      <div className=' text-gray-300 felx flex-col gap-[2rem] bg-cyan-950 bg-opacity-70 p-4 h-[13rem] w-[50rem] justify-around rounded-2xl' style={{backgroundColor: "#06081f "}} data-aos="zoom-in-up">
        <h1 className='p-2 text-3xl '>Start a link to connect and manage cameras</h1>
        <button className= 'bg-indigo-950 text-xl text-gray-300 rounded-full mt-[1.5rem] ml-[15rem] h-[3rem] w-[10rem] hover:bg-transparent hover:scale-90'>Start a link</button>
      </div>
    </div>
    )}
    </div>
  )
}

export default CamLinkPage
