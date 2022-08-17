// npm
// import { useContext } from "react";
import { createPortal } from "react-dom";

// files
// import { ModalContext } from "../context/ModalContext";

export default function Modal({ modal, unSetModal }) {
  // const { modal } = useContext(ModalContext);

  return createPortal(
    <div id="modal">
      <div className="modal__background">
        <div className="modal__content">{modal}</div>
        <button onClick={unSetModal}>button</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
