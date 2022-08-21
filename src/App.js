// npm
import { BrowserRouter, Routes, Route } from "react-router-dom";

// files
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import ProductDetail from "./pages/ProductDetail";
import "./styles/main.scss";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="menu/category/:title" element={<Categories />} />
          <Route path="/product" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
