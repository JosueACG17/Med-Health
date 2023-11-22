import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Clima() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const response = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
          params: {
            q: 'Cancun',
            appid: 'a4489e185a65ae0e84a95080c21dd044',
            units: 'metric',
            lang: 'es'
          }
        });
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error obteniendo los datos del clima: ", error);
      }
    };

    getWeatherData();
  }, []);

  return (
    <div>
      {weatherData ? (
        <div className='column text-center mt-14'>
          <h3 className='text-white font-bold'>{weatherData.name}</h3>
          <p className='text-white font-semibold'>{weatherData.main.temp}°C</p>
          {weatherData.weather[0].icon && (
            <img
              src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              alt="Weather Icon"
              className='mx-auto'
            />
          )}
        </div>
      ) : (
        <p>Cargando datos del clima...</p>
      )}
    </div>
  );
}

export default Clima;
