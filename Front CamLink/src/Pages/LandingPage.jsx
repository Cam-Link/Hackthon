import React, {useEffect} from 'react';
import { Typography, Container, Paper, Box, Button } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Background from '../assets/background.mp4'
import Back from '../assets/back.mp4'
import Back3 from '../assets/back3.mp4'
import {Link} from 'react-router-dom'



function LandingPage() {

  useEffect(()=>{
    AOS.init({ duration: 2700})
  }, [])

  return (

    <div className='bg-blur '>
        <div className='overlay'> </div>

      <video className='backvid ' src={Background} autoPlay loop muted style={{marginBottom:'150px'}}  />

      <div className='content flex justify-evenly'>
        <div className='w-[30%]' >
            <h1  className='font-bold text-4xl p-2 animate-bounce text--900 text-indigo-500' style={{ fontFamily: 'monoton' }}>CamLink</h1>
            <p className='p-4 text-white '>Introducing a versatile solution tailored for seamless presentations and immersive event experiences. Our innovative platform offers two distinct options: first, facilitating screen sharing with synchronized audio for seamless sessions even without a projector; second, a multi-camera streaming service providing viewers with diverse perspectives for an enriched event viewing experience. Elevate your presentations and events with our comprehensive solution.</p>
        </div>

          <div className='w-[40%]'>
            <h1 className='p-11 text-white'>Unlock a world of exclusive benefits by creating your account today!
            </h1>

            <div className='flex justify-around'>

              <Link to = '/LogIn'>
              <div><button className='bg-blue-600 text-white rounded-lg p-2 w-[10rem] transition-all hover:bg-indigo-800 duration-350 hover:scale-125'>Sign In</button></div>
              </Link>

              <Link to='/SignUp'>
              <div><button className='bg-blue-600 text-white rounded-lg p-2 w-[10rem] transition-all hover:bg-indigo-800 duration-350 hover:scale-125'>Register</button></div>
              </Link>
            </div>

          </div>
      </div>

      <div>
      <h1 className='text-center font-bold text-4xl mt-[10rem] text-blue-600' data-aos='fade-up'>Our Mission</h1>


     <div className='flex flex-col md:flex-row gap-11 justify-evenly m-[5rem]'>

  <div data-aos='fade-right'>
    <h1 className='font-bold text-xl pb-2 text-white'>Facilitating Seamless Presentations Without Projectors:</h1>
    <p className='text-gray-300' style={{ fontFamily: 'Poppins', fontWeight: '400' }}>One aim is to provide a solution for presentations that do not rely on traditional projectors. By offering screen sharing with synchronized audio, the aim is to ensure that sessions can proceed smoothly even in the absence of a projector. This emphasizes the versatility and adaptability of the platform to different presentation environments.</p>
    <img className='w-[20rem]' src='./Images/event2.png' alt='' />
  </div>
  <div data-aos='zoom-in'>
    <h1 className='font-bold text-xl pb-2 text-white'>Enhancing Event Viewing Experience with Multiple Camera Streams:</h1>

    <p className='text-gray-300' style={{ fontFamily: 'Poppins', fontWeight: '400' }}>Another aim is to enrich the experience of event viewers by offering multiple camera streams. By providing viewers with diverse perspectives through a multi-camera streaming service, the aim is to create a more immersive and engaging viewing experience. This feature enhances the overall quality and enjoyment of the event for the audience.</p>
    <img className='w-[20rem]' src='./Images/events.png' alt='' />
  </div>
  <div data-aos='fade-left'>
    <h1 className='font-bold text-xl pb-2 text-white'>Promoting Seamless and Engaging Sessions:</h1>
    <p className='text-gray-300' style={{ fontFamily: 'Poppins', fontWeight: '400' }}>Overall, the overarching aim is to promote seamless and engaging sessions for both presenters and viewers. Whether it's through screen sharing for presentations or multiple camera streams for events, the aim is to ensure that sessions run smoothly while offering a high-quality and immersive experience for all participants.</p>
    <img className='w-[20rem]' src="./Images/LandingPage.jpg" alt="" />
  </div>
</div>
               </div>

         <div>
          <h1 className='font-bold text-4xl text-center mt-[5rem] text-blue-600'>What we offer</h1>
         </div>

          <div className='m-[5rem] flex justify-evenly gap-[4rem] mr-[5rem] ml-[5rem]'> 
            <div className='w-[40%]' data-aos='zoom-in'>
                <h1 className='font-serif font-bold text-4xl text-center text-white'>Captivate Your Audience with Multi-Camera Flexibility.</h1>
                <p className='p-4 text-gray-300'>Experience the power of live streaming! Our innovative platform allows hosts to seamlessly switch between multiple cameras, giving them the flexibility to choose the perfect angle for their audience's viewing pleasure. Elevate your broadcasts with ease and captivate your viewers with every moment</p>
            </div>
                      
            <div data-aos='flip-left'>
              <video className='h-[25rem] w-[50rem] object-cover rounded-lg' src={Back} autoPlay muted loop></video>
            </div>
          </div>
               

              



               <div className='flex justify-evenly ml-[5rem] mr-[5rem] gap-x-40 mt-[10rem]'>
                <div className='h-[25rem] w-[30rem]'>
                       <video className='rounded-lg' data-aos='fade-right' src={Back3} autoPlay muted loop />
                </div>

                <div className='w-[30%]' data-aos='flip-left'>
                  <h1 className='font-bold font-serif text-4xl text-center text-blue-500'> Your Story, Your View!</h1>
                  <p className='text-gray-300 font-serif'>Empower your audience to become directors of their own experiences with our innovative multi-camera streaming platform. From intimate gatherings to grand celebrations, every angle is captured, ensuring no detail is missed. With the ability to record events from their unique perspectives, individuals can relive cherished moments in stunning clarity, preserving memories to last a lifetime.</p>
                </div>
               </div>



               <Container data-aos='zoom-in' className=''>
        <Typography variant='h1' sx={{ my: 4, textAlign: 'center', color: 'primary.main', fontFamily:'serif'}}>Services</Typography>
        <Typography variant='h3' className='text-white text-center'>Overview</Typography>
        <Box
          sx={{
            display: 'flex',
            pt: 4,
            justifyContent: 'space-between',
            gap: 4,
            flexDirection: { xs: 'column', md: 'row' }
          }}>
          <Paper elevation={24} sx={{
            width: { xs: 1, md: 320 },
            transition: 'transform 0.5s',
            '&:hover': {
              transform: 'scale(1.1)',
              cursor: 'pointer',
            },
          }}>
            <Box sx={{ m: 2 }}>
              <Typography variant='h4' sx={{ m: 3,color: 'text.primary' }}>
                Screen Sharing
              </Typography>
              <Typography sx={{ mt: 3, color: 'text.primary' }}>
               
                      
We offer synchronized screen sharing and audio, ideal for situations without traditional projectors. It boosts engagement in remote meetings, lectures, and collaboration. Its flexibility allows use from anywhere with internet access, and its cost-effectiveness makes it suitable for various professional and educational settings.

              </Typography>
              <img src="./Images/screensharing.jpg" alt="" />
            </Box>
          </Paper>
          <Paper elevation={24} sx={{
            width: { xs: 1, md: 320 },
            transition: 'transform 0.5s',
            '&:hover': {
              transform: 'scale(1.1)',
              cursor: 'pointer',
            },
          }}>
            <Box sx={{ m: 2 }}>
              <Typography variant='h4' sx={{ m: 3, color: 'text.primary' }}>
                Mulitple Camera Linking
              </Typography>
              <Typography sx={{ mt: 3, color: 'text.primary' }}>
                The camera linking service provides a multiple camera streaming option, allowing streams from various cameras to be sent to the main streamer. This feature enhances event viewing experiences by offering viewers multiple perspectives, enabling them to switch between camera angles for a more immersive and dynamic viewing experience.
              </Typography>
             <img className='w-[10rem] ml-11' src="./Images/cameraLink.jpg" alt="" />
            </Box>
          </Paper>
          <Paper elevation={24} sx={{
            width: { xs: 1, md: 320 },
            transition: 'transform 0.5s',
            '&:hover': {
              transform: 'scale(1.1)',
              cursor: 'pointer',
            },
          }}>
            <Box sx={{ m: 2 }}>
              <Typography variant='h4' sx={{ m: 3, color: 'text.primary' }}>
              Live Streaming
              </Typography>
              <Typography sx={{ mt: 3, color: 'text.primary'}}>
              Capture the essence of every event live, from graduations to tech showcases and concerts. Experience the excitement, engage with speakers, and never miss a beat with our seamless streaming service. Elevate your event experience and connect to the heart of every occasion from anywhere.
              </Typography>
             <img src="./Images/Lp.jpg" alt="" />
            </Box>
          </Paper>
        </Box>
      </Container>
    </div>
  );
}

export default LandingPage;
