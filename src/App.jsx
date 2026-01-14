import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}
