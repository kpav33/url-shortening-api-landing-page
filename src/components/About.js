import React from "react";

import AboutPanel from "./AboutPanel";

function About() {
  return (
    <section className="about">
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashbboard
      </p>
      <div className="panels">
        <AboutPanel />
        <svg
          width="80"
          height="
        80"
        >
          <line
            x1="40"
            y1="0"
            x2="40"
            y2="80"
            stroke="hsl(180, 66%, 49%)"
            strokeWidth="6px"
          />
        </svg>
        <AboutPanel />
        <svg
          width="80"
          height="
        80"
        >
          <line
            x1="40"
            y1="0"
            x2="40"
            y2="80"
            stroke="hsl(180, 66%, 49%)"
            strokeWidth="6px"
          />
        </svg>
        <AboutPanel />
      </div>
    </section>
  );
}

export default About;
