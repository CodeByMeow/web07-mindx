import { useReducer } from "react";
import AuthCtx from "./AuthContext";
import authReducer from "./AuthReducer";
import useToken from "../../hooks/useToken";

const initialState = {
    token: localStorage.getItem("token") || null,
    isAuthenticated: false,
    user: null,
};

const AuthState = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    const token = useToken(dispatch);
    return (
        <AuthCtx.Provider value={{ state, dispatch }}>
            {children}
        </AuthCtx.Provider>
    );
};

export default AuthState;
