import React from "react";

const Search = ({search, setSearch})=>{



  return (
    <div className='search-container'>
      <form className='search-form'>
        <input className='search-input'/>
        <button type='submit' className='search-btn'>Get Weather</button>
      </form>
    </div>
  )
}

export default Search;