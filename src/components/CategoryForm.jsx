// npm
import { useState, useEffect } from "react";

// files
import InputField from "../components/InputField";
import data from "../data/category.json";
import useCreate from "../hooks/useCreateDocs";
import useStorage from "../hooks/useStorage";
import slugify from "../scripts/slugify";

export default function CategoryForm() {
  // local state
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [file, setFile] = useState(null);
  // const [error, setError] = useState(null);

  const fileTitle = slugify(title);

  const path = "menu/categories/content";
  const filePath = `/files/${fileTitle}`;

  // properties
  const { addDocumentToCollection, response } = useCreate();
  const { uploadFile, progress, error } = useStorage(filePath);

  // const types = ["image/png", "image/jpeg", "image/jpg"];

  function fileHandleChange(event) {
    let selected = event.target.files[0];

    if (selected) {
      // setFile(selected);
      // setError("");
      setFile(selected);
      setThumbnail(selected);
    } else {
      setFile(null);
      // setError("Please select a png / jpg or jpeg file");
    }
  }

  // methods
  async function handleSubmit(event) {
    event.preventDefault();
    await uploadFile(file);
    const id = title;
    const doc = { title, info, thumbnail };
    await addDocumentToCollection(path, id, doc);
  }

  useEffect(() => {
    if (response.success) {
      setTitle("");
      setInfo("");
    }
  }, [response.success]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        onChange={fileHandleChange}
        accept="/image/*"
        required
      />
      <InputField setup={data.title} state={[title, setTitle]} />
      <InputField setup={data.info} state={[info, setInfo]} />
      {/* <InputField setup={data.thumbnail} state={[thumbnail, setThumbnail]} /> */}

      {error && <small>{error}</small>}
      {progress && <p>{progress} %</p>}
      <button>Submit</button>
    </form>
  );
}
