import { useEffect } from "react";
import axiosInstance from "../services/axiosInstance";
import authServices from "../services/authServices";
import actionCreator from "../utils/actionCreator";
import { GET_USER_INFO } from "../contexts/Auth/AuthType";

const useToken = (dispatch) => {
    const token = localStorage.getItem("token") || null;

    const verifyToken = async () => {
        const verifyToken = await authServices.verifyToken();
        dispatch(actionCreator(GET_USER_INFO, verifyToken.data));
    };

    useEffect(() => {
        axiosInstance.defaults.headers.common["token"] = token;
        verifyToken();
    }, []);

    return verifyToken.data;
};

export default useToken;
