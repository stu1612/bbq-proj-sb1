export default function StoryContainer({ story }) {
  const { title, text_1, text_2, text_3, btn, imgPath } = story;
  return (
    <div className="story">
      <div className="content">
        <div className="story__content--title">
          <h2 className="heading-title">{title}</h2>
        </div>
        <div className="story__content--body">
          <p>{text_1}</p>
          <p>{text_2}</p>
          <p>{text_3}</p>
        </div>
        {btn && <button>{btn}</button>}
      </div>
      <div className={`image ${imgPath}`} />
      {/* <img src={require(`../assets/images/${image}`)} alt={title} /> */}
    </div>
  );
}
