import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { moviesDate } from './Data';
import  MovieList  from './compones/MovieList'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import AddNewMovie from './compones/AddNewMovie';

import Search from './compones/Search';
import Info from './compones/Info';

const App = () => {
  const [list, setList] = useState(moviesDate)
  // console.log(list)
  const [searchText, setSarchText] = useState("")
  const [rating, setRating] = useState("")
  const handelText=(y)=>{
    setSarchText(y)
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
      <Router>
        <Routes>
          <Route path='/'element={<MovieList movies={list.filter(movie=>movie.name.includes(searchText))} deleteMovie={handelDelete}/>}/>
          <Route path='/info/:id' element={<Info monji={list}/>}/>
        </Routes>
      </Router>
      <Search rating={rating} searchText={handelText} handelRating={handelRating}/>
      
      <AddNewMovie addNew={handelAdd}/>
    </div>
  );
}

export default App;
