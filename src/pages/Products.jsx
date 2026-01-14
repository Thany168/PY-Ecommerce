// src/pages/Products.jsx
import { useEffect, useState } from "react";
import { getProducts } from "../services/publicApi"; // your current api
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products once
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await getProducts();
        const allProducts = res.data;

        setProducts(allProducts);
        setFilteredProducts(allProducts);

        // Get unique categories
        const uniqueCategories = [
          "all",
          ...new Set(allProducts.map((p) => p.category)),
        ];
        setCategories(uniqueCategories);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products when category or search changes
  useEffect(() => {
    let result = products;

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term)
      );
    }

    setFilteredProducts(result);
  }, [selectedCategory, searchTerm, products]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-xl">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header + Filters */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Our Products
          </h1>
          <p className="text-gray-600 mb-6">Discover our latest collection</p>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            {/* Search */}
            <div className="w-full sm:w-80">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    px-5 py-2.5 rounded-full text-sm font-medium transition-all
                    ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                    }
                  `}
                >
                  {category === "all"
                    ? "All Products"
                    : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <p className="text-xl">No products found</p>
            <p className="mt-2">Try changing your search or filter</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <Link
                to={`/products/${product.id}`}
                key={product.id}
                // to={`/product/${product.id}`}
                className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden bg-gray-50 p-6">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {product.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-500 mb-3 capitalize">
                    {product.category}
                  </p>

                  <div className="flex items-center justify-between">
                    <p className="text-xl font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </p>
                    <Link
                      to={`/products/${product.id}`} // navigate to product detail
                      className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full hover:bg-blue-200"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
