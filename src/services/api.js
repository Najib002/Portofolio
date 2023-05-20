import axios from "axios";

const API = axios.create({
  baseURL: "https://raddythebrand.github.io/apex-legends",
});

export default API;
