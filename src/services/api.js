import axios from "axios";

const API = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
});

export default API;
