// src/services/adminService.js
import api from "./api";

export const getAllUsers = () => api.get("/admin/users");
export const createProduct = (data) => api.post("/admin/products", data);
