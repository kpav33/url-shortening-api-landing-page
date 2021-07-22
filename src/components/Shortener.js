import React, { useState, useEffect, useContext } from "react";

import { Context } from "../Context";

function Shortener() {
  const {
    shorten,
    setShorten,
    linkShorten,
    setlinkShorten,
    value,
    onChange,
    onSubmitClick,
    formError,
  } = useContext(Context);

  console.log(linkShorten);
  console.log(value);

  let inlineButtonStyle = {
    boxShadow: "0 0 0 0 rgba(0, 0, 0, 1)",
    transform: "scale(1)",
    animation: "pulse 2s infinite",
  };

  let formInputError = {
    border: "3px solid #cb6775",
    color: "#cb6775",
  };

  return (
    <section className="shortener">
      <form>
        <input
          type="text"
          name="name"
          id="urlInput"
          placeholder="Shorten a link here..."
          value={value}
          onChange={onChange}
          required="required"
          style={formError ? formInputError : null}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            onSubmitClick();
          }}
          style={shorten ? inlineButtonStyle : null}
        >
          {shorten ? "Shortening..." : "Shorten it!"}
        </button>
      </form>
      <div className="label" style={{ display: formError ? "block" : "none" }}>
        Please add a link
      </div>
    </section>
  );
}

export default Shortener;
