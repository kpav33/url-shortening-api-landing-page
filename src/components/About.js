import React from "react";

import AboutPanel from "./AboutPanel";
import imageRecognition from "../images/icon-brand-recognition.svg";
import imageRecords from "../images/icon-detailed-records.svg";
import imageCustomizable from "../images/icon-fully-customizable.svg";

function About() {
  return (
    <section className="about">
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashbboard
      </p>
      <div className="panels">
        <AboutPanel
          img={imageRecognition}
          title="Brand Recognition"
          text="Boost your brand recognition with each click. Generic links don't mean a
        thing. Branded links help instil confidence in your content."
        />
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
        <AboutPanel
          img={imageRecords}
          title="Detailed Records"
          text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        />
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
        <AboutPanel
          img={imageCustomizable}
          title="Fully Customizable"
          text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        />
      </div>
    </section>
  );
}

export default About;
