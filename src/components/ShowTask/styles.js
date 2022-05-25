import styled from "styled-components";

export const TaskContainer = styled.div`
  max-width: 500px;
  margin: 40px auto;
  & h1 {
    text-align: center;
  }
`;

export const TaskDiv = styled.div`
  box-shadow: 1px 1px 2px 2px #c5baba;
  border-radius: 5px;
  padding: 10px;
  margin-top: 20px;
`;

export const TaskFooter = styled.div`
  display: flex;
  justify-content: space-between;
  & span {
    font-size: 13px;
    display: inline-block;
    margin-top: 5px;
    color: gray;
  }
`;

export const ButtonContainer = styled.div`
  min-width: 160px;
  display: flex;
  justify-content: space-between;
  & button {
    border: none;
    outline: none;
    background-color: #fff;
    box-shadow: -1px 0px 3px 3px #efe7e7;
    padding: 7px 16px;
    border-radius: 5px;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
  }
`;
