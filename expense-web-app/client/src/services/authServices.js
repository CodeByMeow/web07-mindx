import axios from "axios";
import { LOGIN_URL } from "../constants/api";

const authServices = {
  login: function (payload) {
    return axios({
      method: "post",
      url: LOGIN_URL,
      header: {},
      data: payload,
    });
  },
};

export default authServices;
