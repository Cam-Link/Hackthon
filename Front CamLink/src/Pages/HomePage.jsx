import React from 'react'
import NavBar from './NavBar'
import {useEffect, useState} from 'react'


function HomePage() {

   const [movies, setMovies] = useState([])

  useEffect(()=> {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=97f7490422c2cfab9e2f1045e6f6b524')
    .then(res => res.json())
    .then(json => setMovies(json.results))
    .catch(error => console.log('fetching error: ', error))
  },[])
  return (
    <div className='flex gap-40'>

      <div>
      <NavBar/>
      </div>




      <div className='mr-11'>
        <h1 className='font-bold text-4xl text-white'>Edit the Home page</h1>

          <div className='grid grid-cols-7 gap-2'>

        {
          movies.map((movie)=>(
            <div key={movie.id}>
             <img className='h-[10rem] w-[10rem]'
             src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
            </div>
          ))
        }
          </div>

      </div>




    </div>
  )
}

export default HomePage
