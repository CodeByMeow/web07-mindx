import { useState } from "react";
import { ChangeTransaction, ContentInner, Nav, Row } from "./Popup.style";

const Popup = ({ actions }) => {
  const [input, setInput] = useState();
  const autoSize = (e) => {
    let value = 1;
    if (e.key === "Backspace") value = -1;
    e.target.style.width = e.target.value.length + value + "ch";
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
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
        <form>
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
            <ChangeTransaction />
          </div>
        </form>
      </ContentInner>
    </Row>
  );
};

export default Popup;
