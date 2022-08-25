// npm
import { useParams, useNavigate } from "react-router-dom";

// files
import useCollection from "../hooks/useCollection";
import AdminProductItem from "../components/AdminProductItem";
import ProductForm from "../components/ProductForm";
import { useModal } from "../context/ModalContext";

export default function AdminCategory() {
  // properties
  const navigate = useNavigate();
  const { title } = useParams();
  const { setModal } = useModal();

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
        Here you can start adding product items to this category item,{" "}
        <span>these items are specific product items for {title}.</span>
      </p>
      {error && <p>{error}</p>}
      {documents && documents.length === 0 && <p>There are no items created</p>}
      <section className="admin__content">
        <div className="items">{ProductList}</div>
        {/* <aside className="admin-form">
          <ProductForm />
        </aside> */}
      </section>
      <button onClick={() => navigate(-1)}>go back</button>
    </main>
  );
}
