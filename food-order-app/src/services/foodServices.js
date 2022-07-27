import axios from "axios";

const foodService = {
   get(url) {
      const data = axios.get(url);
      return data;
   },
};

export default foodService;
