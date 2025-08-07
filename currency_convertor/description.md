
---

## 💱 Currency Converter to INR **

### 🧩 **Objective**

Build a **Currency Converter web application** that allows users to convert any international currency **to INR (Indian Rupees)** using real-time exchange rates from the [Frankfurter API](https://www.frankfurter.app).

---

### ✅ **Functional Requirements**

Your app should allow users to:

1. **Select a source currency** from a dropdown (e.g., USD, EUR, GBP).
2. **Enter an amount** in that currency.
3. Click the **Convert** button to convert the amount **to INR** using the live exchange rate.
4. **Display the converted amount in INR** below the button.
5. If the selected source currency is **already INR**, show the **same amount** without making an API call.
6. Optionally allow **swapping** currencies, but the conversion target must always remain INR.
7. Fetch the list of all currencies from the API endpoint:
   `https://api.frankfurter.app/currencies`
8. Use the conversion API:
   `https://api.frankfurter.app/latest?amount=AMOUNT&from=FROM_CURRENCY&to=INR`

---

### ⚠️ **Edge Cases & Constraints**

- 🛑 **Conversion is only allowed TO INR** – no other target currencies.
- 🛑 The "To" currency dropdown should be **fixed or disabled**, always showing "INR".
- ✅ If the amount is empty, zero, or invalid (e.g., negative), prevent conversion and optionally show an error.
- ✅ Handle any **network or API errors** gracefully.
- 🚫 Do not allow converting from and to the same currency unless it's INR (handled explicitly).
- 🎯 The app should **default** to common source currencies like USD, EUR, GBP on initial load.
- 🧪 Use the mocked conversion response for testing:

```js
const mockConversion = {
  rates: {
    INR: 83.55,
  },
};
```
---

🧪 Test ID Descriptions (as Sentences)
"currency-converter"
→ Use this data-testid for the main container of the Currency Converter app.

"from-currency"
→ Use this data-testid for the "From" currency dropdown where users select the source currency (e.g., USD, EUR).

"to-currency"
→ Use this data-testid for the "To" currency dropdown. Although it's fixed to INR and disabled, it's still helpful for test visibility.

"amount-input"
→ Use this data-testid for the input field where the user enters the amount to convert.

"convert-button"
→ Use this data-testid on the Convert button that triggers the currency conversion.

"converted-result"
→ Use this data-testid for the element that displays the converted amount in INR after conversion.

"swap-button"
→ Use this data-testid on the Swap button that lets users switch the "From" currency with INR (if implemented).
