import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";

import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/authentication/Login";
import AdminDashboard from "../pages/admin/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Register from "../pages/authentication/Register";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} /> {/* product list */}
      <Route path="/products/:id" element={<ProductDetail />} />{" "}
      {/* product detail */}
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
