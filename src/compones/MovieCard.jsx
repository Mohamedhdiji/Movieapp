import React from 'react'
import StartRating from './StartRating'


    
const MovieCard = ({ theMovie ,deleteMovie}) => {
    console.log(theMovie)
  return (
    <div className='movie-card'>
        <h1 className='name'>{theMovie.name}</h1>
        <img className='img' src={theMovie.img} alt={theMovie.name} />
        <StartRating rating={theMovie.rating}/>
        <h3 className='date'>{theMovie.date}</h3>
        <button onClick={()=>deleteMovie(theMovie.id)} >delete</button>

        
    </div>
  )
}

export default MovieCard