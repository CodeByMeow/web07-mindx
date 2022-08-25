import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  max-width: 1024px;
  background-color: var(--gray);
`;

export const Content = styled.div`
  padding: 2em;
  text-align: right;
`;

export const AddButton = styled.button`
  width: 2em;
  height: 2em;
  border-radius: 50%;
  background-color: var(--black);
  color: #fff;
  border: none;
  font-size: 1.5em;
  :hover {
    cursor: pointer;
  }
`;
