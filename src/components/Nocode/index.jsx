"use client"
import React from "react";
import landing from "../../../Assets/Icons/icon4.svg";
import promo from "../../../Assets/Icons/icon5.svg";
import corporate from "../../../Assets/Icons/icon6.svg";
import blog from "../../../Assets/Icons/icon4.svg";
import priceImg from '../../../Assets/Images/quote.svg'
import Card from "../Card.jsx";
import Image from "next/image";
import { motion } from "framer-motion";
const Nocode = () => {
  const webFeature = [
    {
      icon: landing,
      title: "Landing ",
      description:
        "These are single-page websites designed to attract attention to a specific product, service, or promotion and encourage the visitor to take a specific action.",
    },
    {
      icon: promo,
      title: "Promo Pages ",
      description:
        "These are pages created to promote a specific marketing campaign, promotion, or product, often temporary and focused on visual appeal and strong calls to action.",
    },

    {
      icon: corporate,
      title: "Corporate websites",
      description:
        "These are pages created to promote a specific marketing campaign, promotion, or product, often temporary and focused on visual appeal and strong calls to action.",
    },
    {
      icon: blog,
      title: "Product sites and more! ",
      description:
        "These are pages created to promote a specific marketing campaign, promotion, or product, often temporary and focused on visual appeal and strong calls to action.",
    },
  ];
  return (
    <div className="mb-24 mt-80 md:mt-48  "  id="nocode">
      <div className="mb-12 mt-4 text-center t">
        <h1 className="px-1 text-3xl md:text-5xl text-headColor  font-extrabold">Website development with no code</h1>
        <div className="mt-24 flex flex-col items-center justify-center gap-8 md:mx-24 md:flex-row">
          {webFeature.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              className="flex-col"
            />
          ))}
        </div>
      </div>

      <div className="mx-auto w-[80%] rounded-3xl bg-extragreen md:px-24 px-8 py-8 md:w-[70%]">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="md:w-[60%] ">
            <h2 className="text-xl font-bold md:text-5xl text-headColor">
            Submit your design and get it back today!
            </h2>
            <p className="py-8">Come join 400+ companies who are doing design at scale without increasing headcou</p>
          </div>
          <div className="w-[40%]">
            <Image  
              src={priceImg}
              alt="getstart"
              className="hidden h-[150px] w-[200px] sm:block md:h-[300px] md:w-[400px]"
            />
          </div>
        </div>

        <motion.button 
        whileHover={{scale: 1.1,
          duration: 0.3,
        }}
        className="md:-mt-16 block w-[100%] m rounded-3xl bg-white px-3 py-4 md:w-[20%]">
          Get a quote
        </motion.button>
      </div>
    </div>
  );
};

export default Nocode;
