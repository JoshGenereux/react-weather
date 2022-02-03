import axios from "axios";
import {useEffect, useState} from "react";

const useAxios = ({input})=>{
  const [res, setRes] = useState({})
  const [err, setErr] = useState('')

  const key = `${process.env.REACT_APP_API_KEY}`;
  const url = `http://api.weatherapi.com/v1/current.json?key=${key} &q=${input}&aqi=no`

  useEffect(()=>{
    axios.get(url)
      .then(res =>{
        console.log(res.data)
        setRes({
          city: res.data.location.name,
          state: res.data.location.region,
          country: res.data.location.country,
          condition: {
            code: res.data.current.condition.code,
            icon: res.data.current.condition.icon,
            text: res.data.current.condition.text
          },
          temp: res.data.current.temp_f,
          wind: res.data.current.wind_mph
        })
      })
      .catch(err =>{
        setErr(err)
      })
  },[])

  return {res, err}
}

export default useAxios;
