# Test Cases: Drag and Drop List

## ✅ Basic Rendering
- Ensure the component renders the list of items initially.

## ✅ Drag and Drop Functionality
- Drag an item and drop it into a new position.
- Confirm the item's position in the list has changed accordingly.

## ✅ Edge Cases
- Drag and drop an item back to its original position: List should remain unchanged.
- Drop an item outside of valid list: Nothing should break or change.

## ✅ Performance
- Ensure no unnecessary re-renders happen when dragging (check with React DevTools).
- Drag multiple items and drop them one by one — all should be re-ordered correctly.

## ✅ Accessibility (optional)
- Keyboard navigation (can be extended in future versions).
