import { SET_TRANSACTION_TYPE } from "../constants/transactionTypes";

export default (state, action) => {
  switch (action.type) {
    case SET_TRANSACTION_TYPE:
      return { ...state, currentTransactionType: action.payload };

    default:
      return state;
  }
};
