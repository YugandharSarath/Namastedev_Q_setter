
---

## 🌦️ Weather App 

### 🧠 Problem Statement

Build a **React-based weather app** that fetches and displays **real-time weather info** using either:

* A **user-input city**, or
* The user’s **geolocation (if permitted)**.

---

### 📦 Features

✅ **User Input**

* 🔍 `city-input`: Type any city name and fetch its weather

✅ **Geolocation Support**

* 📡 Auto-fetch location using `navigator.geolocation` (on mount)

✅ **Display Weather Info**

* 🌡️ Temperature – `data-testid="temperature"`
* 🌧️ Weather Condition – `weather-condition`
* 💧 Humidity – `humidity`
* 🖼️ Weather Icon (optional with image alt or testid)

✅ (Optional) **Extended Forecast**

* 📆 Multi-day weather (if implementing full forecast API)

---

### 🧪 Unit Test Summary

#### ✅ GEOLOCATION TESTS

| ID     | Scenario                | Expected UI Behavior                                                      |
| ------ | ----------------------- | ------------------------------------------------------------------------- |
| GEO-01 | Geolocation supported?  | `navigator.geolocation.getCurrentPosition` is called                      |
| GEO-02 | User allows location    | Weather data fetched and rendered (temp, humidity, etc.)                  |
| GEO-03 | User denies location    | Show: `"Permission denied or unable to get location."` → `error-message`  |
| GEO-04 | Geolocation unsupported | Show: `"Geolocation is not supported by your browser."` → `error-message` |

#### ✅ API BEHAVIOR TESTS

| ID     | Scenario                | Result                                   |
| ------ | ----------------------- | ---------------------------------------- |
| API-01 | Valid API key           | Weather shown correctly                  |
| API-02 | Invalid API key         | Show: `"Invalid API key."`               |
| API-03 | No internet/fetch fails | Show: `"Unable to fetch weather data"`   |
| API-04 | API limit exceeded      | Show: `"Rate limit exceeded"` or similar |

#### ✅ UI STATE TESTS

| ID    | Scenario       | Result                            |
| ----- | -------------- | --------------------------------- |
| UI-01 | Weather loaded | Show city, temperature, condition |
| UI-02 | Error state    | Show appropriate error-message    |
| UI-03 | While loading  | Show: `"Loading..."`              |

---

### 🧪 Code-Level Testability (React Testing Library)

```tsx
// Set input
fireEvent.change(screen.getByTestId("city-input"), { target: { value: "Delhi" } });

// Trigger fetch
fireEvent.click(screen.getByTestId("get-weather"));

// Expect output
await waitFor(() => expect(screen.getByTestId("temperature")).toBeVisible());
```

---

### 📚 Edge Cases

| Case           | Behavior                                             |
| -------------- | ---------------------------------------------------- |
| ❌ Invalid city | Show error like “City not found” via `error-message` |
| ⚠️ API failure | Show “Try again later”                               |
| 🚫 Empty input | Do **not** trigger API call                          |

---

### 🏷️ Suggested `data-testid`s

| Element               | Test ID             |
| --------------------- | ------------------- |
| City Input            | `city-input`        |
| Get Weather Button    | `get-weather`       |
| Temperature Display   | `temperature`       |
| Humidity Display      | `humidity`          |
| Weather Condition     | `weather-condition` |
| Error Message         | `error-message`     |
| Optional Weather Icon | `weather-icon`      |

---

### 💡 Bonus Extensions

* ⏰ Add a live clock or current time in city
* 🌐 Multi-language/localization support
* 📆 Show 5-day forecast using OpenWeatherMap's forecast API
* 🌙 Dynamic background based on weather/temperature

---

