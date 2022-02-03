import React, {useState} from "react";
import WeatherCard from "./WeatherCard";
import axios from "axios";

const HomePage = ()=>{
  const [card, setCard] = useState(false)
  const [input, setInput] = useState('')
  const [weather, setWeather] = useState(null)

  const key = process.env.REACT_APP_API_KEY

  const handleSubmit =(e)=>{
    e.preventDefault();

    axios.get(`http://api.weatherapi.com/v1/current.json?key=${key} &q=${input}&aqi=no`)
      .then(res =>{
        setWeather({
          city: res.data.location.name,
          state: res.data.location.region,
          country: res.data.location.country,
          condition: {
            code: res.data.current.condition.code,
            icon: res.data.current.condition.icon,
            text: res.data.current.condition.text
          },
          precip: res.data.current.precip_in,
          temp: res.data.current.temp_f,
          wind: res.data.current.wind_mph,
          feelsLike: res.data.current.feelslike_f
        })
        setCard(true)
      })
      .catch(err => console.log(err))
  }

  const handleChange = (e)=>{
    setInput(e.target.value)
  }


  return (
    <>
      <div className='search-container'>
        <form
          onSubmit={handleSubmit}
          className='search-form'>
          <input
            value={input}
            onChange={handleChange}
            type='text'
            placeholder='Enter City'
            className='search-input'/>
          <button
            type='submit'
            className='search-btn'
          >Get Weather
          </button>
        </form>
      </div>
      {card && <WeatherCard weather={weather}/>}
    </>
  )
}

export default HomePage;