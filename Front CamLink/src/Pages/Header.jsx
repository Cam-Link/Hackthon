import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
  

  return (
    <div className='nav ' >
     <div>
        <img src="./Images/new.jpg" className='w-[7rem] rounded-lg' alt="" />
     </div>

      <div className='flex space-x-4 text-[16px]'>

          <Link to='/Home'>
        <div>
            <h1>Home</h1>
        </div>
          </Link>
           
           <Link to='/About'>
        <div>
           <h1>About</h1>
        </div>
           </Link>

           <Link to='/'>
        <div>
           <h1>Dash Board</h1>
        </div>
           </Link>

        
      </div>

    </div>
  )
}

export default Header
