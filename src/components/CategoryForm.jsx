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
  // const [error, setError] = useState(null);

  const path = "menu/categories/content";
  const imgPath = `assets/image-${title}.png`;

  // properties
  const { addDocument, response } = useFirebase();

  // const types = ["image/png", "image/jpeg", "image/jpg"];

  function fileHandler(event) {
    let selected = event.target.files[0];
    if (selected) {
      setFile(selected);
    } else {
      setFile(null);
    }
  }

  useEffect(() => {
    async function loadImage(path) {
      // const imgPath = `assets/image-${title}.png`;
      if (file) {
        await createFile(path, file).then((res) => setThumbnail(res));
      } else return;
    }
    loadImage(`assets/image-${title}.png`);
  }, [file]);

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
    // const imgPath = `assets/image-${title}.png`;

    try {
      // const imgPath = `assets/image-${title}.png`;
      // await createFile(imgPath, file).then((res) => setThumbnail(res));
      // const id = title;
      // const doc = { title, info, thumbnail };
      await addDocument(path, id, doc);
      setLoading(false);
      setError(null);
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
    </form>
  );
}
