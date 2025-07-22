🚦 **Traffic Lights Simulation**

---

### 🧠 **Goal**

Build a **traffic light simulator** with Red, Yellow, and Green lights. The system can **auto-cycle** (timed) or **manual cycle** (via button). Only **one light** is active at a time.

---

### ✅ **Core Features**

* 🚦 Lights: Red → Green → Yellow → Red
* 🕒 **Auto Mode**:

  * Red: 3s
  * Green: 3s
  * Yellow: 1s
* ✋ **Manual Mode**: "Next" button to cycle lights
* 🔁 Restarts always begin with **Red**
* ✅ Only one light active at any moment

---

### 🧪 **Testability Aids**

| UI Element   | `data-testid`   |
| ------------ | --------------- |
| Red Light    | `light-red`     |
| Yellow Light | `light-yellow`  |
| Green Light  | `light-green`   |
| Container    | `traffic-light` |
| Next Button  | `next-button`   |

🧪 **Tests Use**:

* `jest.useFakeTimers()`
* `jest.advanceTimersByTime()`
* `.toHaveClass("on")` to check active light

---

### 📚 **Edge Cases Handled**

* Infinite auto-cycling without crash
* Manual mode must not auto-advance
* Always starts from Red
* Only one `.on` light at any point

---

### 🧪 **Sample Test Cases**

| Test               | Outcome                                   |
| ------------------ | ----------------------------------------- |
| 🟥 Initial State   | Red is active                             |
| 🟩 3s → Green      | Green active after 3s                     |
| 🟡 Full Cycle      | Red → Green → Yellow → Red works properly |
| 🔁 Two Loops       | Sequence repeats correctly                |
| 💡 Visual Feedback | Only one light has `.on` class at a time  |

---

