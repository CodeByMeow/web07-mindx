import axios from "axios";
import { BASE_URL_V1 } from "../constants/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL_V1,
  timeout: 10000,
});

export default axiosInstance;
