import React, { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm/SearchForm";
import WeatherList from "./components/WeatherList/WeatherList";
import './App.css';

const App = () => {
  const [city, setCity] = useState("Madrid");
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);

    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${apiKey}`
      );

      if (!response.ok) {
        throw new Error("City not found. Please try another one.");
      }

      const data = await response.json();
      if (data && data.list) {
        setWeatherData(data.list);
      } else {
        setWeatherData([]);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  return (
    <div>
      <header className="app-header">
        <div className="weather-icons">
          <span className="icon sun">☀️</span>
          <span className="icon snow">❄️</span>
          <span className="icon storm">⛈️</span>
        </div>
      </header>
      <SearchForm onCityChange={handleCityChange} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!loading && !error && weatherData.length > 0 && (
        <WeatherList weatherData={weatherData} />
      )}
      {!loading && !error && weatherData.length === 0 && (
        <p>No weather data available</p>
      )}
    </div>
  );
};

export default App;

