// Import Packages
import React, { useEffect } from "react";
import DeleteTask from "../DeleteTask/DeleteTask";
import UpdateTask from "../UpdateTask/UpdateTask";
import { ButtonContainer, TaskContainer, TaskDiv, TaskFooter } from "./styles";

const ShowTask = ({ tasks, setTasks, setEditTask }) => {
  // Destructure task content
  const taskList = tasks.map((task) => {
    return (
      <TaskDiv key={task.id}>
        <h3>{task.title}</h3>
        <p>{task.description.substr(0, 80)}...</p>
        <TaskFooter>
          <span>{task.date}</span>
          <ButtonContainer>
            <UpdateTask tasks={tasks} task={task} setEditTask={setEditTask}>
              Edit
            </UpdateTask>
            <DeleteTask task={task} tasks={tasks} setTasks={setTasks}>
              Delete
            </DeleteTask>
          </ButtonContainer>
        </TaskFooter>
      </TaskDiv>
    );
  });
  // Condition for showing the task
  if (tasks.length === 0) {
    return (
      <TaskContainer>
        <h1>There is no Task...</h1>
      </TaskContainer>
    );
  } else {
    return <TaskContainer>{taskList}</TaskContainer>;
  }
};

export default ShowTask;
