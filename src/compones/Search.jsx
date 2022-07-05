import React from 'react'
import StartRating from './StartRating'

const Search = ({rating , SearchText,handelRating,searchText}) => {
  return (
    <div>
        <form>
            <input type="text" placeholder='Movie name ...'/>
        </form>
            <StartRating rating={rating} handelRating={handelRating} value={SearchText} onChange={e=>searchText(e.target.value)} />
    </div>
  )
}

export default Search