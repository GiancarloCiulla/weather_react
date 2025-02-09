import React from "react";

const weatherIcons = {
  Clear: "☀️", // Sol
  Clouds: "☁️", // Nubes
  Rain: "🌧️", // Lluvia
  Snow: "❄️", // Nieve
  Thunderstorm: "⛈️", // Tormenta
  Drizzle: "🌦️", // Llovizna
  Mist: "🌫️", // Niebla
};

const WeatherList = ({ weatherData }) => {
  // Agrupamos los datos por día y calculamos las temperaturas máximas y mínimas
  const groupedByDay = weatherData.reduce((acc, item) => {
    const date = new Date(item.dt * 1000).toDateString(); // Obtenemos el día
    acc[date] = acc[date] || [];
    acc[date].push(item);
    return acc;
  }, {});

  // Convertimos los datos para mostrar solo la temperatura máxima y mínima
  const dailySummaries = Object.entries(groupedByDay).map(([day, items]) => {
    const temps = items.map((item) => item.main.temp); // Obtenemos todas las temperaturas del día
    const weatherMain = items[0].weather[0].main; // Usamos el primer estado del clima del día
    const icon = weatherIcons[weatherMain] || "❓"; // Obtenemos el ícono
    return {
      day,
      minTemp: Math.min(...temps), // Temperatura mínima
      maxTemp: Math.max(...temps), // Temperatura máxima
      icon, // Icono del clima
    };
  });

  return (
    <div className="weather-list">
      {dailySummaries.map(({ day, minTemp, maxTemp, icon }) => (
        <div key={day} className="daily-summary">
          <h3>{day}</h3>
          <p>
            <span className="weather-icon">{icon}</span>
          </p>
          <p>
            <strong>Min:</strong> {Math.round(minTemp)}°C
          </p>
          <p>
  <strong style={{ color: "red" }}>Max:</strong> {Math.round(maxTemp)}°C
</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherList;
