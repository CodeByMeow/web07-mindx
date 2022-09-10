import styled from "styled-components";
import { motion } from "framer-motion";
import { RiExchangeLine } from "react-icons/ri";
export const OverlayWrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background-color: #868996;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
`;

export const Row = styled(motion.div)`
  padding: 3em 2em;
  height: 98%;
  width: 98%;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  margin-top: auto;
`;

export const Nav = styled.div`
  font-size: 1.5em;
  height: 3.5em;
  width: 100%;
  .nav-inner {
    position: relative;
    height: inherit;
  }
  .current-transaction {
    font-weight: 800;
    text-align: center;
    text-transform: capitalize;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .cancle {
    position: absolute;
    top: 0;
    left: 0;
    margin-right: auto;
    border: none;
    outlien: none;
    background: #fff;
    cursor: pointer;
  }
`;

export const ContentInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: auto;
  form {
    margin: 0 auto;
    width: 98%;
    height: 90%;
    position: fixed;
    left: 0;
    bottom: 0;
    padding: 0 2em;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .error-message {
    color: red;
    font-size: 1.2em;
    text-align: center;
    :first-letter {
      text-transform: capitalize;
    }
  }
  .transaction-input {
    display: flex;
    justify-content: center;
    align-items: center;
    .input {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.5em;
      margin-left: auto;
    }
    input {
      outline: none;
      border: none;
      min-width: ${(props) => props.width + "ch"};
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
      style={{
        marginLeft: "auto",
        color: "var(--gray)",
        cursor: "pointer",
        transiton: "all 1s ease-in-out",
        transform: "rotate(90deg)",
      }}
      onClick={actions.handleChangeTransaction}
    >
      <RiExchangeLine style={{ fontSize: "3em" }} />
    </span>
  );
};

export const FieldInpout = styled.div`
  text-align: center;
  padding: 3em 0;

  input[type="date"] {
    outline: none;
    font-size: 2em;
    border: none;
    border-bottom: 1px solid var(--gray);
    padding: 0 1em;
    cursor: pointer;
    font-family: inherit;
  }
`;

export const Notes = styled.div`
  .notes {
    font-size: 1.5em;
    font-weight: 300;
    padding: 1em;
    width: 100%;
    resize: none;
    border: none;
    border-bottom: 1px solid var(--gray);
    outline: none;
    font-family: inherit;
  }
`;

export const SubmitBtn = styled.div`
  padding: 1em 2em;
  .submit {
    font-size: 2em;
    background-color: var(--green);
    padding: 0.8em;
    width: 100%;
    border-radius: 1.125em;
    outline: none;
    border: none;
    cursor: pointer;
    color: #fff;
  }
`;
