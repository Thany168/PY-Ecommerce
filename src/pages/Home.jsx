import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Welcome to <span className="text-yellow-300">ShopX</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Your one-stop destination for premium products, seamless shopping,
            and fast delivery.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/products"
              className="bg-white text-blue-700 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              Shop Now
            </Link>

            <Link
              to="/about"
              className="border border-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-700 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Why Shop With Us?
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <FeatureCard
              title="Premium Quality"
              description="Carefully curated products to ensure the highest quality."
              icon=""
            />
            <FeatureCard
              title="Fast Delivery"
              description="Reliable and fast shipping to your doorstep."
              icon=""
            />
            <FeatureCard
              title="Secure Payment"
              description="Your payments are protected with industry standards."
              icon=""
            />
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900">
            Start Shopping Today
          </h2>
          <p className="mt-4 text-gray-600">
            Discover products you’ll love, backed by quality and service you can
            trust.
          </p>

          <Link
            to="/products"
            className="inline-block mt-8 bg-blue-600 text-white px-10 py-4 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Explore Products
          </Link>
        </div>
      </section>
    </main>
  );
}

/* Reusable Feature Card */
function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition">
      <div className="text-4xl">{icon}</div>
      <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}
