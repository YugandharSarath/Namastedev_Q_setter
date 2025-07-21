import React, { useEffect, useState } from "react";

type WeatherData = {
  temperature: number;
  humidity: number;
  description: string;
  city: string;
};

const WeatherApp: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  const fetchWeather = async (lat: number, lon: number) => {
    try {
      const API_KEY = "439d4b804bc8187953eb36d2a8c26a02";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();

      if (data.cod !== 200) {
        throw new Error(data.message);
      }

      const weatherData: WeatherData = {
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        city: data.name,
      };

      setWeather(weatherData);
    } catch (err: any) {
      setError(err.message || "Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeather(latitude, longitude);
      },
      (err) => {
        setError("Permission denied or unable to get location.");
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div
      style={{
        fontFamily: "Arial",
        maxWidth: 400,
        margin: "50px auto",
        padding: 20,
        border: "1px solid #ddd",
        borderRadius: 8,
      }}
    >
      <h2>🌦️ Weather App</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : weather ? (
        <div>
          <h3>{weather.city}</h3>
          <p>🌡️ Temperature: {weather.temperature}°C</p>
          <p>💧 Humidity: {weather.humidity}%</p>
          <p>📝 Description: {weather.description}</p>
        </div>
      ) : null}
    </div>
  );
};

export default WeatherApp;
