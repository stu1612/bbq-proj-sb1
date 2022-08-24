export default function AdminCategoryDetail({ item }) {
  // properties
  const { title, info } = item;

  return (
    <div className="admin--detail">
      <h2>{title}</h2>
      <p>{info}</p>
    </div>
  );
}
