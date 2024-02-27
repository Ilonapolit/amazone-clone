import axios from "axios";

export const privateAxios = axios.create({
  baseURL: "/auth/register",
});

export const setPrivateAccessToken = (token: string) => {
  privateAxios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
