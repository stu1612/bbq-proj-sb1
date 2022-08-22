//npm
import { useReducer } from "react";
import { setDoc, doc } from "firebase/firestore";

// files
import { fireStore } from "../firebase/firebase";

// properties
const initState = {
  document: null,
  isLoading: false,
  error: null,
  success: null,
};

// reducer method
function createReducer(state, action) {
  switch (action.type) {
    case "IS_PENDING": {
      return { document: null, isLoading: true, error: null, success: null };
    }
    case "ADD_DOC": {
      return {
        document: action.payload,
        isLoading: false,
        error: null,
        success: true,
      };
    }
    case "ERROR": {
      return {
        document: null,
        isLoading: false,
        error: action.payload,
        success: null,
      };
    }
    default:
      return state;
  }
}

export default function useCreate() {
  const [response, dispatch] = useReducer(createReducer, initState);

  async function addDocumentToCollection(path, id, data) {
    dispatch({ type: "IS_PENDING" });
    try {
      const ref = doc(fireStore, path, id);
      const document = await setDoc(ref, data);
      dispatch({ type: "ADD_DOC", payload: document });
    } catch (err) {
      dispatch({ type: "ERROR", payload: err.message });
    }
  }

  return { addDocumentToCollection, response };
}
