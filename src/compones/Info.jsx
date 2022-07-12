import React from 'react'
import { Card ,  } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
const Info = ({monji}) => {
  const{id}=useParams()
  const movie=monji.find(el=>el.id==id)
  return (
    <div>
    <h1>{movie.name}</h1>

    </div>
  )
}

export default Info