# Social Share Dialog Component

Implement a reusable React component that displays a "Share This" button. When clicked, it opens a modal dialog that contains several social media sharing options (LinkedIn, Twitter/X, WhatsApp, Facebook, Telegram, Reddit, Email) and a copy-to-clipboard button for the share link.

## Features

- Modal dialog using Material-UI (`@mui/material`) components.
- Icons for each platform using either:
  - `@mui/icons-material` (for available platforms), or
  - Custom image/SVG (e.g., for X logo).
- `navigator.clipboard.writeText` support to copy the share URL.
- Responsive layout with clean button/icon styling.
- Custom alt-text and tooltips for accessibility.
- Uses `https://namaste.dev` as the sample URL and “Check this out!” as share text.

## Expected Behavior

- Clicking "Share This" button opens a dialog.
- User can click any social icon to open share intent in new tab.
- Clicking "Copy" copies the share link and shows an alert.

