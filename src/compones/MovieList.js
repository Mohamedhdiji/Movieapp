import React from 'react'
import MovieCard from './MovieCard'

  const  MovieList = ({movies,deleteMovie}) => {
    console.log(movies)
  return (
    <div className='movie-list'>
        {
            movies.map((movie,i)=><MovieCard theMovie={movie} key={i} deleteMovie={deleteMovie}/> )
        }
    </div>
  )
}

export default MovieList