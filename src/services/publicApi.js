// src/services/publicApi.js
import axios from "axios";

export const publicApi = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const getProducts = () => publicApi.get("/products");
