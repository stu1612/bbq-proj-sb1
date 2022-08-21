export default function CateogryItem({ item }) {
  // properties
  const { title, body, img } = item;
  return (
    <div className="category">
      <div className="category__image">
        <img src={require(`../assets/images/${img}`)} alt={title} />
      </div>
      <div className="category__body">
        <h2 className="heading-title">{title}</h2>
        <div className="category__body--text">
          <p>{body}</p>
        </div>
        <button>see more</button>
      </div>
    </div>
  );
}
