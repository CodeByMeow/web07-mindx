import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { EXPENSES, INCOME } from "../../constants/transactionTypes";
import { formatDate } from "../../utils/formatDatetime";
import {
  ChangeTransaction,
  ContentInner,
  FieldInpout,
  Nav,
  Notes,
  Row,
  SubmitBtn,
} from "./Popup.style";
import useTransaction from "../../hooks/useTransaction";
import {
  addTransaction,
  changeCurrentTransactionType,
} from "../../contexts/GlobalActions";
import Category from "../../components/Category";

const Popup = ({ actions }) => {
  const [trans, setTrans] = useState(() => {
    const today = new Date();
    return {
      amount: "",
      date: formatDate(today),
      category: "",
      note: "",
      id: uuidv4(),
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

  const handleSelectCategory = (categoryId) => {
    setTrans({
      ...trans,
      category: categoryId,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTransaction(trans));
    actions.handleShowPopup();
  };

  const handleChangeTransaction = () => {
    const transType =
      state.currentTransactionType === EXPENSES ? INCOME : EXPENSES;
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
          <Category actions={{ handleSelectCategory }} />
          <Notes>
            <textarea
              className="notes"
              placeholder="Note..."
              rows="1"
              onChange={handleInputChange}
              name="note"
            ></textarea>
          </Notes>
          <SubmitBtn>
            <button type="submit" className="submit">
              Save
            </button>
          </SubmitBtn>
        </form>
      </ContentInner>
    </Row>
  );
};

export default Popup;
