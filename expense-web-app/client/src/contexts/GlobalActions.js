import { SET_TRANSACTION_TYPE } from "../constants/transactionTypes";

export const changeCurrentTransactionType = (transactionType) => {
  return { type: SET_TRANSACTION_TYPE, payload: transactionType };
};
