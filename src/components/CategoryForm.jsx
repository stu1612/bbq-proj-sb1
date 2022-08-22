// npm
import { useState } from "react";

// files
import InputField from "../components/InputField";
import data from "../data/category.json";

export default function CategoryForm() {
  // local state
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  // methods
  function handleSubmit() {}
  return (
    <form onSubmit={handleSubmit}>
      <InputField setup={data.title} state={[title, setTitle]} />
      <InputField setup={data.info} state={[info, setInfo]} />
      <InputField setup={data.thumbnail} state={[thumbnail, setThumbnail]} />
      <button>Submit</button>
    </form>
  );
}
