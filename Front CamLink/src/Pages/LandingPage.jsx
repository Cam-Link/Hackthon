import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Container, Paper, Box, Button } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';


function LandingPage() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className="flex justify-evenly mb-0 mt-11" data-aos='fade-up'>
        <div className='w-[45rem]'>
          <h1 className='font-bold text-4xl p-2 animate-bounce text-red-600' style={{ fontFamily: 'monoton' }}>CamLink</h1>
          <p className='font-serif font-bold text-2xl'>"Empower Your Presentations, Expand Your Perspectives"</p>
          <p className='p-4' style={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: '20px' }}>Introducing a versatile solution tailored for seamless presentations and immersive event experiences. Our innovative platform offers two distinct options: first, facilitating screen sharing with synchronized audio for seamless sessions even without a projector; second, a multi-camera streaming service providing viewers with diverse perspectives for an enriched event viewing experience. Elevate your presentations and events with our comprehensive solution.</p>
          <Link to='/Home'>
            <button className='bg-blue-500 rounded-lg text-white text-xl p-2 font-serif m-3 w-60 hover:bg-blue-600 active:bg-blue-700 hover:scale-110 duration-300' variant="contained" disableElevation>Go to Livestream</button>
          </Link>
        </div>
        <div>
          <img className='h-[30rem] w-[40rem]' src="./Images/Lp.jpg" alt="" />
        </div>
      </div>


      <h1 className='text-center font-bold text-4xl mt-[10rem] text-blue-700' data-aos='fade-up'>Our Mission</h1>


      <div className='flex flex-col md:flex-row gap-11 justify-evenly m-11 mr-[2.5rem] ml-[2.5rem]'>
        <div data-aos='fade-right'>
          <h1 className='font-bold pb-2 text-xl' style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '20px' }}>Facilitating Seamless Presentations Without Projectors:</h1>
          <p style={{ fontFamily: 'Poppins' }}>One aim is to provide a solution for presentations that do not rely on traditional projectors. By offering screen sharing with synchronized audio, the aim is to ensure that sessions can proceed smoothly even in the absence of a projector. This emphasizes the versatility and adaptability of the platform to different presentation environments.</p>
          <img className='w-[60rem]' src='./Images/event2.png' alt='' />
        </div>
        <div data-aos='zoom-in'>
          <h1 className='font-bold text-xl pb-2' style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '20px' }}>Enhancing Event Viewing Experience with Multiple Camera Streams:</h1>
          <p style={{ fontFamily: 'Poppins', fontWeight: '400' }}>Another aim is to enrich the experience of event viewers by offering multiple camera streams. By providing viewers with diverse perspectives through a multi-camera streaming service, the aim is to create a more immersive and engaging viewing experience. This feature enhances the overall quality and enjoyment of the event for the audience.</p>
          <img className='w-[60rem]' src='./Images/events.png' alt='' />
        </div>
        <div data-aos='fade-left'>
          <h1 className='font-bold text-xl pb-2' style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '20px' }}>Promoting Seamless and Engaging Sessions:</h1>
          <p style={{ fontFamily: 'Poppins', fontWeight: '400' }}>Overall, the overarching aim is to promote seamless and engaging sessions for both presenters and viewers. Whether it's through screen sharing for presentations or multiple camera streams for events, the aim is to ensure that sessions run smoothly while offering a high-quality and immersive experience for all participants.</p>
          <img className='w-[60rem]' src="./Images/LandingPage.jpg" alt="" />
        </div>
      </div>



      <Container data-aos='zoom-in'>
        <Typography variant='h1' sx={{ my: 4, textAlign: 'center', color: 'primary.main' }}>Services</Typography>
        <Typography variant='h2'>Overview</Typography>
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
              <Typography variant='h3' sx={{ m: 3 }}>
                Screen Sharing
              </Typography>
              <Typography sx={{ mt: 3, }}>
                We offer screen sharing with synchronized audio, catering to scenarios where traditional projection equipment might be unavailable. This functionality facilitates remote meetings, educational lectures, and collaborative work, enhancing engagement and comprehension for participants. Its flexibility and accessibility enable usage from any location with an internet connection, while its cost-effectiveness eliminates the need for specialized hardware like projectors, making it suitable for various professional and educational settings.
              </Typography>
              <Button variant='contained' sx={{ mt: 2 }}>Learn More</Button>
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
              <Typography variant='h3' sx={{ m: 3 }}>
                Mulitple Camera Linking
              </Typography>
              <Typography sx={{ mt: 3, }}>
                The camera linking service provides a multiple camera streaming option, allowing streams from various cameras to be sent to the main streamer. This feature enhances event viewing experiences by offering viewers multiple perspectives, enabling them to switch between camera angles for a more immersive and dynamic viewing experience.
              </Typography>
              <Button variant='contained' sx={{ mt: 2 }}>Learn More</Button>
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
              <Typography variant='h3' sx={{ m: 3 }}>
                Provide Recorded Videos
              </Typography>
              <Typography sx={{ mt: 3, }}>
                The service enables users to access recorded videos directly from our website. This straightforward functionality allows users to conveniently retrieve past presentations or events that have been recorded and stored on our platform. Whether for review, reference, or sharing with others, users can easily locate and watch recorded videos at their own convenience, eliminating the need for external storage or complex retrieval processes.
              </Typography>
              <Button variant='contained' sx={{ mt: 2 }}>Learn More</Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    </div>
  );
}

export default LandingPage;
