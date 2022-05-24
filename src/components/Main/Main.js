import React, { useEffect, useState } from "react";
import ShowTask from "../ShowTask/ShowTask";
import { Button, Container, Form, Heading, InputContainer } from "./styles";

const Main = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const taskData = { title: title, description: description, date: date };
    setTasks([...tasks, taskData]);
    setTitle("");
    setDescription("");
    setDate("");
  };
  useEffect(() => {
    console.log(tasks);
  }, [tasks]);
  return (
    <Container>
      <Heading>Task Manager</Heading>
      <Form onSubmit={onSubmit}>
        <InputContainer>
          <input
            type="text"
            placeholder="Enter Task Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <textarea
            placeholder="Enter Task Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </InputContainer>
        <InputContainer>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <Button type="submit">Add</Button>
        </InputContainer>
      </Form>
      <ShowTask tasks={tasks} />
    </Container>
  );
};

export default Main;
