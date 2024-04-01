import React from 'react';
import { Link } from 'react-router-dom';
import Themes from './Themes'



function Header() {


  
  return (
    <div className='text-center p-5 flex justify-between'>
      <div>
        <Link to='/'>
          <img className='h-[5rem] hover:scale-110 duration-300 rounded-[30px]' src="./Images/camlink.jpg" alt="" />
        </Link>
      </div>
      <div className='flex space-x-4 text-[1.2rem]'>

        <div>
          <Themes />
        </div>
        <Link to='/About'>
          <div>
            <h1 className='hover:scale-110 duration-300'>About us</h1>
          </div>
        </Link>
        <Link to='/SignUp'>
          <div>
            <h1 className='hover:scale-110 duration-300'>Sign Up</h1>
          </div>
        </Link>
        <Link to='/LogIn'>
          <div>
            <h1 className='hover:scale-110 duration-300'>LogIn</h1>
          </div>
        </Link>
        <div>
         
        </div>
      </div>
    </div>
  );
}

export default Header;
