// npm
import { Link } from "react-router-dom";

// files
import useFirebase from "../hooks/useFirebase";

export default function AdminCategoryItem({ item }) {
  // properties
  const { title, info, thumbnail, id } = item;
  const { deleteDocument } = useFirebase();

  const path = "menu/categories/content";

  return (
    <div className="card-item">
      <h2>{title}</h2>
      <p>{info}</p>
      <img src={thumbnail} alt={title} />
      <div className="cta-container">
        <Link to={`./category/${title}`}>
          <button>next</button>
        </Link>
        <button onClick={() => deleteDocument(path, id)}>delete</button>
      </div>
    </div>
  );
}
