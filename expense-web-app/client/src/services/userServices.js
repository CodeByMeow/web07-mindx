import axiosInstance from "./axiosInstance";

export default {
  create: (payload) => {
    return axiosInstance.post("/users", payload);
  },
};
