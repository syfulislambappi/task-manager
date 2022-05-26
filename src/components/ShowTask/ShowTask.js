// Import Packages
import React, { useEffect } from "react";
import DeleteTask from "../DeleteTask/DeleteTask";
import UpdateTask from "../UpdateTask/UpdateTask";
import {
  ButtonContainer,
  DeleteButton,
  EditButton,
  TaskContainer,
  TaskDiv,
  TaskFooter,
} from "./styles";

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
              <EditButton />
            </UpdateTask>
            <DeleteTask task={task} tasks={tasks} setTasks={setTasks}>
              <DeleteButton />
            </DeleteTask>
          </ButtonContainer>
        </TaskFooter>
      </TaskDiv>
    );
  });
  // Fetch data from localstorage
  useEffect(() => {
    const getTasks = JSON.parse(localStorage.getItem("tasks"));
    if (getTasks === null) {
      return setTasks([]);
    } else {
      setTasks(getTasks);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // Condition for showing the task
  if (taskList.length === 0) {
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
