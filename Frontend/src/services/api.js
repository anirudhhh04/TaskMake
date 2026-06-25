import axios from "axios";
const API = axios.create({
  baseURL: "https://taskmake.onrender.com",
  headers: { Authorization: "Bearer mysecretToken"}
});

export default API;