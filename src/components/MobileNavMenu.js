import React from "react";
import { Link } from "react-router-dom";

function MobileNavMenu({ showMenu }) {
  return (
    <nav className="mobileMenu" style={{ opacity: showMenu ? "1" : "0" }}>
      <ul>
        <li>
          {/*<a href="/">Features</a>*/}
          <Link to="/url-shortening-api-landing-page/features">Features</Link>
        </li>
        <li>
          {/*<a href="/">Pricing</a>*/}
          <Link to="/url-shortening-api-landing-page/pricing">Pricing</Link>
        </li>
        <li>
          {/*<a href="/">Resources</a>*/}
          <Link to="/url-shortening-api-landing-page/resources">Resources</Link>
        </li>
      </ul>
      <hr />
      <div className="usersMobile">
        <button className="loginMobile">Login</button>
        <button className="signUpMobile">Sign Up</button>
      </div>
    </nav>
  );
}

export default MobileNavMenu;
