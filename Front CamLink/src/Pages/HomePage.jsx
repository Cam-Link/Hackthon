import React from 'react'
import NavBar from './NavBar'
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'


function HomePage() {

   const [movies, setMovies] = useState([])

  useEffect(()=> {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=97f7490422c2cfab9e2f1045e6f6b524')
    .then(res => res.json())
    .then(json => setMovies(json.results))
    .catch(error => console.log('fetching error: ', error))
  },[])
 
  return (
<div className='flex gap-[10rem] '>
 <div>
    <NavBar/>
 </div>

 <div className='mr-11 mt-[4rem]'>
    <h1 className='font-bold text-4xl text-white'>On going</h1>
    <div className='grid grid-cols-4 gap-[3rem] shadow rounded-lg '>
      {
        // movies.map((movie) => (
        //   <div key={movie.id} className='shadow rounded-lg transition-all hover:shadow-lg active:shadow-xl'>
        //     <Link to={`/Home/${movie.id}`}>
        //       <div className="relative hover:scale-150 shadow  ">
        //         <img className='h-[10rem] w-[10rem] object-cover rounded-lg' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
        //         <div className="absolute inset-0 bg-blue-100 opacity-0 hover:-2 hover:opacity-50 transition-opacity duration-300"></div>
        //       </div>
        //     </Link>
        //   </div>
        // ))
      }
    </div>
 </div>
</div>
  )
}

export default HomePage
