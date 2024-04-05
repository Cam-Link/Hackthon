import React from 'react'



function Footer() {
  return (
    <div className=' text-white  text-center p-5'>

      <div className='flex space-x-4'>
        <div>
          <img className='h-11 hover:scale-125 duration-300' src="./Images/telegram.jpg" alt="" />
        </div>
        <div>
          <img className='h-11 hover:scale-125 duration-300 rounded-full' src="./Images/instagram.jpg" alt="" />
        </div>
        <div>
          <img className='h-11 hover:scale-125 duration-300' src="./Images/github.jpg" alt="" />
        </div>
        <div>
          <img className='h-11 hover:scale-125 duration-300 rounded-full' src="./Images/ds.jpg" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Footer
