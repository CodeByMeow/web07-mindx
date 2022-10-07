import axios from "axios";
import { USER_URL } from "../constants/api";

export default {
  create: (data) => {
    return axios({
      method: "post",
      url: USER_URL,
      headers: {},
      data,
    });
  },
};
