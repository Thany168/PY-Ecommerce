import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-900">
            Phum<span className="text-blue-600">Yerng</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                `font-medium ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              Products
            </NavLink>

            <NavLink
              to="/cart"
              className="relative font-medium text-gray-700 hover:text-blue-600"
            >
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </NavLink>

            {!user ? (
              <NavLink
                to="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Login
              </NavLink>
            ) : (
              <button
                onClick={logout}
                className="text-gray-700 hover:text-red-600"
              >
                Logout
              </button>
            )}
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className="block text-gray-700 hover:text-blue-600"
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              onClick={() => setOpen(false)}
              className="block text-gray-700 hover:text-blue-600"
            >
              Products
            </NavLink>

            <NavLink
              to="/cart"
              onClick={() => setOpen(false)}
              className="block text-gray-700 hover:text-blue-600"
            >
              Cart ({cartCount})
            </NavLink>

            {!user ? (
              <NavLink
                to="/login"
                onClick={() => setOpen(false)}
                className="block bg-blue-600 text-white px-4 py-2 rounded-md text-center"
              >
                Login
              </NavLink>
            ) : (
              <button
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="block w-full text-left text-red-600"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
