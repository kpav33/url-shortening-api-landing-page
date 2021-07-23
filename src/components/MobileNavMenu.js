import React from "react";

function MobileNavMenu({ showMenu }) {
  return (
    <nav className="mobileMenu" style={{ opacity: showMenu ? "1" : "0" }}>
      <ul>
        <li>
          <a href="/">Features</a>
        </li>
        <li>
          <a href="/">Pricing</a>
        </li>
        <li>
          <a href="/">Resources</a>
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
