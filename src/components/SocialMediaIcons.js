import React from "react";

import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

function SocialMediaIcons() {
  return (
    <div className="socialMedia">
      <AiFillFacebook size="32px" className="fb-svg" />
      <AiOutlineTwitter size="32px" className="tw-svg" />
      <FaPinterest size="28px" className="pi-svg" />
      <AiOutlineInstagram size="32px" className="in-svg" />
    </div>
  );
}

export default SocialMediaIcons;
