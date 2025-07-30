
### 💡 **Hints**


---

### ✅ Step-by-Step Hints with Code

---

### 🔴 Step 1: **State Setup**

You need to track:

* Which light is active
* Whether it's in **auto** or **manual** mode

```js
const [activeLight, setActiveLight] = useState("red");
const [mode, setMode] = useState("auto"); // 'auto' or 'manual'
```

---

### 🟡 Step 2: **Handle Light Transitions**

Define the light order:

```js
const lightSequence = ["red", "green", "yellow"];

const getNextLight = (current) => {
  const currentIndex = lightSequence.indexOf(current);
  return lightSequence[(currentIndex + 1) % lightSequence.length];
};
```

---

### 🟢 Step 3: **Auto Mode Timer**

Inside `useEffect`, when in **auto** mode, trigger the light change with delays:

```js
useEffect(() => {
  if (mode !== "auto") return;

  let timeout;
  if (activeLight === "red" || activeLight === "green") {
    timeout = setTimeout(() => setActiveLight(getNextLight(activeLight)), 3000);
  } else if (activeLight === "yellow") {
    timeout = setTimeout(() => setActiveLight("red"), 1000);
  }

  return () => clearTimeout(timeout);
}, [activeLight, mode]);
```

---

### 🖱️ Step 4: **Manual Mode Handler**

Create a button that only works in manual mode:

```js
const handleNextManual = () => {
  if (mode === "manual") {
    setActiveLight(getNextLight(activeLight));
  }
};
```

---

### 🔄 Step 5: **Mode Toggle**

Add buttons to switch between **Auto** and **Manual**:

```js
<button onClick={() => setMode("auto")}>Auto Mode</button>
<button onClick={() => setMode("manual")}>Manual Mode</button>
<button onClick={handleNextManual} disabled={mode !== "manual"}>Next</button>
```

---

### 💡 Step 6: **Styling Classes**

Your light divs should only apply the `on` class if active:

```js
<div className={`light red ${activeLight === "red" ? "on" : ""}`} />
<div className={`light yellow ${activeLight === "yellow" ? "on" : ""}`} />
<div className={`light green ${activeLight === "green" ? "on" : ""}`} />
```

---

### 📦 Final Tips

* Always start in `red` light → set initial state accordingly.
* Prevent multiple lights from being active — rely on `activeLight` state.
* Clean up `setTimeout` using `return () => clearTimeout(...)`.

---



