import React from "react";

function FooterLinks({ title, children }) {
  return (
    <div className="footerLinks">
      <h3>{title}</h3>
      <ul>{children}</ul>
    </div>
  );
}

export default FooterLinks;
