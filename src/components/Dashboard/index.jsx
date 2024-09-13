"use client"
import Image from "next/image";
import React from "react";
import web from "../../../Assets/Icons/homepic.svg";
import Card from "../Card.jsx";
import icon from "../../../Assets/Icons/preficonn-6.svg";
import Link from "next/link";
import Banner from "../Banner/Banner";
import ScrollReveal from "../ScrollAnimation/ScrollReveal";
import { motion } from "framer-motion";
import { About } from "../About/About";
import Nocode from "../Nocode";


function Dashboard() {
  return (
    <>
      <div className="mt-80 md:mt-32">
        <div className="mx-auto w-[90%]">
          <Banner />
        </div>
        <ScrollReveal>
          <h1 className="text-headColor my-24 text-center text-3xl font-bold sm:text-5xl md:text-5xl lg:text-7xl">
            Website Design Services
          </h1>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg- flex w-full flex-col items-center justify-between gap-24 px-8 sm:gap-0 md:mt-24 md:flex-row md:px-12 xl:px-40">
            <div className="md:w-[35%]">
              <div className="">
                <p className="text-paraColor py-2 text-justify text-xl leading-9">
                  We develop everything: online stores, corporate websites,
                  Internet banking landings and portals. We solve various
                  business issues with the help of design: we help advertise
                  products, improve customer service, increase conversions, and
                  deal with other issues.
                </p>
              </div>
            </div>
            <div className="sm:w-full md:w-[50%] md:items-center">
              <Image
                src={web}
                alt="web"
                className="mx-auto h-[400px] w-[700px]"
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <Link href="/ourWork">
            <motion.div 
            whileHover={{scale:1.1}}
            className="bg-paraColor mx-auto mt-24 block w-[50%] rounded-3xl px-3 py-4 text-center text-lg font-bold text-white md:w-[15%]">
              See All Examples
            </motion.div>
          </Link>
        </ScrollReveal>

        {/* banner end here ------------------------------------------------------------------------------------------------------------- */}

        <ScrollReveal>
          <div>
            <div className="leading-24 my-12 flex w-[100%] justify-center">
              <h2 className="text-headColor mt-20 w-[80%] text-3xl font-bold md:w-[50%] md:text-center md:text-5xl">
                We&apos;re always-on to deliver the design you want when you need it
              </h2>
            </div>
          </div>
        </ScrollReveal>
        {/* card start here ------------------------------------------------------------------------------------------------------------------- */}

        <ScrollReveal>
          <div className="mt-24 flex flex-col items-center justify-center gap-8 md:mx-24 md:flex-row md:gap-12">
            <Card
              title="Catalogs and classifications"
              icon={icon}
              description="We organize large amounts of information professionally, build navigation and help users to choose among hundreds and thousands of offers for the most loaded multi-user projects"
            />
            <Card
              title="Corporate websites"
              icon={icon}
              description="We organize large amounts of information professionally, build navigation and help users to choose among hundreds and thousands of offers for the most loaded multi-user projects"
            />

            <Card
              title="Online Stores"
              icon={icon}
              description="We organize large amounts of information professionally, build navigation and help users to choose among hundreds and thousands of offers for the most loaded multi-user projects"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-extragreen mx-12 my-24 rounded-3xl px-4 py-24 md:px-40">
            <h1 className="text-headColor text-3xl font-extrabold md:text-5xl">
              Your one-stop-shop for <br /> good design
            </h1>
            <div className="mt-12 flex w-full flex-col items-center px-2 md:flex-row md:justify-between">
              <p className="text-center text-xl font-bold">
                Come join 400+ companies who are doing design at scale without
                increasing headcount
              </p>
              <Link
               
                href="/ourWork"
                className="mt-8 md:mt-0"
              >
                <motion.button
                 whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
                className="w-full cursor-pointer rounded-3xl bg-white px-4 py-2 text-xl">
                  See Examples
                </motion.button>
              </Link>
            </div>
          </div>
        </ScrollReveal>

{/* About */}




        <div id="about">
            <About />
        </div>
      </div>


      {/* no code */}


      <Nocode/>
    </>
  );
}

export default Dashboard;
