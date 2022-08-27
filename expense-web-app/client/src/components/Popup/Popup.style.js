import styled from "styled-components";
import {} from "react-icons";
import { RiExchangeLine } from "react-icons/ri";
export const Row = styled.div`
  padding: 3em 2em;
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
  align-items: center;
  form {
    width: 100%;
  }
  .transaction-input {
    display: flex;
    justify-content: center;
    align-items: center;
    .input {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3.5em;
      margin-left: auto;
    }
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

export const ChangeTransaction = ({ actions }) => {
  return (
    <span
      style={{ marginLeft: "auto", color: "var(--gray)" }}
      onClick={actions.handleChangeTransaction}
    >
      <RiExchangeLine style={{ fontSize: "4em" }} />
    </span>
  );
};
