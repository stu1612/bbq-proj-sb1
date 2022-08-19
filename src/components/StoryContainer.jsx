import React from "react";

export default function StoryContainer({ story }) {
  const { title, text_1, text_2, text_3, btn, image } = story;
  return (
    <div className="story">
      <div className="story__content">
        <div className="story__content--title">
          <h2 className="heading-title">{title}</h2>
        </div>
        <div className="story__content--body">
          {text_1 && <p>{text_1}</p>}
          {text_2 && <p>{text_2}</p>}
          {text_3 && <p>{text_3}</p>}
        </div>
        {btn && <button>{btn}</button>}
      </div>
      <div className="story__image">
        <img src={require(`../assets/images/${image}`)} alt={title} />
      </div>
    </div>
  );
}
