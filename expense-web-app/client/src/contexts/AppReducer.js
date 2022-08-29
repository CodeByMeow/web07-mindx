import {
  ADD_TRANSACTION,
  SET_TRANSACTION_TYPE,
} from "../constants/transactionActions";
import { getSingleGroupBy } from "../utils/handleObject";

const setTransactionType = (state, action) => {
  return { ...state, currentTransactionType: action.payload };
};

const addTransaction = (state, action) => {
  const { category } = action.payload;
  const transactionCurrentCategory = getSingleGroupBy(
    state.transactions,
    "category",
    category
  );
  console.log(transactionCurrentCategory);
  //TODO: Handle total transition
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
