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
    <div className="delete">
      <h1>Are you sure you wish to delete this item?</h1>
      <p>
        If <span>yes</span> then it means forever !!
      </p>
      <div className="delete__buttons">
        <button onClick={unSetModal}>Cancel</button>
        <button onClick={deleteItem}>Yes, delete</button>
      </div>
    </div>
  );
}
