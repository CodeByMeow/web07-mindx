import {} from "../constants/transactionTypes";
export default (state, action) => {
  switch (action.type) {
    case SET_TRANSACTION_TYPE:
      return { ...state, current_transaction_type: action.payload };

    default:
      return state;
  }
};
