import React from "react";

function AboutPanel({ id, img, title, text }) {
  return (
    <div className="panel" id={id}>
      <div className="imageBackground">
        <img src={img} alt="icon" />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default AboutPanel;
