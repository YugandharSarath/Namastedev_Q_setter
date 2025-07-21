# Test Cases for Traffic Light System

---

### ✅ Test Case 1: Initial State
**Action**: Load the component  
**Expected Result**: Red light should be active

---

### ✅ Test Case 2: Light Transition
**Action**: Wait for 3 seconds  
**Expected Result**: Light changes from Red → Green

---

### ✅ Test Case 3: Full Cycle
**Action**: Let the light run for ~7 seconds  
**Expected Result**: Red → Green → Yellow → Red sequence repeats

---

### ✅ Test Case 4: Loop Continuity
**Action**: Let the component run for 30+ seconds  
**Expected Result**: Light continues switching in a perfect cycle

---

### ✅ Test Case 5: Visual Feedback
**Action**: Observe the active light  
**Expected Result**: Only one light should be active (colored) at a time
