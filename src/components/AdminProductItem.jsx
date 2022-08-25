// npm
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

// files
import { useModal } from "../context/ModalContext";
import ConfirmDelete from "./ConfirmDelete";
import AdminCategoryDetail from "./AdminCategoryDetail";

export default function AdminProductItem({ item }) {
  // properties
  const { subTitle, thumbnail, id } = item;
  const { setModal } = useModal();
  const { title } = useParams();

  const path = `menu/categories/content/${title}/content`;

  return (
    <div className="card--item">
      <img src={thumbnail} alt={subTitle} />
      <h2>{subTitle}</h2>
      <div className="card--item__links">
        <button onClick={() => setModal(<AdminCategoryDetail item={item} />)}>
          <FontAwesomeIcon icon={faBoxOpen} color="#eba63f" size="2x" />
        </button>
        <button onClick={() => setModal(<ConfirmDelete id={id} path={path} />)}>
          <FontAwesomeIcon icon={faTrashAlt} color="#e40c2b" size="2x" />
        </button>
      </div>
    </div>
  );
}
