import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "02da33b3aa854143a5aed0f691750087",
  },
});
