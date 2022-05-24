import React from "react";
import { v4 as uuid4 } from "uuid";
import { ButtonContainer, TaskContainer, TaskDiv, TaskFooter } from "./styles";

const ShowTask = ({ tasks }) => {
  const task = tasks.map((task) => {
    const element = (
      <TaskDiv key={uuid4()}>
        <h3>{task.title}</h3>
        <p>{task.description.substr(0, 80)}...</p>
        <TaskFooter>
          <span>{task.date}</span>
          <ButtonContainer>
            <button style={{ backgroundColor: "goldenrod" }}>Edit</button>
            <button style={{ backgroundColor: "red" }}>Delete</button>
          </ButtonContainer>
        </TaskFooter>
      </TaskDiv>
    );
    return element;
  });
  return <TaskContainer>{task}</TaskContainer>;
};

export default ShowTask;
