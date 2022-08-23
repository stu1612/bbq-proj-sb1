// npm
import { useState, useEffect } from "react";

// files
import InputField from "../components/InputField";
import data from "../data/category.json";
import useCreate from "../hooks/useCreateDocs";
import useStorage from "../hooks/useStorage";
import { createFile } from "../firebase/cloudStorage";
// import useStorage from "../hooks/useStorage";
// import slugify from "../scripts/slugify";

export default function CategoryForm() {
  // local state
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [file, setFile] = useState(null);
  // const [error, setError] = useState(null);

  // const fileTitle = slugify(title);

  const path = "menu/categories/content";
  // const filePath = `/files/${fileTitle}`;

  // properties
  const { addDocumentToCollection, response } = useCreate();
  // const { progress, url, error } = useStorage();
  // const { uploadFile, progress, error } = useStorage(filePath);

  // const types = ["image/png", "image/jpeg", "image/jpg"];

  // function fileHandler(event) {
  //   let selected = event.target.files[0];
  //   if (selected) {
  //     setFile(selected);
  //   } else {
  //     setFile(null);
  //   }
  // }

  // methods
  async function handleSubmit(event) {
    event.preventDefault();
    const imgPath = `assets/image-${title}.png`;
    const newImg = await createFile(imgPath, file);
    setThumbnail(newImg);
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
      <InputField setup={data.title} state={[title, setTitle]} />
      <InputField setup={data.info} state={[info, setInfo]} />
      <input
        type="file"
        accept="/image/*"
        onChange={(event) => setFile(event.target.files[0])}
        required
      />
      {/* <InputField setup={data.thumbnail} state={[thumbnail, setThumbnail]} /> */}

      <button>Submit</button>
    </form>
  );
}
