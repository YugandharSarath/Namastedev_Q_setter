# Captcha Generator – Test Cases

## ✅ Visual / Rendering Tests

### TC1 - Canvas renders correctly
- **Action:** Load the component
- **Expected:** A canvas with a 5-character captcha is shown

### TC2 - Refresh icon functionality
- **Action:** Click the refresh (🔁) icon
- **Expected:** Captcha updates to a new string on canvas

## ✅ Functional Tests

### TC3 - Successful captcha input
- **Action:** Enter correct captcha shown on canvas and submit
- **Expected:** "✅ Captcha Verified!" message is displayed

### TC4 - Incorrect captcha input
- **Action:** Enter incorrect string and submit
- **Expected:** "❌ Incorrect Captcha. Try again." message appears, and captcha regenerates

### TC5 - Empty captcha input
- **Action:** Submit form without typing anything
- **Expected:** Captcha is treated as invalid, and shows error message + regenerate

## ✅ UX / UI Tests

### TC6 - Input and buttons are styled properly
- **Action:** View layout
- **Expected:** Canvas is inside red bordered box; Submit button is red; Input is styled

### TC7 - Responsive layout
- **Action:** Resize browser or test on mobile
- **Expected:** Layout should adjust accordingly (no overflow or breaking)
