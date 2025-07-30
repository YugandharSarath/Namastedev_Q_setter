---
## 🌦️ Weather App — Geolocation-Based React App
---

### ✅ Requirements

1. **Get Location Automatically**

   - Use the browser’s geolocation API to fetch latitude and longitude.
   - If geolocation is denied or unsupported, show an error.

2. **Fetch Weather Data**

   - Use the **OpenWeatherMap API** to get current weather using coordinates.
   - Use metric units (`°C`) for temperature.
   - Handle API errors (invalid key, rate limits, etc.).

3. **Display Weather Info**

   - Show:

     - 🌆 City name
     - 🌡️ Temperature (`data-testid="temperature"`)
     - 💧 Humidity (`data-testid="humidity"`)
     - 📝 Description (`data-testid="weather-condition"`)

4. **Loading and Error States**

   - Show `Loading...` while data is being fetched.
   - Show proper error messages for:

     - Permission denied
     - Geolocation not supported
     - API/network failure

---

### ⚠️ Edge Cases & Constraints

1. If geolocation is not supported by the browser, display the message:
   👉 "Geolocation is not supported by your browser."

2. If the user denies location access or if there's any error retrieving the position (e.g., timeout, restricted settings), display:
   👉 "Permission denied or unable to get location."

3. If the OpenWeatherMap API returns an error (such as an invalid API key or malformed request), you should catch it and display the error message returned from the API (e.g., "Invalid API key." or "city not found").

4. If the user is offline or the network fails, the app should not crash. Instead, catch the fetch error and show a message like:
   👉 "Failed to fetch weather data."

5. If the API rate limit is exceeded (common on free plans), catch the response and display the message returned by the API:
   👉 "Rate limit exceeded" or a similar descriptive message.

6. If the API responds with an empty or broken response, ensure your code does not break or throw errors. Show a fallback message such as:
   👉 "Unable to fetch weather data."

---
