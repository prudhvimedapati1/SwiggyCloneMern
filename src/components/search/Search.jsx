import React from 'react'
import './search.css'

const Search = () => {
  return (
    <div className='search__container'>
        <form action="" className="search__form">
            <input type="search" placeholder='biriyani...' className='search__input' />
            <button className='search__button' type='Search'>Search</button>
        </form>
        
    </div>
  )
}

export default Search