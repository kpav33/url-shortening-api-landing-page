import React from "react";

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
        <button>Get Started</button>
      </div>
    </section>
  );
}

export default Banner;
