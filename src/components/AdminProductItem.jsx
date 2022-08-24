export default function AdminProductItem({ item }) {
  const { subTitle, info, price, recipe } = item;
  return (
    <div>
      <h2>
        {subTitle}: <span>{price}</span>
      </h2>
      <p>Text: {info}</p>
      <p>Recipe: {recipe}</p>
    </div>
  );
}
