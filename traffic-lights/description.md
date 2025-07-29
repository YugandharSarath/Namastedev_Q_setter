
---

## 🚦 Traffic Light Simulator – React App Challenge

---

### 🎯 **Objective**

Create a **traffic light simulator** in React that mimics real-world behavior by auto-cycling through Red → Green → Yellow repeatedly **or** lets users manually switch between lights. Only **one light** should be active at a time.

---

### ✅ **Functional Requirements**

1. **Lights:**

   * Three lights: Red, Green, Yellow.
   * Light cycle order: **Red → Green → Yellow → Red**.

2. **Modes:**

   * **Auto Mode**:

     * Red: active for 3 seconds.
     * Green: active for 3 seconds.
     * Yellow: active for 1 second.
     * Cycles **infinitely** without crashing.
   * **Manual Mode**:

     * Clicking a **"Next"** button should advance to the next light manually.
     * Light sequence still follows Red → Green → Yellow → Red.

3. **Start Conditions:**

   * Always **start** the simulation with Red light active.

4. **UI Feedback:**

   * Only **one light** should have the active class (e.g., `.on`) at any time.
   * Active light must be visually identifiable (via styles or class name).



### ⚠️ **Edge Cases to Handle**

* Auto-cycling continues forever without freezing or glitches.
* Manual cycling **should not** auto-advance — strictly one light per click.
* System must **reset to Red** if re-mounted or restarted.
* No simultaneous `.on` lights — visual feedback must be accurate.

---


