import React from 'react';
import { Link } from 'react-router-dom';



function Header() {


  
  return (
    <div className='text-center flex p-2 bg-gradient bg-gradient-to-b from-black z-10 text-gray-300  to-indigo-950 justify-between '>
      <div>
        <Link to='/'>
          <img className='h-[5rem] hover:scale-110 duration-300 rounded-[30px]' src="./Images/new.png" alt="" />
        </Link>
      </div>
      <div className='flex space-x-4 text-[1.2rem]'>

        <div>
          
        </div>
        
        <Link to='/SignUp'>
          <div>
            <h1 className='hover:scale-110 duration-300 pt-[1rem]'>Sign Up</h1>
          </div>
        </Link>
        <Link to='/Home'>
          <div>
            <h1 className='hover:scale-110 duration-300 pt-[1rem]'>Home</h1>
          </div>
        </Link>
        <div>
         
        </div>
      </div>
    </div>
  );
}

export default Header;
