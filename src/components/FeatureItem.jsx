// npm
import { Link } from "react-router-dom";

export default function FeatureItem({ item }) {
  // properties
  const { title, body, price, img } = item;

  return (
    <div className="feature">
      <div className="feature__image">
        <img src={require(`../assets/images/${img}`)} alt={title} />
      </div>
      <div className="feature__body">
        <h2 className="heading-title">
          {title} <span>{price && <h2>{price} sek</h2>}</span>
        </h2>
        <div className="feature__body--text">
          <p>{body}</p>
        </div>
        <Link to={`category/${title}`}>
          <button className="btn">see more</button>
        </Link>
      </div>
    </div>
  );
}
