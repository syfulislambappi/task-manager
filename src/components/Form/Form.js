import React from "react";
import { Button, InputContainer, StyledForm } from "./styles";

const Form = ({
  onSubmit,
  title,
  setTitle,
  description,
  setDescription,
  date,
  setDate,
  editTask,
}) => {
  return (
    <StyledForm onSubmit={onSubmit}>
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
        <Button type="submit">{editTask ? "UPDATE" : "ADD"}</Button>
      </InputContainer>
    </StyledForm>
  );
};

export default Form;
