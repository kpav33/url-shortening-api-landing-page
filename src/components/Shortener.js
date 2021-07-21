import React, { useState, useEffect, useContext } from "react";

import { Context } from "../Context";

function Shortener() {
  const { shorten, setShorten, linkShorten, setlinkShorten, value, onChange } =
    useContext(Context);
  // https://shrtco.de/ SHORTENER URL
  // API BASE https://api.shrtco.de/v2/
  /*
  Your users should be able to:
  - View the optimal layout for the site depending on their device's screen size
  - Shorten any valid URL
  - See a list of their shortened links, even after refreshing the browser
  - Copy the shortened link to their clipboard in a single click
  - Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  */

  // https://www.rtvslo.si/
  // https://api.shrtco.de/v2/shorten?url=https://www.rtvslo.si/
  /*const [shorten, setShorten] = useState(false);
  const [linkShorten, setlinkShorten] = useState();

  let longUrl = "https://api.shrtco.de/v2/shorten?url=https://www.rtvslo.si/;";*/
  /*
  function getLink() {
    fetch(longUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }*/

  // This one works best
  /*useEffect(() => {
    if (shorten) {
      fetch(longUrl)
        .then((response) => response.json())
        .then((data) => {
          //console.log(data);
          setlinkShorten(data);
          setShorten(false);
        });
    }
  }, [shorten]);*/

  console.log(linkShorten);
  console.log(value);

  //getLink();
  // Works on Chrome but not on Firefox, WTF???
  // useEffect works on Firefox as well!!!!
  // Add error detection
  /*async function getShortLink() {
    // event.preventDefault();
    const response = await fetch(longUrl);
    const fetchedShortUrl = await response.json();
    if (fetchedShortUrl.ok) {
      console.log(fetchedShortUrl);
    }
  }
  getShortLink();*/

  let inlineButtonStyle = {
    boxShadow: "0 0 0 0 rgba(0, 0, 0, 1)",
    transform: "scale(1)",
    animation: "pulse 2s infinite",
  };

  return (
    <section className="shortener">
      <form>
        <input
          type="text"
          name="name"
          placeholder="Shorten a link here..."
          value={value}
          onChange={onChange}
          required="required"
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setShorten(true);
          }}
          style={shorten ? inlineButtonStyle : null}
        >
          {shorten ? "Shortening..." : "Shorten it!"}
        </button>
      </form>
    </section>
  );
}

export default Shortener;
