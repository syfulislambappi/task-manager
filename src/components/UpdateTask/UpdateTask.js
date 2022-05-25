import React from "react";

const UpdateTask = ({ children, task, tasks, setEditTask }) => {
  const onEdit = () => {
    const selectedTask = tasks.find((element) => element.id === task.id);
    setEditTask(selectedTask);
  };
  return (
    <button onClick={onEdit} style={{ backgroundColor: "goldenrod" }}>
      {children}
    </button>
  );
};

export default UpdateTask;
