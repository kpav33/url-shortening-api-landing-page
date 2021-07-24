import React from "react";
import { Link } from "react-router-dom";

import hero from "../images/illustration-working.svg";

function Banner() {
  return (
    <section className="banner">
      <img src={hero} alt="banner" />
      <div className="bannerText">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <Link to="/pricing">
          <button>Get Started</button>
        </Link>
      </div>
    </section>
  );
}

export default Banner;
