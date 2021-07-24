import React, { useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";

import MobileNavMenu from "./MobileNavMenu";
import logo from "../images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const { showMenu, setShowMenu } = useContext(Context);

  return (
    <>
      <header>
        <Link to="/url-shortening-api-landing-page">
          <img src={logo} alt="logo" />
        </Link>
        <div className="desktopMenu">
          <nav className="navMenu">
            <ul>
              <li>
                {/*<a href="/">Features</a>*/}
                <Link to="/url-shortening-api-landing-page/features">
                  Features
                </Link>
              </li>
              <li>
                {/*<a href="/">Pricing</a>*/}
                <Link to="/url-shortening-api-landing-page/pricing">
                  Pricing
                </Link>
              </li>
              <li>
                {/*<a href="/">Resources</a>*/}
                <Link to="/url-shortening-api-landing-page/resources">
                  Resources
                </Link>
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
