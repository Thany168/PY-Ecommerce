import axios from "axios";

export const productApi = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const getProducts = () => productApi.get("/products");
