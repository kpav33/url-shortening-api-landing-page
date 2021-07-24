import React from "react";

function PriceCard({ price, icon }) {
  return (
    <div className="card">
      {icon}
      <h2>{price}€</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <button>Buy Now</button>
    </div>
  );
}

export default PriceCard;
