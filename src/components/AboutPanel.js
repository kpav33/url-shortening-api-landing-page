import React from "react";

import image from "../images/icon-brand-recognition.svg";

function AboutPanel() {
  return (
    <div className="panel">
      <div className="imageBackground">
        <img src={image} />
      </div>
      <h3>Brand Recognition</h3>
      <p>
        Boost your brand recognition with each click. Generic links don't mean a
        thing. Branded links help instil confidence in your content.
      </p>
    </div>
  );
}

export default AboutPanel;
