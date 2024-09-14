import React from "react";
import Card from "./cards";
import siteContent from "../data/siteContent";

export default function CardsList() {
  const { cardsList } = siteContent;

  return (
    <div>
      <div className="flex flex-col md:flex-row mt-10">
        {cardsList.cards.map((card, index) => (
          <div key={index}>
            <Card heading={card.heading} cta={card.cta} info={card.info} />
          </div>
        ))}
      </div>
    </div>
  );
}
