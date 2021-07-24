import React from "react";
import PriceCard from "../components/PriceCard";
import { BiMoney } from "react-icons/bi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";

function Pricing() {
  return (
    <section className="pricing">
      <h1>Pricing</h1>
      <div className="priceCards">
        <PriceCard
          price="25"
          icon={<BiMoney size="52px" color="var(--dark-violet)" />}
        />
        <PriceCard
          price="50"
          icon={<FaMoneyBillAlt size="52px" color="var(--dark-violet)" />}
        />
        <PriceCard
          price="100"
          icon={<FaRegMoneyBillAlt size="52px" color="var(--dark-violet)" />}
        />
      </div>
    </section>
  );
}

export default Pricing;
