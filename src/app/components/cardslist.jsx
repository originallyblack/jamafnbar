import React from "react";
import Card from "./cards";
const cards = [
  {
    heading: "Order for Collect",
    info: "Plan ahead and get your Jamaican feast to-go, from Jamaf to skip the queue.",
    cta: {
      text: "ORDER COLLECT",
      link: "tel:01618345562",
    },
  },
  {
    heading: "Jamaf's Delivery",
    info: "We sometimes change our delivery areas based on demand - check if we’re delivering to you.",
    cta: {
      text: "ORDER DELIVERY",
      link: "https://www.pronto-food-online.com/ordering/restaurant/menu?restaurant_uid=175b2cdb-5680-4673-b025-59f548105410&glfa_cid=1694974390.1601939947&glfa_t=1601940069781",
    },
  },
  {
    heading: "Dine-in with us!",
    info: "Find your local Jamaf and grab a seat at the bar or a cozy table.",
    cta: {
      text: "RESERVE A TABLE",
      link: "tel:01618345562",
    },
  },
];
export default function CardsList() {
  return (
    <div>
      <div className="flex flex-col md:flex-row mt-10">
        {cards.map((card, index) => (
          <div key={index}>
            <Card heading={card.heading} cta={card.cta} info={card.info} />
          </div>
        ))}
      </div>
    </div>
  );
}
