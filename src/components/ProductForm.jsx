// npm
import { useState } from "react";
import { useParams } from "react-router-dom";

// files
import InputField from "../components/InputField";
import data from "../data/product.json";

export default function ProductForm() {
  // local state
  const [subTitle, setSubTitle] = useState("");
  const [info, setInfo] = useState("");
  const [price, setPrice] = useState("");
  const [recipe, setRecipe] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [image, setImage] = useState("");

  // properties
  const { title } = useParams();

  // methods
  function handleSubmit(event) {
    event.preventDefault();
  }
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
