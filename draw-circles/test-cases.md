# Test Cases for Draw Circles with Undo/Redo

### ✅ Test Case 1: Draw Circle
**Action**: Click once on the canvas  
**Expected Result**: A red circle appears at the click location

---

### ✅ Test Case 2: Draw Multiple Circles
**Action**: Click 3 different positions  
**Expected Result**: 3 red circles should appear at respective locations

---

### ✅ Test Case 3: Undo
**Action**: Click 3 times, then press Undo  
**Expected Result**: Only the first 2 circles remain

---

### ✅ Test Case 4: Redo
**Action**: After undoing, press Redo  
**Expected Result**: The most recently undone circle reappears

---

### ✅ Test Case 5: Undo All
**Action**: Draw 5 circles, press Undo 5 times  
**Expected Result**: Canvas should be empty

---

### ✅ Test Case 6: Redo All
**Action**: After Test Case 5, press Redo 5 times  
**Expected Result**: All 5 circles reappear in the original order

---

### ✅ Test Case 7: Disable Button States
**Action**: When no circles are drawn  
**Expected Result**: Undo and Redo buttons should be disabled
