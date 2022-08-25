// npm
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

// files
import { useModal } from "../context/ModalContext";

export default function OpenFormButton({ form }) {
  // properties
  const { setModal } = useModal();
  return (
    <button onClick={() => setModal(form)}>
      <FontAwesomeIcon icon={faCirclePlus} color="#3cbcc3" size="3x" />
    </button>
  );
}
