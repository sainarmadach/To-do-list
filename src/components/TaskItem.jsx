import React from "react";
import { FaTrash } from "react-icons/fa";

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div className="task-item">
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className={task.completed ? "completed" : ""}>{task.text}</span>
      </label>
      <span className="task-date">{task.date}</span>
      <button className="delete-btn" onClick={() => onDelete(task.id)}>
        <FaTrash />
      </button>
    </div>
  );
};

export default TaskItem;
