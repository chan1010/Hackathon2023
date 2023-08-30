import axios from "axios";

const BASE_URL = "https://4a1cwmmf9a.execute-api.ap-southeast-1.amazonaws.com/staging";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = (token) => { 
  return axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${token}` },
  });
}