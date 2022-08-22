// npm
import { Routes, Route } from "react-router-dom";

// files
import Admin from "../pages/Admin";

export default function RoutesAdmin() {
  return (
    <Routes>
      <Route path="/" element={<Admin />} />
    </Routes>
  );
}
