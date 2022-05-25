import React from "react";

const DeleteTask = ({ task, tasks, setTasks, children }) => {
  // Delete function
  const onDelete = () => {
    const updatedTasks = tasks.filter((element) => element.id !== task.id);
    setTasks(updatedTasks);
    // Delete from localstorage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };
  return (
    <button onClick={onDelete} style={{ backgroundColor: "red" }}>
      {children}
    </button>
  );
};

export default DeleteTask;
