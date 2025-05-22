import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/ContactPage";
import CustomNavbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";
import ProducId from "./pages/ProducId";
import Inicio from "./pages/Inicio";

const App = () => {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/tienda" element={<ProductPage />} />
        <Route path="/home" element={<Inicio />} />
        <Route path="/contactanos" element={<ContactPage />} />
        <Route path="/tienda/:id" element={<ProducId />} />

        <Route path="*" element={<h1>Página no encontrada</h1>} />
      </Routes>
    </Router>
  );
};

export default App;