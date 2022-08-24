// npm
import { useModal } from "../context/ModalContext";

// files
import useFirebase from "../hooks/useFirebase";

export default function ConfirmDelete({ path, id }) {
  // properties
  const { deleteDocument } = useFirebase();
  const { unSetModal } = useModal();

  // method
  function deleteItem() {
    deleteDocument(path, id);
    unSetModal();
  }

  return (
    <div>
      <h3>Are you sure you wish to delete this item</h3>
      <p>
        If <span>yes</span> then it means forever !!
      </p>
      <div>
        <button onClick={unSetModal}>No</button>
        <button onClick={deleteItem}>Yes</button>
      </div>
    </div>
  );
}
