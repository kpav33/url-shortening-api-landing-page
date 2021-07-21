import React, { useState, useEffect, useContext } from "react";
import { Context } from "../Context";

import MobileNavMenu from "./MobileNavMenu";
import logo from "../images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

// Use semantic <nav> element!

function Header() {
  const { showMenu, setShowMenu } = useContext(Context);
  /*
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => setShowMenu(false));
    return () => window.removeEventListener("resize", () => setShowMenu(false));
  }, []);*/

  return (
    <>
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
        <GiHamburgerMenu
          size={"30px"}
          id="hamburger"
          onClick={() => setShowMenu(!showMenu)}
        />
      </header>
      <MobileNavMenu showMenu={showMenu} />
    </>
  );
}

export default Header;
