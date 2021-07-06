import React from "react";

import logo from "../images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

// Use semantic <nav> element!

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <GiHamburgerMenu size={"30px"} />
    </header>
  );
}

export default Header;
