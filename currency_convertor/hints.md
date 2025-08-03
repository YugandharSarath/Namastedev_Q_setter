
---

## 🧠 Hints for Currency Converter (to INR)

### 1. 🎯 Start with Basic HTML Structure

You’ll need:

* A heading/title
* A currency selector dropdown
* An input field for amount
* A "Convert" button
* A place to display the result

```html
<h2>Currency Converter</h2>
<select id="from-currency"></select>
<input type="number" id="amount" placeholder="Enter amount" />
<button id="convert-button">Convert</button>
<p id="result"></p>
```

---

### 2. 🌐 Fetch Live Exchange Rates

Use [Frankfurter API](https://www.frankfurter.app) or any open API:

**Example:**

```js
const api = `https://api.frankfurter.app/latest?from=${from}&to=INR`;

const response = await fetch(api);
const data = await response.json();
const rate = data.rates['INR'];
```

---

### 3. 🔁 Populate Currency Dropdown

Get a list of all currencies:

```js
const res = await fetch('https://api.frankfurter.app/currencies');
const currencies = await res.json();

Object.entries(currencies).forEach(([code, name]) => {
  const option = document.createElement('option');
  option.value = code;
  option.text = `${code} - ${name}`;
  dropdown.appendChild(option);
});
```

---

### 4. 🧮 Perform Conversion

After clicking "Convert", do the math:

```js
const result = amount * rate;
document.getElementById('result').textContent = `${amount} ${from} = ₹${result.toFixed(2)}`;
```

---

### 5. ⚠️ Handle Edge Cases

Make sure to validate inputs:

```js
if (!amount || isNaN(amount) || amount <= 0) {
  alert("Please enter a valid amount.");
  return;
}

if (from === 'INR') {
  result.textContent = `₹${amount} (Already in INR)`;
}
```

---

### 6. 💾 (Optional) Store Favorites in localStorage

You can let users "star" or save favorite currencies:

```js
localStorage.setItem('favoriteCurrencies', JSON.stringify(['USD', 'EUR']));
```

---

### 7. 🎨 Apply Basic Styling

Don't forget to keep the UI clean:

```css
select, input, button {
  padding: 0.5rem;
  margin: 0.5rem;
}
```

---

