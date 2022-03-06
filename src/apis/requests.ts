import axios from "axios";

export const pixabayClient = axios.create({
  baseURL: "https://pixabay.com",
});
