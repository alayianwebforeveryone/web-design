"use client"
import React from "react";
import { motion } from "framer-motion";

const PricingCard = ({
  plan,
  price,
  feature = "test",
  description,
  bgcolor,
}) => {
  return (
    <div className={`px-6 py-12 text-center ${bgcolor} border-1 shadow-xl space-y-5 my-12  w-[80%] md:w-[25%] rounded-xl`}>
      <div>
        <h2 className=" text-2xl font-extrabold leading-12 text-headColor">{plan}</h2>
        <p className="my-8 ">{description}</p>
        <hr />
        <p className="my-6 text-5xl font-bold text-headColor">
          {price} <br /> <span className="text-sm">Per Month</span>
        </p>

        <hr />
        <p className="text-left mt-8">Within this plan you get a dedicated  <br />designer for:</p>

        <div>
          <ul className="text-left list-decimal pl-6 ">
            {feature.map((feature, index) => (
              <li className="leading-10 pl-4" key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <motion.button 
        whileHover={{ scale: 1.1 }}
        className=" bg-background text-headColor px-8 py-3 mt-8 rounded-xl ">Get Started</motion.button>
      </div>




      

    </div>
  );
};

export default PricingCard;
