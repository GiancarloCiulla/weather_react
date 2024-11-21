import React from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import './WeatherList.css';
import '../../components/WeatherList'

const WeatherList = ({ weatherData }) => {
  const groupedByDay = weatherData.reduce((acc, item) => {
    const date = new Date(item.dt * 1000).toDateString();
    acc[date] = acc[date] || [];
    acc[date].push(item);
    return acc;
  }, {});

  return (
    <div className="weather-list">
      {Object.entries(groupedByDay).map(([day, items]) => (
        <div key={day}>
          <h3>{day}</h3>
          <div className="weather-cards">
            {items.map((item) => (
              <WeatherCard key={item.dt} weatherData={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherList;