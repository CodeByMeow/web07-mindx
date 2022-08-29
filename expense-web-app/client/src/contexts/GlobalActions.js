import {
  ADD_TRANSACTION,
  SET_TRANSACTION_TYPE,
} from "../constants/transactionActions";

export const changeCurrentTransactionType = (transactionType) => ({
  type: SET_TRANSACTION_TYPE,
  payload: transactionType,
});
export const addTransaction = (data) => ({
  type: ADD_TRANSACTION,
  payload: data,
});
