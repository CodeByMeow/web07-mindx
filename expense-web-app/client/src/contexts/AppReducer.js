import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  SET_TRANSACTION_TYPE,
  UPDATE_TRANSACTION,
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

const updatedTransaction = (state, action) => {
  const currentSign = state.currentTransactionType === EXPENSES ? -1 : 1;
  const oldSign = action.payload.old_type === EXPENSES ? 1 : -1;
  const oldAmount = action.payload.old_amount * oldSign;
  const newAmount = action.payload.amount * currentSign;

  let total = state.totalSpent + oldAmount + newAmount;
  total = Math.round(total * 100) / 100;

  const { id } = action.payload;
  const idx = state.transactions.findIndex((item) => item.id === id);
  state.transactions.splice(idx, 1, action.payload);

  return {
    ...state,
    transactions: [...state.transactions],
    totalSpent: total,
  };
};

const delelteTransaction = (state, action) => {
  const transactionsDeleted = state.transactions.filter(
    (trans) => trans.id !== action.payload.id
  );
  const sign = action.payload.type === EXPENSES ? 1 : -1;
  let total = state.totalSpent + parseFloat(action.payload.amount) * sign;
  total = Math.round(total * 100) / 100;

  return {
    ...state,
    transactions: transactionsDeleted,
    totalSpent: total,
  };
};

export const AppReducer = (state, action) => {
  switch (action.type) {
    case SET_TRANSACTION_TYPE:
      return setTransactionType(state, action);

    case ADD_TRANSACTION:
      return addTransaction(state, action);

    case UPDATE_TRANSACTION:
      return updatedTransaction(state, action);

    case DELETE_TRANSACTION:
      return delelteTransaction(state, action);

    default:
      return state;
  }
};

export default AppReducer;
