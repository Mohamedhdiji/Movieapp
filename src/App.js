import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { moviesDate } from './Data';
import  MovieList  from './compones/MovieList'

import AddNewMovie from './compones/AddNewMovie';

import Search from './compones/Search';

const App = () => {
  const [list, setList] = useState(moviesDate)
  // console.log(list)
  const [searchText, setsearchText] = useState("")
  const [rating, setRating] = useState("")
  const handelText=(y)=>{
    setsearchText(y)
  }
  const handelRating=(z)=>{
    setRating(z)
  }
  const handelDelete=(movieId)=>{
    setList(list.filter(el=>el.id!==movieId))
  }

  const handelAdd=(newMovie)=>{
    setList([...list,newMovie])
  }
  return (
    <div className="App">
      <Search rating={rating} searchText={searchText} handelRating={handelRating}/>
      <MovieList movies={list.filter(movie=>movie.name.includes(searchText))} deleteMovie={handelDelete}/>
      <AddNewMovie addNew={handelAdd}/>
    </div>
  );
}

export default App;
