import axios from "axios";

export default axios.create({
  baseURL: "http://srg.smarttrade.website/api/v1",
  headers: {
    "Content-type": "application/json"
  }
});