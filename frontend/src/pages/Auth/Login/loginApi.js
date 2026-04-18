import axios from "axios";
import { API_BASE_URL } from "../../config/serverApiConfig";

const API_BASE = `${API_BASE_URL}/api`;

// change this if your backend route is different:
export const loginRequest = async (payload) => {
  const res = await axios.post(`${API_BASE}/auth/login`, payload);
  return res.data;
};
