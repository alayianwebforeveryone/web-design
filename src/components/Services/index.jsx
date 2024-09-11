"use client";
import React from "react";
import port1 from "../../../Assets/Images/portfoli1.png";
import port2 from "../../../Assets/Images/Frame-1.png";
import port3 from "../../../Assets/Images/Frame-2.png";
import card1 from "../../../Assets/Icons/icon1.svg";
import card2 from "../../../Assets/Images/icon-2.svg";
import card3 from "../../../Assets/Images/icon3.svg";

import DesignCard from "./DesignCard";
import Card from "../Card.jsx";
import ScrollReveal from "../ScrollAnimation/ScrollReveal";

const Services = () => {
  const cardsData = [
    {
      icon: card2,
      title: "Fixed Monthly Rate",
      description: "No hidden costs. Pay the same price every month.",
    },
    {
      icon: card1,
      title: "Same-day Delivery",
      description: "Get your design back same day.",
    },
    {
      icon: card3,
      title: "Designer Match",
      description: "Get your design back same day.",
    },
  ];

  const designCard = [
    {
      src: port1,
    },
    {
      src: port2,
    },
    {
      src: port3,
    },
  ];

  return (
    <>
      <div className="mb-24 mt-80 md:mt-48">
        <div className="mb-12 mt-4 text-center text-4xl font-extrabold md:text-6xl">
          <h1 className="text-headColor">
            Take a look at some of our <br />
            Website Design work
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row">
          {designCard.map((src, index) => (
            <DesignCard key={index} src={src.src} alt={src.src} />
          ))}
        </div>
        <div className="mx-auto mt-16 w-[90%] text-justify md:w-[68%]">
          <p className="text-paraColor px-2 text-justify text-xl md:text-center md:text-4xl md:leading-[50px]">
            Duck.Design is a tech-enabled company, developing its own
            proprietary software to brief, manage, and coordinate a high-volume
            of design projects, making it possible to keep pace with teams at
            Amazon, Puma, Facebook, and more.
          </p>
        </div>
        <ScrollReveal>
          <div className="mt-24 flex flex-col items-center justify-center gap-8 md:mx-24 md:flex-row">
            {cardsData.map((card, index) => (
              <Card
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                className="flex-col"
                padding="md:pl-24"
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </>
  );
};

export default Services;
