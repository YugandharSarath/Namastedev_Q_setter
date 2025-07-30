
---

## 💡 Hints

### 🧲 Drag-and-Drop Setup

* **`onDragStart`**: Triggered when the drag begins. Use it to store the dragged task in state or a ref.

  ```js
  const handleDragStart = (task) => {
    setDraggedTask(task);
  };
  ```

* **`onDragOver`**: Must call `e.preventDefault()` to allow dropping.

  ```js
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  ```

* **`onDrop`**: Triggered when the dragged task is dropped into a column. Use it to update state by removing the task from its original column and adding it to the new one.

  ```js
  const handleDrop = (col) => {
    if (!draggedTask) return;

    // remove task from all columns and add to target
    const newColumns = { ...columns };
    for (const key in newColumns) {
      newColumns[key] = newColumns[key].filter(t => t.id !== draggedTask.id);
    }
    newColumns[col].push(draggedTask);
    setColumns(newColumns);
    setDraggedTask(null);
  };
  ```

---

### 📦 State Management

* Use `useState` to manage:

  * `columns`: object with task arrays per column
  * `draggedTask`: currently dragged task

  ```js
  const [columns, setColumns] = useState(initialData);
  const [draggedTask, setDraggedTask] = useState(null);
  ```

---

### 🧱 Column Setup

* Structure the board into 3 columns: `To Do`, `In Progress`, `Done`
* Each column acts as a **drop zone**
* Use `<h3>` headings inside each column for screen reader accessibility

---

### 🛡️ Edge Cases

* ✅ **Same column drop**: Prevent re-adding task if it's already there.

  ```js
  if (columns[col].some(t => t.id === draggedTask.id)) return;
  ```

* ✅ **Drop outside column**: Don’t update state if dropped outside any column.

* ✅ **Task moves**: Should work multiple times with accurate state updates.

* ✅ **Single-task column**: Should support drag even if only one task exists.

* ✅ **Append to end**: Dropped task should go to **end of the list** in the target column (not reorder).

---


