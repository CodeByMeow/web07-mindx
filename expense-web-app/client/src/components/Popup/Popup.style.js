import styled from "styled-components";

export const Row = styled.div`
  padding: 1em 2em;
  height: 100vh;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #fff;
`;

export const Nav = styled.div`
  font-size: 2em;
  position: relative;
  .current-transaction {
    font-weight: 800;
    width: 100%;
    text-align: center;
    display: block;
  }
  .cancle {
    margin-right: auto;
    position: absolute;
    left: 0;
    top: 0;
    border: none;
    outlien: none;
    background: #fff;
    font-size: 1em;
  }
`;

export const ContentInner = styled.div`
  height: 36em;
  display: flex;
  justify-content: center;
  align-items: center;
  .transaction-input {
    text-align: center;
    display: flex;
    align-items: center;
    font-size: 4em;
    input {
      outline: none;
      border: none;
      border-bottom: 3px solid var(--gray);
      display: block;
      font-size: 2em;
      text-align: center;
      width: 1em;
      padding: 0;
      -webkit-appearance: none;
      margin: 0;
      -moz-appearance: textfield;
    }
    .currency {
      color: var(--gray);
      align-self: flex-start;
    }
  }
`;
