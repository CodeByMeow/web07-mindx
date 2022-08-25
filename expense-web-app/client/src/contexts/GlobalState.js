import { createContext } from "react";

const initialState = {
  transactions: [],
};

const GlobalState = createContext(initialState);
