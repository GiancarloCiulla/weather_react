import React from "react";
import '../../components/WeatherCard';

const WeatherCard = ({ weatherData }) => {
  const { main, weather, dt_txt } = weatherData;
  const { temp } = main;
  const { description, icon } = weather[0];

  return (
    <div className="weather-card">
      <p>{dt_txt}</p>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <p>{description}</p>
      <p>{temp}Â°C</p>
    </div>
  );
};

export default WeatherCard;