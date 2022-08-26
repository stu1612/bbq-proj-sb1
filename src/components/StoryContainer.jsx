export default function StoryContainer({ story }) {
  const { title, text_1, text_2, text_3, btn, imgPath } = story;
  return (
    <div className="story">
      <div className="story__body">
        <h2 className="heading-title">{title}</h2>
        <div className="story__body--text">
          <p>{text_1}</p>
          <p>{text_2}</p>
          <p>{text_3}</p>
        </div>
        {btn && <button className="btn">{btn}</button>}
      </div>
      <div className={`story__image ${imgPath}`} />
    </div>
  );
}
