
---

### 🪛 Hint 1: Set up your initial column state

Use the provided `initialData` object, and place it outside your component. Then set it as your default state with `useState`.

```js
const initialData = {
  todo: [
    { id: 'task-1', label: 'Task 1' },
    { id: 'task-2', label: 'Task 2' },
  ],
  'in progress': [{ id: 'task-3', label: 'Task 3' }],
  done: [{ id: 'task-4', label: 'Task 4' }],
};

const [columns, setColumns] = useState(initialData);
```

> 🧠 **Reminder:** Do NOT mutate `initialData` directly. Always copy when updating state.

---

### 🪛 Hint 2: Handle drag events using native HTML5

You’ll need to set up `onDragStart`, `onDragOver`, and `onDrop` handlers.

```js
const handleDragStart = (task) => {
  setDraggedTask(task);
};

const handleDragOver = (e) => {
  e.preventDefault(); // Necessary to allow drop
};

const handleDrop = (columnId) => {
  if (!draggedTask) return;

  setColumns((prev) => {
    // Remove task from old column
    const updated = { ...prev };
    for (let col in updated) {
      updated[col] = updated[col].filter((t) => t.id !== draggedTask.id);
    }
    // Avoid moving to same column
    if (prev[columnId].find((t) => t.id === draggedTask.id)) return prev;

    // Add to new column
    updated[columnId] = [...updated[columnId], draggedTask];
    return updated;
  });

  setDraggedTask(null);
};
```

> ✅ Use `onDragStart={() => handleDragStart(task)}` on task cards
> ✅ Use `onDrop={() => handleDrop(col)}` and `onDragOver={handleDragOver}` on each column

---

### 🪛 Hint 3: Add a new task inline only in the "To Do" column

```js
const [isAddingNewTask, setIsAddingNewTask] = useState(false);
const [newTaskInputLabel, setNewTaskInputLabel] = useState("");
const enterPressedRef = useRef(false);

const addNewTaskInline = (columnId) => {
  if (enterPressedRef.current) {
    enterPressedRef.current = false;
    return;
  }

  if (newTaskInputLabel.trim() === "") {
    setIsAddingNewTask(false);
    setNewTaskInputLabel("");
    return;
  }

  const newTask = {
    id: `task-${Date.now()}`,
    label: newTaskInputLabel.trim(),
  };

  setColumns((prev) => ({
    ...prev,
    [columnId]: [...prev[columnId], newTask],
  }));

  setIsAddingNewTask(false);
  setNewTaskInputLabel("");
};
```

```jsx
{col === "todo" && (
  <div className="add-task-inline">
    {isAddingNewTask ? (
      <input
        value={newTaskInputLabel}
        onChange={(e) => setNewTaskInputLabel(e.target.value)}
        onBlur={() => addNewTaskInline(col)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            enterPressedRef.current = true;
            addNewTaskInline(col);
            e.target.blur();
          }
        }}
        autoFocus
      />
    ) : (
      <button onClick={() => setIsAddingNewTask(true)}>+ Add a task</button>
    )}
  </div>
)}
```

---

### 🪛 Hint 4: Support editing a task by clicking its label

```js
const [editingTaskId, setEditingTaskId] = useState(null);
const [editingTaskLabel, setEditingTaskLabel] = useState("");

const handleLabelClick = (task) => {
  setEditingTaskId(task.id);
  setEditingTaskLabel(task.label);
};

const saveEditedTask = (taskId) => {
  if (!editingTaskLabel.trim()) {
    setEditingTaskId(null);
    return;
  }

  setColumns((prev) => {
    const updated = {};
    for (let col in prev) {
      updated[col] = prev[col].map((task) =>
        task.id === taskId ? { ...task, label: editingTaskLabel } : task
      );
    }
    return updated;
  });

  setEditingTaskId(null);
};
```

```jsx
{editingTaskId === task.id ? (
  <input
    value={editingTaskLabel}
    onChange={(e) => setEditingTaskLabel(e.target.value)}
    onBlur={() => saveEditedTask(task.id)}
    onKeyPress={(e) => {
      if (e.key === "Enter") saveEditedTask(task.id);
    }}
    autoFocus
  />
) : (
  <span onClick={() => handleLabelClick(task)}>{task.label}</span>
)}
```

---

### 🪛 Hint 5: Deleting a task

```js
const deleteTask = (taskId) => {
  setColumns((prev) => {
    const updated = {};
    for (let col in prev) {
      updated[col] = prev[col].filter((task) => task.id !== taskId);
    }
    return updated;
  });
};
```

```jsx
<button onClick={() => deleteTask(task.id)}>🗑️</button>
```

---

### 🎯 Final Touch: Ensure visual polish

Style elements using your `.css`:

```css
.task {
  padding: 10px;
  background: white;
  margin-bottom: 8px;
  border-radius: 4px;
  cursor: grab;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

