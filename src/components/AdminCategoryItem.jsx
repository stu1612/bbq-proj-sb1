// npm
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faArrowRightToFile,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

// files
import { useModal } from "../context/ModalContext";
import ConfirmDelete from "./ConfirmDelete";
import AdminCategoryDetail from "./AdminCategoryDetail";

export default function AdminCategoryItem({ item }) {
  // properties
  const { title, thumbnail, id } = item;
  const { setModal } = useModal();

  const path = "menu/categories/content";
  const imgPath = `assets/image-${title}.png`;

  return (
    <div className="card--item">
      <img src={thumbnail} alt={title} />
      <h2>{title}</h2>
      <div className="card--item__links">
        <button onClick={() => setModal(<AdminCategoryDetail item={item} />)}>
          <FontAwesomeIcon icon={faBoxOpen} color="#eba63f" size="2x" />
        </button>
        <Link to={`./category/${title}`}>
          <FontAwesomeIcon
            icon={faArrowRightToFile}
            color="#3cbcc3"
            size="2x"
          />
        </Link>
        <button
          onClick={() =>
            setModal(<ConfirmDelete id={id} path={path} imgPath={imgPath} />)
          }
        >
          <FontAwesomeIcon icon={faTrashAlt} color="#e40c2b" size="2x" />
        </button>
      </div>
    </div>
  );
}
