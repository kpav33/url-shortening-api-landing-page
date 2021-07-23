import React, { useState, useEffect } from "react";

// Create Context
const Context = React.createContext();

function ContextProvider({ children }) {
  // Show or hide mobile menu state
  const [showMenu, setShowMenu] = useState(false);

  // Hide mobile menu if window size is resized
  useEffect(() => {
    window.addEventListener("resize", () => setShowMenu(false));
    return () => window.removeEventListener("resize", () => setShowMenu(false));
  }, []);

  // Allow fetch call to the API to execute
  const [shorten, setShorten] = useState(false);

  // Store all shortened link objects into an array
  // Set as value empty array or call the value from local storage if it exists
  const [linkShorten, setlinkShorten] = useState(
    JSON.parse(localStorage.getItem("shortenedLinks")) || []
  );

  // Store form input field value
  const [value, setValue] = useState("");
  // Check if input field is empty
  const [formError, setFormError] = useState(false);

  // Turn form input into a controlled component
  function onChange(event) {
    if (event.target.value === "") {
      console.log("EMPTY STRING");
    }
    setValue(event.target.value);
  }

  // Create API call URL
  let longUrl = `https://api.shrtco.de/v2/shorten?url=${value}`;

  // Execute when users clicks the submit button and allow fetch to start
  function onSubmitClick() {
    if (value === "") {
      setFormError(true);
    } else {
      setFormError(false);
      setShorten(true);
    }
  }

  // Catch errors add
  // Call to API
  useEffect(() => {
    if (shorten) {
      fetch(longUrl)
        .then((response) => response.json())
        .then((data) => {
          setlinkShorten((prevArray) => [...prevArray, data]);
          setShorten(false);
        })
        .catch((error) => {
          alert(
            `There was an error when trying to call to the API. Please try to shorten your URL again, after the page reloads.
${error}`
          );
          setShorten(false);
          window.location.reload();
        });
    }
  }, [shorten, longUrl]);

  // Store shortened URLs in local storage so they persist through user's sessions
  useEffect(() => {
    localStorage.setItem("shortenedLinks", JSON.stringify(linkShorten));
  }, [linkShorten]);

  // Clear all saved links from local storage
  function clearLocalStorage() {
    localStorage.clear();
    window.location.reload();
  }

  // On Copy button click store shortened link to clipboard and change button style
  function handleClick(event) {
    navigator.clipboard.writeText(event.target.parentNode.firstChild.innerText);
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
        handleClick,
        onSubmitClick,
        formError,
        clearLocalStorage,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
