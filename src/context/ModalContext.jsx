// V1
// import { createContext, useContext, useState } from "react";

// const Context = createContext(null);

// export function ModalProvider({ children }) {
//   const [modal, setModal] = useState(null);

//   const value = { modal, setModal };

//   return <Context.Provider value={value}>{children}</Context.Provider>;
// }

// export function useModal() {
//   const context = useContext(Context);
//   const errorText =
//     "To use useModal(), you need to wrap the parent component with <ModalProvider/>";

//   if (!context) throw new Error(errorText);

//   return context;
// }

import { useCallback, createContext, useContext, useState } from "react";
import Modal from "../components/Modal";

const ModalContext = createContext();

const ModalProvider = (props) => {
  const [modal, setModal] = useState();
  const unSetModal = useCallback(() => {
    setModal();
  }, [setModal]);

  return (
    <ModalContext.Provider value={{ unSetModal, setModal }} {...props}>
      {props.children}
      {modal && <Modal modal={modal} unSetModal={unSetModal} />}
    </ModalContext.Provider>
  );
};

const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a UserProvider");
  }

  return context;
};

export { ModalProvider, useModal };
