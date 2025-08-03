## Solution: Currency Converter (International to INR)

This project implements a currency converter using React. It fetches real-time exchange rates from the [Frankfurter API](https://www.frankfurter.app/) and allows the user to convert any international currency to Indian Rupees (INR).

### 🧱 Components Used

- **`CurrencyConverter`**: Main component containing UI, state, and conversion logic.
- **Single-file dropdown integration**: Dropdown logic is part of `CurrencyConverter` for simplicity.

### 🖼️ UI Elements

- **Dropdowns** for selecting currencies (`From` and `To`)
- **Swap button** to switch selected currencies
- **Amount input** field
- **Convert button** to trigger conversion
- **Favorite toggle** to mark a currency as preferred

### ⚙️ Conversion Logic

```js
const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
const data = await response.json();
setConvertedAmount(data.rates[toCurrency]);
