import axios from "axios";
import { LOGIN_URL } from "../constants/api";

const categoryService = {
  getCategory: axios.get(LOGIN_URL, {
    headers: {},
  }),
};

export default categoryService;
