import React from "react";

const WeatherCard = ({weather})=>{

  return (
    <div className='card'>
      <section className='card-location-sect'>
        <h2 className='card-h2'>{weather.city},</h2>
        <h2 className='card-h2'>{weather.state},</h2>
        <h2 className='card-h2'>{weather.country}</h2>
      </section>
      <section className='card-weather-sect'>
        <div className='icon-div'>
          <img className='icon' src={weather.condition.icon}/>
          <h2 className='icon-text'>{weather.condition.text}</h2>
        </div>
        <div className='info-div'>
          <h1 className='info'>Precip: {weather.precip} in</h1>
          <h1 className='info'>Feels like: {weather.feelsLike}f</h1>
          <h1 className='info'>Wind: {weather.wind} mph</h1>
          <h1 className='info-temp'>{weather.temp} f</h1>
        </div>
      </section>

    </div>
  )
}

export default WeatherCard;