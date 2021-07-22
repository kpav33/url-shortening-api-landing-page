import React, { useContext } from "react";

import { Context } from "../Context";

import AboutPanel from "./AboutPanel";
import imageRecognition from "../images/icon-brand-recognition.svg";
import imageRecords from "../images/icon-detailed-records.svg";
import imageCustomizable from "../images/icon-fully-customizable.svg";

function About() {
  const {
    linkShorten,
    copyClick,
    setCopyClick,
    handleClick,
    handleChange,
    linkRef,
    id,
  } = useContext(Context);
  console.log(linkRef);
  const shortenedLinks = linkShorten.map((link, index) =>
    link.ok ? (
      <div
        className="shortenedLink"
        key={link.result.code}
        id={link.result.code}
      >
        <div className="originalLink">
          {link.result.original_link.slice(0, -1)}
        </div>
        <div className="shortened">
          <a href={link.result.full_short_link} ref={linkRef}>
            {link.result.full_short_link}
          </a>
          <button
            id={index}
            onClick={(e) => handleClick(e)}
            style={{ background: copyClick && "var(--dark-violet)" }}
          >
            {copyClick ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    ) : (
      <div className="badLink" key={index}>
        {link.error}
      </div>
    )
  );
  return (
    <section className="about">
      <div className="links">{shortenedLinks}</div>
      <h2>Advanced Statistics</h2>
      <p className="aboutPara">
        Track how your links are performing across the web with our advanced
        statistics dashbboard
      </p>
      <div className="panels">
        <AboutPanel
          id="brand"
          img={imageRecognition}
          title="Brand Recognition"
          text="Boost your brand recognition with each click. Generic links don't mean a
        thing. Branded links help instil confidence in your content."
        />
        <svg
          className="mobileLine"
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
        <svg
          className="desktopLine"
          width="80"
          height="
        80"
        >
          <line
            x1="15"
            y1="0"
            x2="48"
            y2="0"
            stroke="hsl(180, 66%, 49%)"
            strokeWidth="15px"
          />
        </svg>
        <AboutPanel
          id="records"
          img={imageRecords}
          title="Detailed Records"
          text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        />
        <svg
          className="mobileLine"
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
        <svg
          className="desktopLine"
          width="80"
          height="
        80"
        >
          <line
            x1="15"
            y1="0"
            x2="48"
            y2="0"
            stroke="hsl(180, 66%, 49%)"
            strokeWidth="15px"
          />
        </svg>
        <AboutPanel
          id="customize"
          img={imageCustomizable}
          title="Fully Customizable"
          text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        />
      </div>
    </section>
  );
}

export default About;
