// npm
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/" className="link-title">
            Holy BBQ
          </Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
