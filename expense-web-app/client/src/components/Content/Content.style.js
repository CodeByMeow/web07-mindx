import styled from "styled-components";

export const Row = styled.div`
  padding: 5em 2em;
  height: 28em;
  h4 {
    font-size: 1.5em;
    font-weight: 500;
    color: var(--gray-dark);
    text-align: center;
    padding: 0.5em;
  }
`;

export const OverView = styled.div`
  text-aligh: center;
  display: flex;
  justify-content: center;
  font-size: 6em;
  & .currency {
    font-size: 0.6em;
    color: var(--gray-dark);
    font-weight: 300;
  }
  & .decimal {
    font-size: 0.6em;
  }
`;
