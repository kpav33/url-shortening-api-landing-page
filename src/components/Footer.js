import React from "react";

import logoWhite from "../images/logo-white.svg";
import FooterLinks from "./FooterLinks";
import SocialMediaIcons from "./SocialMediaIcons";

function Footer() {
  return (
    <footer>
      <img src={logoWhite} alt="logo" />
      <FooterLinks title="Features">
        <li>Link Shortening</li>
        <li>Branded Links</li>
        <li>Analytics</li>
      </FooterLinks>
      <FooterLinks title="Resources">
        <li>Blog</li>
        <li>Developers</li>
        <li>Support</li>
      </FooterLinks>
      <FooterLinks title="Company">
        <li>About</li>
        <li>Our Team</li>
        <li>Careers</li>
        <li>Contact</li>
      </FooterLinks>
      <SocialMediaIcons />
    </footer>
  );
}

export default Footer;
