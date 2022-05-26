// Import packages
import React, { useEffect, useState } from "react";
import ShowTask from "../ShowTask/ShowTask";
import { Container, Heading } from "./styles";
import { v4 as uuid4 } from "uuid";
import Form from "../Form/Form";

const Main = () => {
  // Main states
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [editTask, setEditTask] = useState(null);
  // Main app function
  const onSubmit = (e) => {
    e.preventDefault();
    // Show alert
    if (title === "" || description === "" || date === "") {
      window.alert("Please fill up the form.");
    } else {
      // condtion for update
      if (editTask) {
        const editedTask = tasks.find((element) => element.id === editTask.id);
        editedTask.title = title;
        editedTask.description = description;
        editedTask.date = date;
        const getTasks = JSON.parse(localStorage.getItem("tasks"));
        const updatedData = getTasks.map((element) => {
          if (element.id === editTask.id) {
            element.title = title;
            element.description = description;
            element.date = date;
          }
          return element;
        });
        localStorage.setItem("tasks", JSON.stringify(updatedData));
        setTitle("");
        setDescription("");
        setDate("");
        setEditTask(null);
      } else {
        const taskData = {
          id: uuid4(),
          title: title,
          description: description,
          date: date,
        };
        localStorage.setItem("tasks", JSON.stringify([...tasks, taskData]));
        setTasks([...tasks, taskData]);
        setTitle("");
        setDescription("");
        setDate("");
      }
    }
  };

  // Load the selected data
  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
      setDescription(editTask.description);
      setDate(editTask.date);
    }
  }, [editTask]);

  return (
    <Container>
      <Heading>Task Manager</Heading>
      <Form
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        date={date}
        setDate={setDate}
        onSubmit={onSubmit}
        editTask={editTask}
      />
      <ShowTask tasks={tasks} setTasks={setTasks} setEditTask={setEditTask} />
    </Container>
  );
};

export default Main;
