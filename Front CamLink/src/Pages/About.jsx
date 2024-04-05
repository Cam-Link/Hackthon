import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import Face3TwoToneIcon from '@mui/icons-material/Face3TwoTone';
import Face6TwoToneIcon from '@mui/icons-material/Face6TwoTone';
import { Stack, TextField } from '@mui/material'

function About() {
  return (
    <div className=' app flex flex-col justify-between gap-11 ml-[2rem]'>
      <div className=''>
        
      </div>
  <header className='ml-[2rem] text-3xl font-serif'>
    <h1>About Us</h1>
  </header>

  <section id="team" className=' ml-[1rem] font-serif bg-blue-200 rounded-lg shadow-lg p-4'>
    <h2 className='text-bold text-xl italic '>Meet Our Team</h2>
    <ul className="space-y-4 text-xl">
      <li>
        <h3><Face6TwoToneIcon/>  Abenezer Mesfin (React Developer)</h3>
        <p className='text-base italic'><a href="mailto:abenabu388@gmail.com"><EmailIcon /> abenabu388@gmail.com</a></p>
      </li>
      <li>
        <h3><Face6TwoToneIcon/>  Anteneh Addisu (React Developer)</h3>
        <p className='text-base italic'><a href="mailto:anteaddisue20@gmail.com"><EmailIcon /> anteaddisue20@gmail.com</a></p>
      </li>
      <li>
        <h3><Face6TwoToneIcon/>  Abenezer Mesfin (React Developer)</h3>
        <p className='text-base italic'><a href="mailto:abenabu388@gmail.com"><EmailIcon /> abenabu388@gmail.com</a></p>
      </li>
      <li>
        <h3><Face6TwoToneIcon/>  Elias Derbew (React Developer)</h3>
        <p className='text-base italic'><a href="mailto:eliasderbew1@gmail.com"><EmailIcon /> eliasderbew1@gmail.com</a></p>
      </li>
      <li>
        <h3><Face3TwoToneIcon/>  Maedot Amha (React Developer)</h3>
        <p className='text-base italic'><a href="mailto:maedotamha@gmail.com"><EmailIcon /> maedotamha@gmail.com</a></p>
      </li>
      <li>
        <h3><Face3TwoToneIcon/>  Tsion Getachew (React Developer)</h3>
        <p className='text-base italic'><a href="mailto:tsiiiarmy@gmail.com"><EmailIcon /> tsiiiarmy@gmail.com</a></p>
      </li>
      <li>
        <h3><Face6TwoToneIcon/>  Anteneh Getnet (React Developer)</h3>
        <p className='text-base italic'><a href="mailto:antenehgetnet09@gmail.com"><EmailIcon /> antenehgetnet09@gmail.com</a></p>
      </li>
      <li>
        <h3><Face6TwoToneIcon/>  Hanif Siraj (Django Developer)</h3>
        <p className='text-base italic'><a href="mailto:hnfsrj@gmail.com"><EmailIcon /> hnfsrj@gmail.com</a></p>
      </li>
      <li>
        <h3><Face6TwoToneIcon/>  Sena Mekonin (Django Developer)</h3>
        <p className='text-base italic'><a href="mailto:senamekonin19@gmail.com"><EmailIcon /> senamekonin19@gmail.com</a></p>
      </li>
      <li>
        <h3><Face3TwoToneIcon/>  Dagmawit Negash (Django Developer)</h3>
        <p className='text-base italic'><a href="mailto:21dagmawitnegash@gmail.com"> <EmailIcon /> 21dagmawitnegash@gmail.com</a></p>
      </li>
    </ul>
  </section>

  <section id="description" >
    <h2>About CamLink</h2>
    <p>CamLink is a revolutionary project that aims to transform the way we capture, share, and preserve moments. By providing users with seamless access to their cameras on a website, CamLink empowers individuals to effortlessly capture and save moments that matter. In today's fast-paced world, where certain events and phenomena are fleeting, CamLink ensures that every significant moment is captured and preserved for posterity.</p>
    <p>CamLink not only enables users to capture moments but also serves as a powerful tool for storing information. Whether it's recording lectures, documenting events, or archiving memories, CamLink provides a secure and accessible platform for storing valuable information.</p>
  </section>
  <h1> User Feedback</h1>
  <Stack direction = 'row' spacing ={4}>
    <TextField label ='Name' variant = 'standard' color='secondary'/>
    <TextField label ='Email' variant = 'standard' type ='email' color='secondary'/>
    <TextField label ='Message' variant ='standard' color='secondary' />
  </Stack>
  <button>Send</button>
          
  <div className="text-sm text-gray-500 ">
  <input type="checkbox" name='' id='' />
  <p> By proceeding, I accept the Terms of Service and Privacy Policy,
             and consent to receive updates and marketing communications. </p>
  </div>
  <footer>
    <p>&copy; 2024 CamLink. All rights reserved.</p>
  </footer>




    </div>
  )
}

export default About
