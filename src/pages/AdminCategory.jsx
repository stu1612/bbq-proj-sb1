// npm
import { useParams, useNavigate } from "react-router-dom";

// files
import useCollection from "../hooks/useCollection";
import AdminProductItem from "../components/AdminProductItem";
import ProductForm from "../components/ProductForm";

export default function AdminCategory() {
  // properties
  const navigate = useNavigate();
  const { title } = useParams();
  const { documents, error } = useCollection(
    `menu/categories/content/${title}/content`
  );

  // components
  const ProductList =
    documents &&
    documents.map((item) => <AdminProductItem key={item.id} item={item} />);

  return (
    <main className="admin">
      <h2>Category: {title}</h2>
      <p>
        Here you can start adding product items to the category list,{" "}
        <span>these items are specific product items for {title}.</span>
      </p>
      {error && <p>{error}</p>}
      {documents && documents.length === 0 && <p>There are no items created</p>}
      <section className="admin__content">
        <aside className="items">{ProductList}</aside>
        <aside className="admin-form">
          <ProductForm />
        </aside>
      </section>
      <button onClick={() => navigate(-1)}>go back</button>
    </main>
  );
}
