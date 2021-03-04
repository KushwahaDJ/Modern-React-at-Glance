import React from "react";

const Task = ({ task, onClick }) => {
  return (
    <div>
      <h3>
        {task.text}{" "}
        <span
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onClick(task.id)}
        >
          X
        </span>
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
