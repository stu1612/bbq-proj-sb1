// files
import useLogout from "../hooks/useLogout";
import useCollection from "../hooks/useCollection";
import AdminCategoryItem from "../components/AdminCategoryItem";
import CategoryForm from "../components/CategoryForm";

export default function Admin() {
  // properties
  const { logout } = useLogout();
  const { documents, error } = useCollection("menu/categories/content");

  // components
  const CategoryList =
    documents &&
    documents.map((item) => <AdminCategoryItem key={item.id} item={item} />);

  return (
    <main className="admin">
      <h2>Welcome admin</h2>
      <p>
        Here you can start adding category items to the menu list,{" "}
        <span>
          these items are generic types such as chicken, beef, beer, cocktail.
          Once a menu items is created you can then create the specific menu
          categories
        </span>
      </p>
      {error && <p>{error}</p>}
      {documents && documents.length === 0 && <p>There are no items created</p>}
      <section className="admin__content">
        <aside className="items">{CategoryList}</aside>
        <aside className="admin-form">
          <CategoryForm />
        </aside>
      </section>

      <button onClick={logout}>Logout</button>
    </main>
  );
}
