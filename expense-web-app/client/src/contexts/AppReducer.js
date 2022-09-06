import {
  ADD_TRANSACTION,
  SET_TRANSACTION_TYPE,
} from "../constants/transactionActions";
import { EXPENSES } from "../constants/transactionTypes";

const setTransactionType = (state, action) => {
  return { ...state, currentTransactionType: action.payload };
};

const addTransaction = (state, action) => {
  const sign = state.currentTransactionType === EXPENSES ? -1 : 1;
  let total = state.totalSpent + action.payload.amount * sign;
  total = Math.round(total * 100) / 100;

  return {
    ...state,
    transactions: [...state.transactions, action.payload],
    totalSpent: total,
  };
};

export default (state, action) => {
  switch (action.type) {
    case SET_TRANSACTION_TYPE:
      return setTransactionType(state, action);
    case ADD_TRANSACTION:
      return addTransaction(state, action);
    default:
      return state;
  }
};
