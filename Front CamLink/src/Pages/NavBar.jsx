import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div className='text-white text-xl p-4 flex flex-col justify-start items-start bg-blue-400 w-[15rem] bg-opacity-20 m-1 rounded-lg'>

      <div>


   <Link to='/Home'>

      <h1 className='hover:bg-red-400 p-2 rounded-lg w-[12rem]'>Home</h1>
   </Link>
      </div>

    <div>
<Link to='/CamLink'>

      <h1 className='hover:bg-red-400 p-2 rounded-lg w-[12rem]'>CamLink</h1>
</Link>

   </div>

    <div>
<Link to='/ScreenShare'>

<h1 className='hover:bg-red-400 p-2 rounded-lg w-[12rem]'>Screen Share</h1>
</Link>

    </div>

 <div className='mt-[19rem]'>
  <h1 className='underline'> Log Out</h1>
 </div>

    </div>
  )
}

export default NavBar
