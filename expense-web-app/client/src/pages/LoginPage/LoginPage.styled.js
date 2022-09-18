import styled from "styled-components";

export const Row = styled.div`
  padding: 2em 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Form = styled.form`
  padding: 1em;
  width: 100%;
  .form-field {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    label {
      font-size: 1.2em;
      flex-shink: 0;
    }
    input {
      outline: none;
      border: none;
      border-bottom: 1px solid var(--gray);
      padding: 0.4em 0.8em;
      font-size: 1.2em;
      width: 24rem;
    }
  }
`;

export const BtnSubmit = styled.button`
  font-size: 2em;
  background-color: var(--green);
  padding: 0.8em;
  width: 100%;
  border-radius: 1.125em;
  outline: none;
  border: none;
  cursor: pointer;
  color: #fff;
`;
