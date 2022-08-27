import styled from "styled-components";

export const Item = styled.div`
  cursor: pointer;
  padding: 1em;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
  h5 {
    font-size: 2em;
    font-weight: 300;
    padding: 1em;
  }
`;

export const Image = styled.img`
  width: 5em;
  height: 5em;
  object-fit: cover;
  border-radius: 50%;
`;
