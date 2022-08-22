// npm
import { useState, useEffect } from "react";

// files
import InputField from "../components/InputField";
import data from "../data/category.json";
import useCreate from "../hooks/useCreateDocs";

export default function CategoryForm() {
  // local state
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  // properties
  const { addDocumentToCollection, response } = useCreate();

  const path = "menu/categories/content";

  // methods
  function handleSubmit(event) {
    event.preventDefault();
    const id = title;
    const doc = { title, info, thumbnail };
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
      <InputField setup={data.thumbnail} state={[thumbnail, setThumbnail]} />
      <button>Submit</button>
    </form>
  );
}
