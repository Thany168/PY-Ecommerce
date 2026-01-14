// components/Footer.jsx
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1 - Company */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">PhumYerng</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted online shopping destination since 2023. Quality
              products, fast delivery.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaTiktok size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Shop */}
          <div>
            <h4 className="text-white font-semibold mb-5">Shop</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/products"
                  className="hover:text-white transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="hover:text-white transition-colors"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to="/new-arrivals"
                  className="hover:text-white transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  to="/best-sellers"
                  className="hover:text-white transition-colors"
                >
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link to="/sale" className="hover:text-white transition-colors">
                  On Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Customer Service */}
          <div>
            <h4 className="text-white font-semibold mb-5">Customer Service</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="hover:text-white transition-colors"
                >
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link
                  to="/returns"
                  className="hover:text-white transition-colors"
                >
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/track-order"
                  className="hover:text-white transition-colors"
                >
                  Track Your Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter + Payment */}
          <div>
            <h4 className="text-white font-semibold mb-5">Stay Updated</h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our newsletter for exclusive offers
            </p>

            <form className="flex flex-col sm:flex-row gap-2 mb-8">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 flex-1 text-sm"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg font-medium transition-colors text-sm whitespace-nowrap">
                Subscribe
              </button>
            </form>

            <div className="flex flex-wrap gap-3">
              {/* You can replace with real payment icons */}
              <div className="bg-gray-800 px-3 py-1.5 rounded text-xs">
                Visa
              </div>
              <div className="bg-gray-800 px-3 py-1.5 rounded text-xs">
                Mastercard
              </div>
              <div className="bg-gray-800 px-3 py-1.5 rounded text-xs">
                PayPal
              </div>
              <div className="bg-gray-800 px-3 py-1.5 rounded text-xs">COD</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm gap-4">
            <div>
              © {new Date().getFullYear()} PhumYerng. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link
                to="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
