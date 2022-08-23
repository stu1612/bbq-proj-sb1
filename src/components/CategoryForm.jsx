// npm
import { signInWithEmailLink } from "firebase/auth";
import { useState, useEffect } from "react";

// files
import InputField from "../components/InputField";
import data from "../data/category.json";
import useCreate from "../hooks/useCreateDocs";

export default function CategoryForm() {
  // local state
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  // const [thumbnail, setThumbnail] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  // properties
  const { addDocumentToCollection, response } = useCreate();

  const path = "menu/categories/content";
  const types = ["image/png", "image/jpeg", "image/jpg"];

  function fileHandleChange(event) {
    let selected = event.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select a png / jpg or jpeg file");
    }
  }

  // methods
  function handleSubmit(event) {
    event.preventDefault();
    const id = title;
    const doc = { title, info, file };
    addDocumentToCollection(path, id, doc);
  }

  useEffect(() => {
    if (response.success) {
      setTitle("");
      setInfo("");
    }
  }, [response.success]);

  return (
    <form onSubmit={handleSubmit}>
      <InputField setup={data.title} state={[title, setTitle]} />
      <InputField setup={data.info} state={[info, setInfo]} />
      {/* <InputField setup={data.thumbnail} state={[thumbnail, setThumbnail]} /> */}
      <input type="file" onChange={fileHandleChange} required />
      {error && <small>{error}</small>}
      <button>Submit</button>
    </form>
  );
}
