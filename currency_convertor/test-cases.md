
---

### ✅ `test-cases.md`

```md
# Test Cases for Currency Converter

## ✅ 1. UI Render Test
**Description**: Checks if all UI elements are rendered correctly.
- [ ] Title "Currency Converter" is visible
- [ ] Dropdowns for "From" and "To" currencies are rendered
- [ ] Input for amount is visible
- [ ] Convert button is present

## ✅ 2. API Fetch Test
**Description**: Ensure currency list is fetched and populated.
- [ ] Fetch is called on component mount
- [ ] Dropdown contains a few known currency options (e.g., USD, EUR)

## ✅ 3. Conversion Test
**Description**: Simulates a valid conversion.
- [ ] Set `From = USD`, `To = INR`, `Amount = 10`
- [ ] Click Convert
- [ ] Converted value is displayed


## ✅ 4. Swap Functionality Test
**Description**: Ensure "From" and "To" currencies are swapped correctly.
- [ ] Set `From = USD`, `To = INR`
- [ ] Click swap
- [ ] `From = INR`, `To = USD`

## ✅ 5. Invalid Input Test
**Description**: Prevent conversion with invalid amount.
- [ ] Leave amount field empty
- [ ] Click Convert
- [ ] Error or no result shown

## ✅ 6. Loading & Error Handling
**Description**: Check for fetch or network failures.
- [ ] Simulate API failure using mock reject
- [ ] Display error message gracefully

