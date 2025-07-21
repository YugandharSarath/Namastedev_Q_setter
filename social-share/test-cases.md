# Test Cases for SocialShareDialogWrapper

## ✅ UI Tests

- [ ] "Share This" button is visible.
- [ ] Clicking "Share This" opens the dialog.
- [ ] Dialog contains all 7 social media icons.
- [ ] Dialog displays "Or copy link" section with correct URL.
- [ ] Copy button exists and is styled properly.

## ✅ Functional Tests

- [ ] Clicking each icon opens the correct share URL in a new tab:
  - [ ] LinkedIn
  - [ ] X (Twitter)
  - [ ] WhatsApp
  - [ ] Facebook
  - [ ] Telegram
  - [ ] Reddit
  - [ ] Email
- [ ] Clicking "Copy" copies `https://namaste.dev` to clipboard.
- [ ] Clicking Close (`X`) icon closes the dialog.

## ✅ Accessibility

- [ ] Each icon has an accessible `title` or `aria-label`.
- [ ] Close button is keyboard-focusable.
- [ ] Dialog traps focus correctly when open.
