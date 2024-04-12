import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import Face6TwoToneIcon from '@mui/icons-material/Face6TwoTone';
import AdsClickTwoToneIcon from '@mui/icons-material/AdsClickTwoTone';
import AutoGraphTwoToneIcon from '@mui/icons-material/AutoGraphTwoTone';
import ExtensionTwoToneIcon from '@mui/icons-material/ExtensionTwoTone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Stack, TextField } from '@mui/material';
import video from '../assets/white.mp4';
import 'aos/dist/aos.css';


function About() {

  return (
    <div className=' app flex flex-col justify-between gap-11 ml-[2rem]font-serif '>
      <div className=' flex flex-row hover:transform scale-80'>
        <video src = {video} autoPlay loop className='w-30%'/>
        <div className='flex flex-col gap-[3rem]'>
        <h2 className='text-4xl'>About CamLink</h2> 
        <p className='text-2xl italic mr-[2rem]'>CamLink is a revolutionary project that aims to transform the way we capture,
            share, and preserve moments. By providing users with seamless access to their cameras on a website,
              CamLink empowers individuals to effortlessly capture and save moments that matter.<br/><br/> In today's fast-paced
              world, where certain events and phenomena are fleeting, CamLink ensures that every significant moment is captured
                and preserved for posterity.</p>
        </div>
      </div>
      <header className='ml-[2rem] text-3xl '>
        <h1 className='mb-[2rem] text-5xl font-extrabold '>About Us</h1>
        <div className='flex flex-row gap-[2rem] '>
          <div >
            <ExtensionTwoToneIcon sx={{ fontSize: 200 }} color="secondary"/>
            <h2 className='font-bold m-[1rem] text-4xl'> Purpose</h2>
            <p className='text-gray-800 text-xl'>Our purpose is to redefine the way individuals capture, share,
               and preserve meaningful moments. We aim to provide a seamless platform that 
               empowers people to effortlessly immortalize the experiences that hold significance 
               in their lives.</p>
          </div>
          <div>
          <AdsClickTwoToneIcon sx={{ fontSize: 200 }} color="secondary"/>
            <h2 className=' font-bold m-[1rem] text-4xl'> Goal</h2>
            <p className='text-gray-800 text-xl '>Our goal is to be the catalyst for a transformative shift in how society embraces and cherishes moments.
               By offering accessible camera integration on a website, we enable individuals to capture and safeguard the 
               memories that truly matter.</p>
          </div>
          <div>
            <AutoGraphTwoToneIcon sx={{ fontSize: 200 }} color="secondary"/>
            <h2 className='font-bold m-[1rem] text-4xl'> Vision</h2>
            <p className='text-gray-800 text-xl '>Our vision is to become the leading innovator in revolutionizing the way people connect with their memories.
               We aspire to create a future where every significant moment is not only preserved but also effortlessly shared,
                enriching the lives of individuals worldwide.</p>
          </div>
        </div>
      </header>

<div className="">
     <h1 className='text-center font-serif font-bold text-4xl'>React Teams</h1>

  <section className= 'mx-auto w-fit p-11 flex flex-col md:flex-row justify-around space-x-4'>
    
     {/* preson one */}
     <div className='h-fit group'>
      <div className='relative overflow-hidden'>
      <img src="Images/Image/ella.JPG" alt="" className='w-full h-[25rem]' />
      
        <div className='absolute h-full w-full bg-black/20 flex items-end justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer'>
        {/*  */}

        <li className='mb-4 px-3 bg-gradient-to-b  via-blue-500 from-transparent'>
        <h3 className='font-bold text-[20px]'><Face6TwoToneIcon/>Elias Derbew</h3>
        <h3 style={{ fontFamily: 'Caveat' }} className='font-bold text-[15.5px]'>
          Addis Ababa Science and Technology University's second-year electrical and computer engineering student and working as a front-end developer</h3>

        <div className='text-base italic flex gap-[2rem]'>
          <a className='hover:scale-150 duration-300' href="mailto:abenabu388@gmail.com"><EmailIcon /> </a>
          <a className='hover:scale-150 duration-300' href = " " ><GitHubIcon/></a>
          <a className='hover:scale-150 duration-300' href = " " ><LinkedInIcon/></a>
          <a className='hover:scale-150 duration-300' href = " " ><TelegramIcon/></a></div>
             </li>

        </div>
      </div>
    </div>
     {/* preson two */}
    <div className='h-fit group'>
      <div className='relative overflow-hidden'>
      <img src="Images/Image/ella.JPG" alt="" className='w-full h-[25rem]' />
      
        <div className='absolute h-full w-full bg-black/20 flex items-end justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer'>
        {/*  */}

        <li className='mb-4 px-3 bg-gradient-to-b  via-blue-500 from-transparent'>
        <h3 className='font-bold text-[20px]'><Face6TwoToneIcon/>Elias Derbew</h3>
        <h3 style={{ fontFamily: 'Caveat' }} className='font-bold text-[15.5px]'>
          Addis Ababa Science and Technology University's second-year electrical and computer engineering student and working as a front-end developer</h3>

        <div className='text-base italic flex gap-[2rem]'>
          <a className='hover:scale-150 duration-300' href="mailto:abenabu388@gmail.com"><EmailIcon /> </a>
          <a className='hover:scale-150 duration-300' href = " " ><GitHubIcon/></a>
          <a className='hover:scale-150 duration-300' href = " " ><LinkedInIcon/></a>
          <a className='hover:scale-150 duration-300' href = " " ><TelegramIcon/></a></div>
             </li>

        </div>
      </div>
    </div>
     {/* preson three */}
    <div className=' h-fit group'>
      <div className='relative overflow-hidden'>
      <img src="Images/Image/ella.JPG" alt="" className='w-full h-[25rem]' />
      
        <div className='absolute h-full w-full bg-black/20 flex items-end justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer'>
        {/*  */}

        <li className='mb-4 px-3 bg-gradient-to-b  via-blue-500 from-transparent'>
        <h3 className='font-bold text-[20px]'><Face6TwoToneIcon/>Elias Derbew</h3>
        <h3 style={{ fontFamily: 'Caveat' }} className='font-bold text-[15.5px]'>
          Addis Ababa Science and Technology University's second-year electrical and computer engineering student and working as a front-end developer</h3>

        <div className='text-base italic flex gap-[2rem]'>
          <a className='hover:scale-150 duration-300' href="mailto:abenabu388@gmail.com"><EmailIcon /> </a>
          <a className='hover:scale-150 duration-300' href = " " ><GitHubIcon/></a>
          <a className='hover:scale-150 duration-300' href = " " ><LinkedInIcon/></a>
          <a className='hover:scale-150 duration-300' href = " " ><TelegramIcon/></a></div>
             </li>

        </div>
      </div>
    </div>

    {/* <section className= 'mx-auto w-fit p-11 flex flex-col md:flex-row justify-around space-x-4'>
      
    </section> */}
    
 </section>

                {/* <h1 className='text-center font-serif font-bold text-4xl'>Django Teams</h1> */}

<section className= 'mx-auto w-fit p-11 flex flex-col md:flex-row justify-around space-x-4'>
                   {/* person four */}
               <div className='h-fit group'>
               <div className='relative overflow-hidden'>
               <img src="Images/Image/ella.JPG" alt="" className='w-full h-[25rem]' />
      
        <div className='absolute h-full w-full bg-black/20 flex items-end justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer'>
        {/*  */}

        <li className='mb-4 px-3 bg-gradient-to-b  via-blue-500 from-transparent'>
        <h3 className='font-bold text-[20px]'><Face6TwoToneIcon/>Elias Derbew</h3>
        <h3 style={{ fontFamily: 'Caveat' }} className='font-bold text-[15.5px]'>
          Addis Ababa Science and Technology University's second-year electrical and computer engineering student and working as a front-end developer</h3>

        <div className='text-base italic flex gap-[2rem]'>
          <a className='hover:scale-150 duration-300' href="mailto:abenabu388@gmail.com"><EmailIcon /> </a>
          <a className='hover:scale-150 duration-300' href = " " ><GitHubIcon/></a>
          <a className='hover:scale-150 duration-300' href = " " ><LinkedInIcon/></a>
          <a className='hover:scale-150 duration-300' href = " " ><TelegramIcon/></a></div>
             </li>

        </div>
      </div>
    </div>

    {/* person five */}
               <div className='h-fit group'>
      <div className='relative overflow-hidden'>
      <img src="Images/Image/ella.JPG" alt="" className='w-full h-[25rem]' />
      
        <div className='absolute h-full w-full bg-black/20 flex items-end justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer'>
        {/*  */}

        <li className='mb-4 px-3 bg-gradient-to-b  via-blue-500 from-transparent'>
        <h3 className='font-bold text-[20px]'><Face6TwoToneIcon/>Elias Derbew</h3>
        <h3 style={{ fontFamily: 'Caveat' }} className='font-bold text-[15.5px]'>
          Addis Ababa Science and Technology University's second-year electrical and computer engineering student and working as a front-end developer</h3>

        <div className='text-base italic flex gap-[2rem]'>
          <a className='hover:scale-150 duration-300' href="mailto:abenabu388@gmail.com"><EmailIcon /> </a>
          <a className='hover:scale-150 duration-300' href = " " ><GitHubIcon/></a>
          <a className='hover:scale-150 duration-300' href = " " ><LinkedInIcon/></a>
          <a className='hover:scale-150 duration-300' href = " " ><TelegramIcon/></a></div>
             </li>

        </div>
      </div>
    </div>


               </section>

                 <h1 className='text-center font-serif font-bold text-4xl'>Django Teams</h1>

<section className= 'mx-auto w-fit p-11 flex flex-col md:flex-row justify-around space-x-4'>
                   {/* person four */}
               <div className='h-fit group'>
               <div className='relative overflow-hidden'>
               <img src="Images/Image/ella.JPG" alt="" className='w-full h-[25rem]' />
      
        <div className='absolute h-full w-full bg-black/20 flex items-end justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer'>
        {/*  */}

        <li className='mb-4 px-3 bg-gradient-to-b  via-blue-500 from-transparent'>
        <h3 className='font-bold text-[20px]'><Face6TwoToneIcon/>Elias Derbew</h3>
        <h3 style={{ fontFamily: 'Caveat' }} className='font-bold text-[15.5px]'>
          Addis Ababa Science and Technology University's second-year electrical and computer engineering student and working as a front-end developer</h3>

        <div className='text-base italic flex gap-[2rem]'>
          <a className='hover:scale-150 duration-300' href="mailto:abenabu388@gmail.com"><EmailIcon /> </a>
          <a className='hover:scale-150 duration-300' href = " " ><GitHubIcon/></a>
          <a className='hover:scale-150 duration-300' href = " " ><LinkedInIcon/></a>
          <a className='hover:scale-150 duration-300' href = " " ><TelegramIcon/></a></div>
             </li>

        </div>
      </div>
    </div>

    {/* person five */}
               <div className='h-fit group'>
      <div className='relative overflow-hidden'>
      <img src="Images/Image/ella.JPG" alt="" className='w-full h-[25rem]' />
      
        <div className='absolute h-full w-full bg-black/20 flex items-end justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer'>
        {/*  */}

        <li className='mb-4 px-3 bg-gradient-to-b  via-blue-500 from-transparent'>
        <h3 className='font-bold text-[20px]'><Face6TwoToneIcon/>Elias Derbew</h3>
        <h3 style={{ fontFamily: 'Caveat' }} className='font-bold text-[15.5px]'>
          Addis Ababa Science and Technology University's second-year electrical and computer engineering student and working as a front-end developer</h3>

        <div className='text-base italic flex gap-[2rem]'>
          <a className='hover:scale-150 duration-300' href="mailto:abenabu388@gmail.com"><EmailIcon /> </a>
          <a className='hover:scale-150 duration-300' href = " " ><GitHubIcon/></a>
          <a className='hover:scale-150 duration-300' href = " " ><LinkedInIcon/></a>
          <a className='hover:scale-150 duration-300' href = " " ><TelegramIcon/></a></div>
             </li>

        </div>
      </div>
    </div>
               <div className='h-fit group'>
      <div className='relative overflow-hidden'>
      <img src="Images/Image/ella.JPG" alt="" className='w-full h-[25rem]' />
      
        <div className='absolute h-full w-full bg-black/20 flex items-end justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer'>
        {/*  */}

        <li className='mb-4 px-3 bg-gradient-to-b  via-blue-500 from-transparent'>
        <h3 className='font-bold text-[20px]'><Face6TwoToneIcon/>Elias Derbew</h3>
        <h3 style={{ fontFamily: 'Caveat' }} className='font-bold text-[15.5px]'>
          Addis Ababa Science and Technology University's second-year electrical and computer engineering student and working as a front-end developer</h3>

        <div className='text-base italic flex gap-[2rem]'>
          <a className='hover:scale-150 duration-300' href="mailto:abenabu388@gmail.com"><EmailIcon /> </a>
          <a className='hover:scale-150 duration-300' href = " " ><GitHubIcon/></a>
          <a className='hover:scale-150 duration-300' href = " " ><LinkedInIcon/></a>
          <a className='hover:scale-150 duration-300' href = " " ><TelegramIcon/></a></div>
             </li>

        </div>
      </div>
    </div>

        
               </section>


  </div>




 <div className='m-[3rem] flex flex-col '>
  <h1 className='mb-[2rem]'> User Feedback</h1>
  <Stack direction = 'row' spacing ={4}>
    <TextField label ='Name' variant = 'standard' color='secondary'/>
    <TextField label ='Email' variant = 'standard' type ='email' color='secondary'/>
    <TextField label ='Message' variant ='standard' color='secondary' />
  </Stack>
  <button className='bg-blue-200 hover:bg-blue-600 rounded-2xl w-[10rem] ml-[20rem] mt-[2rem]'>Send</button>
          
  <div className="text-sm text-gray-500 flex">

  <input className='m-1' type="checkbox" name='' id='' />
  <p> By proceeding, I accept the Terms of Service and Privacy Policy,
             and consent to receive updates and marketing communications. </p>
  </div>
  </div>
  
    </div>
  )
}

export default About
