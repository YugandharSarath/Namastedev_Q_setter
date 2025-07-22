⬆️ **Drag and Drop List**

---

### 🧠 **Goal**

Build a simple **Kanban-style task manager** using React **without external libraries**, where users can drag tasks across three columns — **To Do**, **In Progress**, and **Done**.

---

### ✅ **Core Features**

* 🗂️ Three Columns: *To Do*, *In Progress*, *Done*
* 🖱️ Drag-and-drop support using **HTML5 API**
* 🔄 State updates instantly after drop
* 🎨 Visual feedback while dragging
* ♿ Accessible headings for screen readers

---

### ⚙️ **UI Identifiers for Testing**

| Element        | data-testid               |
| -------------- | ------------------------- |
| List container | `draggable-list`          |
| Task item      | `draggable-item-${index}` |

---

### 🧪 **Test Case Coverage**

| Test Case                | What It Checks                                                      |
| ------------------------ | ------------------------------------------------------------------- |
| ✅ Initial render         | All default tasks and columns are present                           |
| ✅ Drag to another column | Moves task to target column and updates state                       |
| ✅ Drop in same column    | No UI/state change if task dropped where it started                 |
| ✅ Drop outside columns   | Drop fails safely, UI doesn't break                                 |
| ✅ Multiple drags         | Tasks can move across columns multiple times                        |
| ✅ Accessibility          | Column headers support assistive technologies (e.g. screen readers) |

---

### ⚠️ **Edge Cases**

* Dropping in same column → No change
* Only one task in a column → Still draggable
* Moving task back and forth works without glitches

---

### 🧰 **Technologies Used**

* React (Hooks, Functional Components)
* Native HTML5 Drag-and-Drop
* @testing-library/react for testing

---



