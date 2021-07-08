import React from "react";

import logo from "../images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

// Use semantic <nav> element!

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <div className="desktopMenu">
        <nav className="navMenu">
          <ul>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
        </nav>
        <div className="users">
          <button className="login">Login</button>
          <button className="signUp">Sign Up</button>
        </div>
      </div>
      <GiHamburgerMenu size={"30px"} id="hamburger" />
    </header>
  );
}

export default Header;
