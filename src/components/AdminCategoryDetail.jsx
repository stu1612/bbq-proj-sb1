export default function AdminCategoryDetail({ item }) {
  // properties
  const { title, subTitle, info, price, recipe } = item;

  return (
    <div className="admin--detail">
      {title && (
        <h2>
          <span className="highlight">Title:</span> {title}
        </h2>
      )}
      {subTitle && (
        <h2>
          <span className="highlight">Title:</span> {subTitle} - {price}
        </h2>
      )}
      <p>Info: {info}</p>
      <p>Recipe: {recipe}</p>
    </div>
  );
}
