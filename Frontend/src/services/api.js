import axios from "axios";
const API = axios.create({
  baseURL: "https://captivating-success-production-985a.up.railway.app",
  headers: { Authorization: "Bearer mysecretToken"}
});

export default API;