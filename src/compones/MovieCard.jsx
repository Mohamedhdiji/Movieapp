import React from 'react'
import { Card , Button } from 'react-bootstrap'
import { Link, Route, Router, Routes } from 'react-router-dom'
import StartRating from './StartRating'


    
const MovieCard = ({ theMovie ,deleteMovie}) => {
    console.log(theMovie)
  return (
    <div className='movie-card'>
        {/* <h1 className='name'>{theMovie.name}</h1>
        <img className='img' src={theMovie.img} alt={theMovie.name} />
        <StartRating rating={theMovie.rating}/>
        <h3 className='date'>{theMovie.date}</h3>
        <button onClick={()=>deleteMovie(theMovie.id)} >delete</button> */}
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={theMovie.img}/>
      <Card.Body>
        <Card.Title>{theMovie.name}</Card.Title>
        <Card.Text>
        <StartRating rating={theMovie.rating}/>
        <br />  
        {theMovie.date}
        </Card.Text>
        <button onClick={()=>deleteMovie(theMovie.id)} >delete</button>
        <br />
        <Link to={`/info/${theMovie.id}`}>
        <Button variant="primary">Voir plus</Button>
        </Link>
        
        
      
      </Card.Body>
    </Card>

        
    </div>
  )
}

export default MovieCard