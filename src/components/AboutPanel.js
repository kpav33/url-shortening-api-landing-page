import React from "react";

function AboutPanel({ img, title, text }) {
  return (
    <div className="panel">
      <div className="imageBackground">
        <img src={img} alt="icon" />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default AboutPanel;
