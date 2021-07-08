import React from "react";

import background from "../images/bg-shorten-mobile.svg";

function Shortener() {
  return (
    <section className="shortener">
      <form>
        <input type="text" name="name" placeholder="Shorten a link here..." />
        <button type="submit">Shorten it!</button>
      </form>
    </section>
  );
}

export default Shortener;
