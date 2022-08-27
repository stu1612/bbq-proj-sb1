// npm
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function FeatureItem({ item }) {
  // properties
  const { title, subTitle, info, price, thumbnail } = item;
  const { pathname } = useLocation();

  const pathRoute =
    pathname && pathname === "/menu"
      ? `category/${title}`
      : `menu/categories/content/${title}/content`;

  return (
    <div className="feature">
      <div className="feature__image">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="feature__body">
        <h2 className="heading-title">
          {title && title}
          {subTitle && subTitle}
        </h2>
        <div className="feature__body--text">
          {price && <h3>{price} sek</h3>}
          <p>{info}</p>
        </div>
        <Link to={pathRoute}>
          <button className="btn">see more</button>
        </Link>
      </div>
    </div>
  );
}
