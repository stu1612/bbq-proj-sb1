// npm
import { useState, useEffect } from "react";

// files
import InputField from "../components/InputField";
import data from "../data/category.json";
import useFirebase from "../hooks/useFirebase";
import { createFile } from "../firebase/cloudStorage";

export default function CategoryForm() {
  // local state
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isValid, setIsValid] = useState(null);
  // const [error, setError] = useState(null);

  const path = "menu/categories/content";
  const imgPath = `assets/image-${title}.png`;

  // properties
  const { addDocument, response } = useFirebase();

  const types = ["image/png", "image/jpeg", "image/jpg"];

  function fileHandler(event) {
    let selected = event.target.files[0];
    if (selected && types.includes(selected.type)) {
      setIsValid(true);
      setFile(selected);
      setError("");
    } else {
      setIsValid(null);
      setFile(null);
      setError("Please select valid file input (png or jpg)");
    }
  }

  useEffect(() => {
    async function loadImage(path) {
      // const imgPath = `assets/image-${title}.png`;
      if (isValid) {
        await createFile(path, file).then((res) => setThumbnail(res));
      } else setThumbnail(null);
    }
    loadImage(`assets/image-${title}.png`);
  }, [isValid]);

  useEffect(() => {
    if (response.success) {
      setTitle("");
      setInfo("");
      setFile(null);
    }
  }, [response.success]);

  // methods
  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const id = title;
    const doc = { title, info, thumbnail };
    try {
      if (isValid) {
        await addDocument(path, id, doc);
        setLoading(false);
        setError(null);
      }
    } catch (err) {
      setError(err);
      setLoading(false);
      console.log(err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputField setup={data.title} state={[title, setTitle]} />
      <InputField setup={data.info} state={[info, setInfo]} />
      <input type="file" accept="/image/*" onChange={fileHandler} required />
      <button>Submit</button>
      {error && <p>{error}</p>}
    </form>
  );
}
