// npm
import { useParams } from "react-router-dom";

// files
import useCollection from "../hooks/useCollection";
import FeatureItem from "../components/FeatureItem";

export default function Categories() {
  //properties
  const { title } = useParams();
  const { documents } = useCollection(
    `menu/categories/content/${title}/content`
  );

  // componnets
  const ProductList =
    documents &&
    documents.map((item) => <FeatureItem key={item.id} item={item} />);

  const NoItems = documents && documents.length === 0 && <p>No</p>;

  return (
    <div>
      {NoItems}
      <section>{ProductList}</section>
    </div>
  );
}
