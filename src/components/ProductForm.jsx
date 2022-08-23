// npm
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// files
import InputField from "../components/InputField";
import data from "../data/product.json";
import useCreate from "../hooks/useCreateDocs";

export default function ProductForm() {
  // local state
  const [subTitle, setSubTitle] = useState("");
  const [info, setInfo] = useState("");
  const [price, setPrice] = useState("");
  const [recipe, setRecipe] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [image, setImage] = useState("");

  // properties
  const { addDocumentToCollection, response } = useCreate();
  const { title } = useParams();
  const path = `menu/categories/content/${title}/content`;

  // methods
  function handleSubmit(event) {
    event.preventDefault();
    const id = subTitle;
    const doc = { subTitle, info, price, recipe, thumbnail, image };
    addDocumentToCollection(path, id, doc);
  }

  useEffect(() => {
    if (response.success) {
      setSubTitle("");
      setInfo("");
      setPrice("");
      setRecipe("");
    }
  }, [response.success]);

  return (
    <form onSubmit={handleSubmit}>
      <InputField setup={data.title} state={[subTitle, setSubTitle]} />
      <InputField setup={data.info} state={[info, setInfo]} />
      <InputField setup={data.price} state={[price, setPrice]} />
      <InputField setup={data.recipe} state={[recipe, setRecipe]} />
      <InputField setup={data.thumbnail} state={[thumbnail, setThumbnail]} />
      <InputField setup={data.image} state={[image, setImage]} />
      <button>Submit</button>
    </form>
  );
}
