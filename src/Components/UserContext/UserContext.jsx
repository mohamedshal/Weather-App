import axios from 'axios';
import React, { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [dateTime, setDateTime] = useState('');
  const [weatherImage, setWeatherImage] = useState('');
  let theLon = 31.24967;
  let theLat = 30.06263;
  const [weatherData, setWeatherData] = useState({
    degree: 0,
    weatherCond: '',
    latitude: 0,
    longitude: 0,
    city: '',
    icon: '',
  });
function getWeatherdata(lat, lon) {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=339256db19a2d9f207ba9851edd20559`
    )
    .then((response) => {
      const data = response.data;

      const temp = (data.main.temp - 272.15).toFixed(2);
      const minTemp = (data.main.temp_min - 272.15).toFixed(2);
      const maxTemp = (data.main.temp_max - 272.15).toFixed(2);
      const description = data.weather[0].description;
      const city = data.name;
      const icon = data.weather[0].icon;
      setWeatherImage(icon);
      setWeatherData({
        degree: temp,
        latitude: minTemp,   
        longitude: maxTemp,   
        weatherCond: description,
        city,
        icon,
      });
    })
    .catch((err) => console.error('Error:', err));
}


  return (
    <UserContext.Provider
      value={{
        dateTime,
        setDateTime,
        weatherImage,
        setWeatherImage,
        weatherData,
        setWeatherData,
        getWeatherdata,
        theLat,
        theLon
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
