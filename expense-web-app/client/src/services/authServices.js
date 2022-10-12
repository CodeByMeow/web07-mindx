import axiosInstance from "./axiosInstance";
const authServices = {
  login: (payload) => {
    return axiosInstance.post("/auth/login", payload);
  },
};

export default authServices;
