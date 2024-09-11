"use client";
import React from "react";
import PricingCard from "./PricingCard";
import Image from "next/image";
import priceImg from "../../../Assets/Images/pricing.svg";
import ScrollReveal from "../ScrollAnimation/ScrollReveal";
import { motion } from "framer-motion";

const Pricing = () => {
  const pricing = [
    {
      plan: "Graphic Design",
      description: "Graphic designs for day-to-day marketing needs.",
      price: "$999",
    },
    {
      plan: "Graphic design + UX/UI",
      description:
        "High-quality custom graphics + web and UI design on-demand for your business.",
      price: "$1599",
    },
    {
      plan: "Graphic design + UX/UI + Motion",
      description:
        "Video designs and motion graphics to ramp up your content marketing.",
      price: "$1699",
    },
  ];

  const feature = [
    "Banner ads",
    "Blog Graphic",
    "Clothing & Merchant Design",
    "Packaging & Label",
  ];

  return (
    <div className="mb-24">
      <div className="mt-72 md:mt-48">
        <h1 className="text-headColor mb-12 text-center text-3xl font-bold sm:text-5xl md:text-5xl lg:text-7xl">
          Unlimited design for a flat monthly fee
        </h1>
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
          {pricing.map((item, index) => {
            const bgColor = ["bg-paraColor", "bg-paraColor", "bg-paraColor"];
            const bgcolor = bgColor[index % bgColor.length];
            return (
              <PricingCard
                key={index}
                bgcolor={bgcolor}
                plan={item.plan}
                description={item.description}
                price={item.price}
                feature={feature}
              />
            );
          })}
        </div>
      </div>

      <ScrollReveal>
        <div className="bg-extragreen mx-auto w-[80%] rounded-3xl px-8 py-8 md:w-[70%] md:px-24">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="md:w-[60%]">
              <h2 className="text-headColor text-xl font-bold md:text-5xl">
                Take the first step now!
              </h2>
              <p className="py-8">It's nice to see you come all the way</p>
            </div>
            <div className="w-[40%]">
              <Image
                src={priceImg}
                alt="getstart"
                className="hidden h-[150px] w-[200px] sm:block md:h-[400px] md:w-[400px]"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="block w-[100%] rounded-3xl bg-white px-3 py-4 md:-mt-16 md:w-[20%]"
          >
            Book a demo session
          </motion.button>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Pricing;
