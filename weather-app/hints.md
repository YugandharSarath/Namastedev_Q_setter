### 💡 Hints 

#### 1. 📡 Get user location using Geolocation API

```js
navigator.geolocation.getCurrentPosition(
  (position) => {
    const { latitude, longitude } = position.coords;
    fetchWeather(latitude, longitude);
  },
  () => {
    setError("Permission denied or unable to get location.");
    setLoading(false);
  }
);
```

#### 2. 🌐 Fetch weather data from OpenWeatherMap API

```js
const API_KEY = "YOUR_API_KEY_HERE";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

const response = await fetch(url);
const data = await response.json();

if (data.cod !== 200) throw new Error(data.message);
```

#### 3. 🔄 Manage loading and error state cleanly

```js
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
const [weather, setWeather] = useState(null);
```

```jsx
{loading ? (
  <p>Loading...</p>
) : error ? (
  <p data-testid="error-message">{error}</p>
) : (
  <>
    <p data-testid="temperature">{weather.temperature}°C</p>
    <p data-testid="humidity">{weather.humidity}%</p>
    <p data-testid="weather-condition">{weather.description}</p>
  </>
)}
```

---

