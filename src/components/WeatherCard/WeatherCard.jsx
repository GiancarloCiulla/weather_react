import React from "react";
import '../../components/WeatherCard';
const weatherIcons = {
  Clear: "fa-sun",
  Clouds: "fa-cloud",
  Rain: "fa-cloud-showers-heavy",
  Snow: "fa-snowflake",
  Thunderstorm: "fa-bolt",
  Drizzle: "fa-cloud-rain",
  Mist: "fa-smog",
};

const WeatherCard = ({ weatherData }) => {
  const { main, weather, dt_txt } = weatherData;
  const { temp } = main; 
  const { description, main: weatherMain } = weather[0];
  const iconClass = weatherIcons[weatherMain] || "fa-question";

  return (
    <div className="weather-card">
      <p>{dt_txt}</p>
      <i
        className={`fas ${iconClass}`}
        style={{ fontSize: "50px", color: "#ffffff" }}
      ></i>
      <p>{description}</p>
      <p>{Math.round(temp)}°C</p>
    </div>
  );
};


export default WeatherCard;



