import React, { useState, useEffect, useRef } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => setShowMenu(false));
    return () => window.removeEventListener("resize", () => setShowMenu(false));
  }, []);

  const [shorten, setShorten] = useState(false);
  const [linkShorten, setlinkShorten] = useState([]);
  const [value, setValue] = useState("");

  console.log(value);

  function onChange(event) {
    console.log(event.target.value);
    if (event.target.value === "") {
      console.log("EMPTY STRING");
    }
    setValue(event.target.value);
  }

  //let longUrl = "https://api.shrtco.de/v2/shorten?url=https://www.rtvslo.si/;";
  let longUrl = `https://api.shrtco.de/v2/shorten?url=${value}`;

  const [formError, setFormError] = useState(false);
  console.log("FORM ERROR " + formError);

  function onSubmitClick() {
    //console.log("VALUE " + value);
    if (value === "") {
      console.log("EMPTY STRING VALUE");
      setFormError(true);
    } else {
      setFormError(false);
      setShorten(true);
    }
  }

  // Add try/catch block
  useEffect(() => {
    if (shorten) {
      fetch(longUrl)
        .then((response) => response.json())
        .then((data) => {
          //console.log(data);
          setlinkShorten((prevArray) => [...prevArray, data]);
          setShorten(false);
        });
    }
  }, [shorten]);

  const [copyClick, setCopyClick] = useState(false);

  function handleChange(event) {
    console.log(linkShorten);
    /*let updatedLinks = linkShorten.map((link) => {
      console.log("OK");
      console.log(link.result.code, event.target.id);
      if (link.result.code === event.target.id) {
        <div
          className="shortenedLink"
          key={link.result.code}
          id={link.result.code}
        >
          <p>{link.result.original_link.slice(0, -1)}</p>
          <div className="shortened">
            <a href={link.result.full_short_link}>
              {link.result.full_short_link}
            </a>
            <button
              onClick={setCopyClick(true)}
              style={{ background: "var(--dark-violet)" }}
            >
              Copied!
            </button>
          </div>
        </div>;
      } else {
        return link;
      }
    });*/
    let updatedLinks = linkShorten.map((link) =>
      link.result.code === event.target.id ? (
        <div
          className="shortenedLink"
          key={link.result.code}
          id={link.result.code}
        >
          <p>{link.result.original_link.slice(0, -1)}</p>
          <div className="shortened">
            <a href={link.result.full_short_link}>
              {link.result.full_short_link}
            </a>
            <button style={{ background: "var(--dark-violet)" }}>
              Copied!
            </button>
          </div>
        </div>
      ) : (
        link
      )
    );
    setlinkShorten(updatedLinks);
    console.log(updatedLinks);
  }
  const linkRef = useRef(null);

  const [id, setId] = useState("");

  function handleClick(event) {
    //linkRef.current.textContent;
    //document.execCommand("copy");
    //setId(event.target.id);
    console.log(event.target.parentNode.firstChild.innerText);
    navigator.clipboard.writeText(event.target.parentNode.firstChild.innerText);
    console.log(event);
    document.getElementById(event.target.id).textContent = "Copied!";
    document.getElementById(event.target.id).style.backgroundColor =
      "hsl(255, 11%, 22%)";
  }

  return (
    <Context.Provider
      value={{
        showMenu,
        setShowMenu,
        shorten,
        setShorten,
        linkShorten,
        setlinkShorten,
        value,
        onChange,
        copyClick,
        setCopyClick,
        handleChange,
        handleClick,
        linkRef,
        id,
        onSubmitClick,
        formError,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
