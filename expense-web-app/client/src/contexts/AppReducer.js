import {
  ADD_TRANSACTION,
  SET_TRANSACTION_TYPE,
} from "../constants/transactionActions";

const setTransactionType = (state, action) => {
  return { ...state, currentTransactionType: action.payload };
};

const addTransaction = (state, action) => {
  return {
    ...state,
    transactions: [...state.transactions, action.payload],
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
