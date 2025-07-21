# ✅ Test Cases – Weather App

Below are common test cases to ensure the app functions correctly:

---

## 🌐 Geolocation Tests

| Test Case ID | Description | Expected Result |
|--------------|-------------|-----------------|
| GEO-01 | Browser supports geolocation | App should ask for permission and proceed |
| GEO-02 | User allows location access | App fetches weather data based on location |
| GEO-03 | User denies location access | Show "Permission denied or unable to get location." |
| GEO-04 | Device does not support geolocation | Show "Geolocation is not supported by your browser." |

---

## ☁️ Weather API Tests

| Test Case ID | Description | Expected Result |
|--------------|-------------|-----------------|
| API-01 | Valid API key provided | Weather data is fetched and displayed |
| API-02 | Invalid API key | Show error "Invalid API key" |
| API-03 | No internet connection | Show fetch failure error |
| API-04 | API rate limit exceeded | Show appropriate error message from API |

---

## 🧪 UI Tests

| Test Case ID | Description | Expected Result |
|--------------|-------------|-----------------|
| UI-01 | Weather data loaded | Display all weather info in card |
| UI-02 | Error occurred | Display red-colored error message |
| UI-03 | Loading state | Display "Loading..." until response arrives |
