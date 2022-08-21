// files
import ProductItem from "../components/ProductItem";
import data from "../data/dummyCat.json";

export default function Categories() {
  // componnets
  const ProductList = data.map((item) => (
    <ProductItem key={item.id} item={item} />
  ));
  return (
    <div>
      <section>{ProductList}</section>
    </div>
  );
}
