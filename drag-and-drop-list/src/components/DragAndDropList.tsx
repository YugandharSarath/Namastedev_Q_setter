import React, { useState } from "react";
import "../styles.css";

type Task = {
  id: string;
  label: string;
};

type ColumnType = "todo" | "inprogress" | "done";

const initialData = {
  todo: [
    { id: "task-1", label: "Task 1" },
    { id: "task-2", label: "Task 2" },
  ],
  inprogress: [{ id: "task-3", label: "Task 3" }],
  done: [{ id: "task-4", label: "Task 4" }],
};

const DragAndDropList: React.FC = () => {
  const [columns, setColumns] =
    useState<Record<ColumnType, Task[]>>(initialData);
  const [draggedTask, setDraggedTask] = useState<Task | null>(null);

  const handleDragStart = (task: Task) => {
    setDraggedTask(task);
  };

  const handleDrop = (col: ColumnType) => {
    if (!draggedTask) return;

    const newColumns = { ...columns };
    for (const key of Object.keys(newColumns) as ColumnType[]) {
      newColumns[key] = newColumns[key].filter((t) => t.id !== draggedTask.id);
    }

    newColumns[col] = [...newColumns[col], draggedTask];
    setColumns(newColumns);
    setDraggedTask(null);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className="board">
      {(["todo", "inprogress", "done"] as ColumnType[]).map((col) => (
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
