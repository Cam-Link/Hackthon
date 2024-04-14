import React from 'react'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import NavBar from './NavBar'
import VisibilityIcon from '@mui/icons-material/Visibility';




function DetailPage() {

  const params = useParams()
  const[movie, setMovie] = useState({ })
  const [movies, setMovies] = useState([])

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=97f7490422c2cfab9e2f1045e6f6b524`)    
    .then(res => res.json())
    .then(json => setMovie(json))
    .catch(error => console.log('fetching error: ', error))
  },[params.id])

  useEffect(()=> {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=97f7490422c2cfab9e2f1045e6f6b524')
    .then(res => res.json())
    .then(json => setMovies(json.results))
    .catch(error => console.log('fetching error: ', error))
  },[])
 
  return (
    <div className='flex justify-between mr-11 z-10'>

   <NavBar/>

     <div>
{
  <img className='h-[27rem] w-[50rem] mt-7 rounded-lg'
  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
}
<div className='flex justify-between m-4'>

    <div>example@gmail.com</div>
    <div className='mr-5'>
      <VisibilityIcon/> 9
      
      </div>
</div>

     </div>

     <div className='h-[80vh] hide-scrollbar overflow-y-auto'>
      <h1 className='font-bold text-3xl font-serif text-indigo-800'>Other Events</h1>
          < div className='h-[100vh] hide-scrollbar overflow-y-auto'>

      {

    

          movies.map((movie)=>(
            <div key={movie.id}>
      <Link to={`/Home/${movie.id}`}>
        <div className='m-4'>
             <img className='h-[10rem] w-[10rem] rounded-lg'
             src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
        </div>
      </Link>
           </div>
          ))
      }
          </div>

     </div>
    </div>
  )
}

export default DetailPage
