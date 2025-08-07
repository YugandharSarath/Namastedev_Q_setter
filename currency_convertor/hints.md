
## 🧠 Hints for Currency Converter (to INR)

### 1. 🧱 Basic Structure

Build a simple UI with:

```html
<h2>Currency Converter</h2>
<select id="from-currency"></select>
<select id="to-currency" disabled value="INR">
  <option value="INR">INR</option>
</select>
<input type="number" id="amount" placeholder="Enter amount" />
<button id="convert-button">Convert</button>
<button id="swap-button">Swap</button>
<p id="result"></p>
```

---

### 2. 🌍 Fetch Currencies

Get the list of supported currencies to populate the "From" dropdown.

```js
const response = await fetch('https://api.frankfurter.app/currencies');
const data = await response.json();
const currencyCodes = Object.keys(data); // ['USD', 'EUR', ...]
```

---

### 3. 🔁 Populate Dropdown

Dynamically populate dropdown options:

```js
Object.entries(data).forEach(([code, name]) => {
  const option = document.createElement('option');
  option.value = code;
  option.text = `${code} - ${name}`;
  fromDropdown.appendChild(option);
});
```

---

### 4. 🔄 Swap Currencies (Optional)

Although the conversion is **only to INR**, you can allow swapping **for UI convenience**:

```js
function swap() {
  if (fromCurrency !== 'INR') {
    setFromCurrency('INR');
  } else {
    setFromCurrency('USD'); // Or a last used currency
  }
}
```

---

### 5. 💱 Convert to INR

Perform the API call and show result:

```js
const api = `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=INR`;
const response = await fetch(api);
const data = await response.json();
const result = data.rates['INR'];
resultElement.textContent = `Converted Amount: ${result} INR`;
```

---

### 6. ⚠️ Edge Case Handling

Ensure conversion only happens with valid input:

```js
if (!amount || isNaN(amount) || amount <= 0) {
  alert("Enter a valid amount.");
  return;
}

if (from === 'INR') {
  resultElement.textContent = `Converted Amount: ${amount} INR`;
  return;
}
```

---

### 7. ✅ Sample Test Case (Jest + React Testing Library)

```js
expect(await screen.findByText(/Currency Converter/i)).toBeInTheDocument();
await screen.findByLabelText(/From:/);
fireEvent.change(screen.getByLabelText(/Amount:/), {
  target: { value: '1' },
});
fireEvent.click(screen.getByRole('button', { name: /Convert/i }));
expect(await screen.findByText(/Converted Amount: 83.55 INR/)).toBeInTheDocument();
```

---

### 8. 🎨 Basic Styling

Use clean styling for good UX:

```css
select, input, button {
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 4px;
}

.convert-button {
  background-color: #4CAF50;
  color: white;
}
```

---

### 9. 🔄 Mock Conversion for Tests

Use this mock for testing:

```js
const mockConversion = {
  rates: {
    INR: 83.55,
  },
};
```

---


