import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <>
      <AuthProvider>
        {/* routes here */}
        <Navbar />
        <AppRoutes />
        <Footer />
      </AuthProvider>
    </>
  );
}
