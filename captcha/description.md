# Captcha Generator

## Objective

Build a Captcha Generator using React + TypeScript that can:

1. Generate a random captcha string (5 characters long)
2. Render the captcha string visually (on a canvas) with minor distortion (rotation, lines)
3. Allow users to input the captcha text
4. Validate the input on form submission
5. Regenerate captcha on demand (with a refresh icon)

## Key Requirements

- Display captcha using `<canvas>` for visual styling/distortion.
- Captcha must contain alphanumeric characters (upper/lowercase, digits).
- A "refresh" button should regenerate the captcha.
- On submission, the input should be validated:
  - ✅ Success: show a success message
  - ❌ Failure: show an error message and regenerate captcha

## Tech Stack

- React
- TypeScript
- CSS

## Bonus

- Responsive layout
- Visual feedback on success/failure
- Styled buttons and input fields
