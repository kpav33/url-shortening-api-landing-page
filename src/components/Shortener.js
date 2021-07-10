import React, { useState, useEffect } from "react";

function Shortener() {
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
  const [shorten, setShorten] = useState(false);

  let longUrl = "https://api.shrtco.de/v2/shorten?url=https://www.rtvslo.si/;";
  /*
  function getLink() {
    fetch(longUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }*/

  // This one works best
  useEffect(() => {
    if (shorten) {
      fetch(longUrl)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setShorten(false);
        });
    }
  }, [shorten]);

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

  return (
    <section className="shortener">
      <form>
        <input type="text" name="name" placeholder="Shorten a link here..." />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setShorten(true);
          }}
        >
          Shorten it!
        </button>
      </form>
    </section>
  );
}

export default Shortener;
