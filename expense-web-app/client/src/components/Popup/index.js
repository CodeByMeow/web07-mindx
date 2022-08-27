import { useState } from "react";
import {
  ChangeTransaction,
  ContentInner,
  FieldInpout,
  GridCategory,
  Nav,
  Notes,
  Row,
} from "./Popup.style";
import useTransaction from "../../hooks/useTransaction";
import { changeCurrentTransactionType } from "../../contexts/GlobalActions";
import { EXPENSES, IMCOME } from "../../constants/transactionTypes";
import { formatDate } from "../../utils/formatDatetime";

const Popup = ({ actions }) => {
  const [trans, setTrans] = useState(() => {
    const today = new Date();
    return {
      amount: "",
      date: formatDate(today),
    };
  });
  const [state, dispatch] = useTransaction();
  const autoSize = (e) => {
    let value = 1;
    if (e.key === "Backspace") value = -1;
    e.target.style.width = e.target.value.length + value + "ch";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTrans({
      ...trans,
      [name]: value,
    });
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
        <div className="nav-inner">
          <button className="cancle" onClick={actions.handleShowPopup}>
            Cancel
          </button>
          <span className="current-transaction">
            {state.currentTransactionType}
          </span>
        </div>
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
                value={trans.amount}
                onChange={handleInputChange}
                step={0.01}
                name="amount"
              />
            </div>
            <ChangeTransaction actions={{ handleChangeTransaction }} />
          </div>
          <FieldInpout>
            <input
              type="date"
              value={trans.date}
              onChange={handleInputChange}
              name="date"
            />
          </FieldInpout>
          <GridCategory>
            <div className="category-item">
              <img src="https://source.unsplash.com/random" alt="" />
              <h5>Snacks</h5>
            </div>
            <div className="category-item">
              <img src="https://source.unsplash.com/random" alt="" />
              <h5>Snacks</h5>
            </div>
            <div className="category-item">
              <img src="https://source.unsplash.com/random" alt="" />
              <h5>Snacks</h5>
            </div>
            <div className="category-item">
              <img src="https://source.unsplash.com/random" alt="" />
              <h5>Snacks</h5>
            </div>
            <div className="category-item">
              <img src="https://source.unsplash.com/random" alt="" />
              <h5>Snacks</h5>
            </div>
            <div className="category-item">
              <img src="https://source.unsplash.com/random" alt="" />
              <h5>Snacks</h5>
            </div>
            <div className="category-item">
              <img src="https://source.unsplash.com/random" alt="" />
              <h5>Snacks</h5>
            </div>
            <div className="category-item">
              <img src="https://source.unsplash.com/random" alt="" />
              <h5>Snacks</h5>
            </div>
            <div className="category-item">
              <img src="https://source.unsplash.com/random" alt="" />
              <h5>Snacks</h5>
            </div>
            <div className="category-item">
              <img src="https://source.unsplash.com/random" alt="" />
              <h5>Snacks</h5>
            </div>
            <div className="category-item">
              <img src="https://source.unsplash.com/random" alt="" />
              <h5>Snacks</h5>
            </div>
            <div className="category-item">
              <img src="https://source.unsplash.com/random" alt="" />
              <h5>Snacks</h5>
            </div>
          </GridCategory>
          <Notes>
            <textarea
              className="notes"
              placeholder="Note..."
              rows="1"
            ></textarea>
          </Notes>
        </form>
      </ContentInner>
    </Row>
  );
};

export default Popup;
