import React, { useState } from "react";
import "./styles.css";

const initialData = {
  todo: [
    { id: "task-1", label: "Task 1" },
    { id: "task-2", label: "Task 2" },
  ],
  "in progress": [{ id: "task-3", label: "Task 3" }], 
  done: [{ id: "task-4", label: "Task 4" }],
};

const DragAndDropList = () => {
  const [columns, setColumns] = useState(initialData);
  const [draggedTask, setDraggedTask] = useState(null);

  const handleDragStart = (task) => {
    setDraggedTask(task);
  };

  const handleDrop = (col) => {
    if (!draggedTask) return;

    const newColumns = { ...columns };
    for (const key of Object.keys(newColumns)) {
      newColumns[key] = newColumns[key].filter((t) => t.id !== draggedTask.id);
    }

    newColumns[col] = [...newColumns[col], draggedTask];
    setColumns(newColumns);
    setDraggedTask(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="board">
      {["todo", "in progress", "done"].map((col) => ( // Changed from 'inprogress'
        <div
          key={col}
          className="column"
          onDragOver={handleDragOver}
          onDrop={() => handleDrop(col)}
        >
          <h3>{col.toUpperCase()}</h3>
          {columns[col].map((task) => (
            <div
              key={task.id}
              className="task"
              draggable
              onDragStart={() => handleDragStart(task)}
            >
              {task.label}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DragAndDropList;