import React, {useState} from "react";
import useAxios from "./useAxios";

const Search = ({setSearch})=>{
  const [input, setInput] = useState('')
  const [weather, setWeather] = useState({})
  const {res, err} = useAxios(input);

  const handleSearch = (e)=>{
    e.preventDefault()
    // setSearch(false)
    console.log(res)
    console.log(err)
  }

  const handleInput = (e)=>{
    setInput(e.target.value)
  }

  return (
    <div className='search-container'>
      <form className='search-form' onSubmit={handleSearch}>
        <input
          placeholder='Enter City'
          className='search-input'
          onChange={handleInput}
          value={input}/>
        <button
          type='submit'
          className='search-btn'>
          Get Weather
        </button>
      </form>
    </div>
  )
}

export default Search;