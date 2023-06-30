import axios from "axios";
import { getItem } from "./storage";

export const api = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});

const setAuthHeader = () => {
  const token = getItem("token");
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
};

export const get = async (url, config = {}, isProtected) => {
  if (isProtected) {
    setAuthHeader();
  }
  return await api.get(url, config);
};

export const post = async (url, data, config = {}, isProtected) => {
  if (isProtected) {
    setAuthHeader();
  }
  return await api.post(url, data, config);
};

export const put = async (url, data, config = {}, isProtected) => {
  if (isProtected) {
    setAuthHeader();
  }
  return await api.put(url, data, config);
};

export const del = async (url, config = {}, isProtected) => {
  if (isProtected) {
    setAuthHeader();
  }
  return await api.delete(url, config);
};
