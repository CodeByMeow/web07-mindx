import axiosInstance from "./axiosInstance";
const authServices = {
  login: (payload) => {
    return axiosInstance.post("/auth/login", payload);
  },
  verifyToken: () => {
    return axiosInstance.get("/auth");
  },
};

export default authServices;
