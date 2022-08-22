// npm
import { Link } from "react-router-dom";

export default function AdminCategoryItem({ item }) {
  const { title, info } = item;
  return (
    <div>
      <h2>{title}</h2>
      <p>{info}</p>
      <Link to={`./category/${title}`}>
        <button>next</button>
      </Link>
    </div>
  );
}
