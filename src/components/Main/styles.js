import styled from "styled-components";

export const Heading = styled.h1`
  text-align: center;
  margin: 20px 0;
`;

export const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;
export const Form = styled.form`
  margin: auto;
  max-width: 300px;
  & input,
  textarea {
    width: 100%;
    padding: 13px 5px;
    box-shadow: inset 1px -1px 3px 3px #efe7e7;
    border: none;
    border-radius: 5px;
  }
  & textarea {
    resize: none;
    height: 100px;
  }
`;

export const InputContainer = styled.div`
  margin: 10px 0;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  background-color: #fff;
  box-shadow: -1px 0px 3px 3px #efe7e7;
  padding: 10px 26px;
  border-radius: 5px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 15px;
  cursor: pointer;
`;
