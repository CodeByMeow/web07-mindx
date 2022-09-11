import styled from "styled-components";

export const Row = styled.div`
  padding: 3em 0;
`;

export const Select = styled.div`
  height: ${(props) => `${props.height}px`};
  max-height: 24em;
  overflow-y: scroll;
  border-bottom: 1px solid var(--gray);
`;
