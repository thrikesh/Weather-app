import React, { useState } from 'react'
import axios from 'axios'
import './WeatherComponent.css'
function WeatherComponent() {
    const [data, setData] = useState({});
  const [cityName, setCityName] = useState('');
  const weatherFunction = (event) => {
    setCityName(event.target.value);
  };

  const fetchWeatherData = async () => {
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=0b3b9d37958143d8a99134013231309&q=${cityName}`);
      console.log(response.data);
      setData(response.data);
    
  };
  return (
    <React.Fragment>
      <div>
        <header>
          <h1>Weather app</h1>
        </header>
        <label htmlFor="cityName">Enter Your City Name: </label>
        <br></br>
        <input
          type="text"
          name="cityName"
          id="cityName"
          value={cityName}
          placeholder="City Name"
          onChange={weatherFunction}
        />
        <button  onClick={fetchWeatherData}>Click</button>
        <br></br>
        {data.current && (
          <div>
            <h3>Location : {data.location.name}</h3>
            <h3>Country : {data.location.country}</h3>
            <h3>Temperature: {data.current.temp_c}&deg;C</h3>
            <h3>Condition: {data.current.condition.text}</h3>
            <h1><img src={data.current.condition.icon} alt="" /></h1>
            <h3>Last Updated : {data.current.last_updated}</h3>
            <h3>Latitude : {data.location.lat}</h3>
            <h3>Longitude : {data.location.lon}</h3>
            <br></br>
            
          </div>
        )}
      </div>
    </React.Fragment>
  )
}

export default WeatherComponent