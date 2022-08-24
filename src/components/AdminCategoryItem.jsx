// npm
import { Link } from "react-router-dom";
import { useModal } from "../context/ModalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToFile,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

// files
import ConfirmDelete from "./ConfirmDelete";

export default function AdminCategoryItem({ item }) {
  // properties
  const { title, info, thumbnail, id } = item;
  const { setModal } = useModal();

  const path = "menu/categories/content";

  return (
    <div className="card-item">
      <img src={thumbnail} alt={title} />
      <h2>{title}</h2>
      <p>{info}</p>
      <div className="cta-container">
        <Link to={`./category/${title}`} className="btn-icon__open">
          <FontAwesomeIcon
            icon={faArrowRightToFile}
            color="#eba63f"
            size="2x"
          />
        </Link>
        <button
          className="btn-icon__delete"
          onClick={() => setModal(<ConfirmDelete id={id} path={path} />)}
        >
          <FontAwesomeIcon icon={faTrashAlt} color="#e40c2b" size="2x" />
        </button>
      </div>
    </div>
  );
}
