import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateQuantity = (id, delta) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    Swal.fire({
      icon: "success",
      title: "Removed!",
      text: "Item removed from your cart.",
      timer: 1200,
      showConfirmButton: false,
    });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0)
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold">Your Cart is Empty</h2>
        <button
          onClick={() => navigate("/products")}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Shop Now
        </button>
      </div>
    );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <div className="grid grid-cols-1 gap-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border p-4 rounded-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-contain"
            />
            <div className="flex-1 mx-4">
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="text-gray-700">${item.price}</p>
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-500 font-bold hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right">
        <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
        <button
          onClick={() => navigate("/checkout")}
          className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
