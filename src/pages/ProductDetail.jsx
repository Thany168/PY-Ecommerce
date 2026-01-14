import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../services/productApi";
import Swal from "sweetalert2";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo({ top: 0, behavior: "smooth" });

    getProducts().then((res) => {
      const found = res.data.find((p) => p.id === parseInt(id));
      setProduct(found);
    });
  }, [id]);

  useEffect(() => {
    getProducts().then((res) => {
      const found = res.data.find((p) => p.id === parseInt(id));
      setProduct(found);
    });
  }, [id]);

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: "Added to Cart!",
      text: `${product.title} has been added to your cart.`,
      timer: 1500,
      showConfirmButton: false,
    });
  };

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
        {/* Product Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-80 md:max-h-96 object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>
          <p className="my-4 text-gray-700">{product.description}</p>
          <p className="text-xl md:text-2xl font-semibold text-green-600">
            ${product.price}
          </p>

          <div className="flex flex-col sm:flex-row mt-6 gap-4">
            <button
              onClick={addToCart}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition duration-300"
            >
              Add to Cart
            </button>
            <button
              onClick={() => navigate("/cart")}
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded transition duration-300"
            >
              Go to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
