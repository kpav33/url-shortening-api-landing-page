import React from "react";

import logoWhite from "../images/logo-white.svg";
import FooterLinks from "./FooterLinks";
import SocialMediaIcons from "./SocialMediaIcons";

function Footer() {
  return (
    <footer>
      <img src={logoWhite} alt="logo" />
      <FooterLinks />
      <FooterLinks />
      <FooterLinks />
      <SocialMediaIcons />
    </footer>
  );
}

export default Footer;
