## 💱 Solution: Currency Converter (International to INR)

This project implements a **currency converter web app** using React. It fetches **real-time exchange rates** from the [Frankfurter API](https://www.frankfurter.app/) and converts **any international currency to Indian Rupees (INR)**.

---

### 🧱 Components Used

- **`CurrencyConverter`**: Main component handling UI, conversion logic, and state.
- All logic is self-contained in a single file for simplicity.

---

### 🖼️ UI Elements

- **Dropdown (`From:`)** for selecting the source currency.
- **Amount input** field (`Amount:`) to enter value.
- **Convert** button to trigger exchange rate fetch.
- **Swap** button to switch `From` and `To` currencies visually (INR remains fixed).
- **Converted result display**: Shows the converted INR value.

---

### ⚙️ Conversion Logic

- Currencies fetched from:

```js
const res = await fetch('https://api.frankfurter.app/currencies');
const currencies = await res.json();
