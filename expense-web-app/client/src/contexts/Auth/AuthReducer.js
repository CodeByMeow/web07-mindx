import { LOGIN, LOGOUT } from "./AuthType";
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

    default:
      return state;
  }
};

export default authReducer;
