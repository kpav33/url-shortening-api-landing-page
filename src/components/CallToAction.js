import React from "react";
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="callToAction">
      <h2>Boost your links today</h2>
      <Link to="/url-shortening-api-landing-page/pricing">
        <button>Get Started</button>
      </Link>
    </section>
  );
}

export default CallToAction;
