import { useReducer } from "react";
import AuthCtx from "./AuthContext";
import authReducer from "./AuthReducer";

const initialState = {
  token: localStorage.getItem("token") || null,
  isAuthenticated: !!localStorage.getItem("token"),
  user: null,
};

const AuthState = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthCtx.Provider value={{ state, dispatch }}>{children}</AuthCtx.Provider>
  );
};

export default AuthState;
