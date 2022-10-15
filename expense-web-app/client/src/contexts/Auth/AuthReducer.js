import { GET_USER_INFO, LOGIN, LOGOUT, REGISTER } from "./AuthType";
const authReducer = (state, action) => {
    switch (action.type) {
        case LOGIN:
            if (action.payload.token) {
                localStorage.setItem("token", action.payload.token);
            }
            return {
                ...state,
                token: action.payload.token,
                isAuthenticated: !!action.payload.token,
            };
        case LOGOUT:
            localStorage.remove("token");
            return {
                ...state,
                token: null,
                isAuthenticated: false,
            };
        case REGISTER:
            if (action.payload.token) {
                localStorage.setItem("token", action.payload.token);
            }
            return {
                ...state,
                token: action.payload.token,
                isAuthenticated: !!action.payload.token,
            };
        case GET_USER_INFO:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.data,
            };

        default:
            return state;
    }
};

export default authReducer;
