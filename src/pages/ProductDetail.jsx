import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../services/publicApi";
import Swal from "sweetalert2";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

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
      existing.quantity += 1; // increase quantity if already in cart
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    Swal.fire({
      icon: "success",
      title: "Added to Cart!",
      text: `${product.title} has been added to your cart.`,
      timer: 1500,
      showConfirmButton: false,
    });
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-8 flex gap-8">
      <img src={product.image} alt={product.title} className="w-1/3" />
      <div className="w-2/3">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="my-4">{product.description}</p>
        <p className="text-xl font-semibold">${product.price}</p>
        <button
          onClick={addToCart}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add to Cart
        </button>
        <button
          onClick={() => navigate("/cart")}
          className="mt-4 ml-4 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
        >
          Go to Cart
        </button>
      </div>
    </div>
  );
}
