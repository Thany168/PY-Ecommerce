// src/pages/NotFound.jsx
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold"
      >
        Go to Home
      </button>
    </div>
  );
}
