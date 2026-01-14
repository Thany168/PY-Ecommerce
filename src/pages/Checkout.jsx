import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";

export default function Checkout() {
  const { cart, total } = useContext(CartContext);
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const handleChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handlePayment = () => {
    // Validation
    if (
      !shippingInfo.name ||
      !shippingInfo.email ||
      !shippingInfo.address ||
      !shippingInfo.phone
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all shipping details!",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Order Placed!",
      html: `<strong>Total Paid:</strong> $${total.toFixed(2)}<br/>
             <strong>Payment Method:</strong> ${paymentMethod}`,
      timer: 2000,
      showConfirmButton: false,
    });

    // Reset form or redirect if needed
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Shipping Form */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={shippingInfo.name}
            onChange={handleChange}
            className="border px-4 py-2 rounded focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={shippingInfo.email}
            onChange={handleChange}
            className="border px-4 py-2 rounded focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="address"
            placeholder="Shipping Address"
            value={shippingInfo.address}
            onChange={handleChange}
            className="border px-4 py-2 rounded focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={shippingInfo.phone}
            onChange={handleChange}
            className="border px-4 py-2 rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Payment Method */}
        <h2 className="text-2xl font-bold mt-6 mb-2">Payment Method</h2>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Cash on Delivery
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="card"
              checked={paymentMethod === "card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Credit/Debit Card
          </label>
        </div>

        <button
          onClick={handlePayment}
          className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg"
        >
          Pay Now (${total.toFixed(2)})
        </button>
      </div>

      {/* Order Summary */}
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <div className="flex-1 overflow-y-auto">
          {cart.length === 0 && <p>Your cart is empty.</p>}
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <p className="font-bold">{item.title}</p>
                  <p className="text-gray-500">
                    {item.quantity} x ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
              <p className="font-bold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between font-bold text-xl">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
