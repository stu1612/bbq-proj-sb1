// npm
import { Routes, Route } from "react-router-dom";

// files
import Categories from "../pages/Categories";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import Navbar from "../components/Navbar";
import ProductDetail from "../pages/ProductDetail";

export default function RoutesUser() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="menu/category/:title" element={<Categories />} />
        <Route path="product" element={<ProductDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}
