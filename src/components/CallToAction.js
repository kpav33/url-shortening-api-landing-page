import React from "react";

// bg-boost-mobile
import background from "../images/bg-boost-mobile.svg";

function CallToAction() {
  return (
    <section
      className="callToAction"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h2>Boost your links today</h2>
      <button>Get Started</button>
    </section>
  );
}

export default CallToAction;
