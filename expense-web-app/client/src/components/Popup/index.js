import { useState } from "react";
import { ChangeTransaction, ContentInner, Nav, Row } from "./Popup.style";
import useTransaction from "../../hooks/useTransaction";
import { changeCurrentTransactionType } from "../../contexts/GlobalActions";
import { EXPENSES, IMCOME } from "../../constants/transactionTypes";

const Popup = ({ actions }) => {
  const [input, setInput] = useState("");
  const [state, dispatch] = useTransaction();
  const autoSize = (e) => {
    let value = 1;
    if (e.key === "Backspace") value = -1;
    e.target.style.width = e.target.value.length + value + "ch";
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChangeTransaction = () => {
    const transType =
      state.currentTransactionType === EXPENSES ? IMCOME : EXPENSES;
    dispatch(changeCurrentTransactionType(transType));
  };

  return (
    <Row>
      <Nav>
        <button className="cancle" onClick={actions.handleShowPopup}>
          Cancel
        </button>
        <span className="current-transaction">Expense</span>
      </Nav>
      <ContentInner>
        <form onSubmit={handleSubmit}>
          <div className="transaction-input">
            <div className="input">
              <span className="currency">$</span>
              <input
                type="number"
                placeholder="0"
                onKeyDown={autoSize}
                value={input}
                onChange={handleInputChange}
              />
            </div>
            <ChangeTransaction actions={{ handleChangeTransaction }} />
          </div>
        </form>
      </ContentInner>
    </Row>
  );
};

export default Popup;
