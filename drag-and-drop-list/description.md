
---

## ⬆️ **Project: Drag and Drop Task Board**

---

### ❓ **Question**

Create a **simple Kanban-style task board** in React (without any external drag libraries), where tasks can be **dragged and dropped** between three columns — **To Do**, **In Progress**, and **Done**. Ensure it works with native HTML5 drag-and-drop and reflects changes immediately.

---

### ✅ **Functional Requirements**

1.  **Column Setup**

    * The UI should have three labeled columns: *To Do*, *In Progress*, and *Done*.
    * Each column should hold one or more task cards.

2.  **Drag and Drop Behavior**

    * Users should be able to drag a task card from one column and drop it into another.
    * When dropped, the task must be removed from the original column and appended to the new one.
    * The DOM should reflect the updated structure instantly after drop.

3.  **State Handling**

    * Task movement must be handled via React `useState`.
    * State should not mutate directly — always create a copy and update appropriately.

4.  **Initial Render**

    * The board should render with 4 predefined tasks distributed across the three columns.
    * **Note:** Do not modify the `initialData` object in `DragAndDropList.js`, as it is used for testing the initial state.

5.  **Accessibility**

    * Each column must have an accessible `<h3>` heading (used in screen reader validation).

---

### ⚠️ **Edge Cases & Constraints**

* **Drop in same column**: Dropping a task back into the same column must not duplicate or move the item.
* **Drop outside any column**: UI should not crash or misbehave if a task is dragged but not dropped in a valid zone.
* **Multiple task moves**: Moving tasks multiple times should preserve their order and correct state.
* **Single task column**: A column with one task should still support dragging and dropping.
* **Visual Position**: Tasks are always added at the end of the destination column, not reordered internally.

---