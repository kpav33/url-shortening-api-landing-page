import React from "react";

import iconFb from "../images/icon-facebook.svg";
import iconTw from "../images/icon-twitter.svg";
import iconPi from "../images/icon-pinterest.svg";
import iconIn from "../images/icon-instagram.svg";

function SocialMediaIcons() {
  return (
    <div className="socialMedia">
      <img src={iconFb} alt="Facebook icon" />
      <img src={iconTw} alt="Twitter icon" />
      <img src={iconPi} alt="Pinterest icon" />
      <img src={iconIn} alt="Instagram icon" />
    </div>
  );
}

export default SocialMediaIcons;
