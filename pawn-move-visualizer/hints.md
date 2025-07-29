
---

## 📄 `hints.md` – Pawn Move Visualizer (Hover-based)


### ✅ Hints

---

#### 1️⃣ Use `hovered[0]` (row) to determine move direction

```js
if (hoverRow <= 1 || hoverRow >= 8) return; // top rows can't move
```

---

#### 2️⃣ For row === 6, highlight both 1-step and 2-step forward

```js
if (hoverRow === 6) {
  isPawnMove =
    (row === hoverRow - 1 || row === hoverRow - 2) && col === hoverCol;
}
```

---

#### 3️⃣ For rows 2–5, highlight only 1 step forward

```js
else {
  isPawnMove = row === hoverRow - 1 && col === hoverCol;
}
```

---

#### 4️⃣ Add `hovered` and `pawn-move` classes conditionally

```js
className={`cell ${isLight ? "light" : "dark"} ${
  isHovered ? "hovered" : isPawnMove ? "pawn-move" : ""
}`}
```

---

### 🧪 Notes

* This assumes **white pawn direction** (upward = row--).
* You correctly prevent any moves from **row 0 or 1**.
* You highlight the **hovered cell** with a `♙` icon — a nice touch.

---

