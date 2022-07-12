import React from 'react'
import StartRating from './StartRating'

const Search = ({rating , SearchText,handelRating,searchText}) => {
  return (
    <div>
        <form>
            <input type="text" placeholder='Movie name ...' value={SearchText} onChange={e=>searchText(e.target.value)} />
        </form>
            <StartRating rating={rating} handelRating={handelRating} />
    </div>
  )
}

export default Search