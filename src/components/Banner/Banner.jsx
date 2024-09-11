"use client"; // Ensure this file is treated as a client component

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import Card from "./BannerCard"; // Ensure this imports a client component
import banner5 from "../../../Assets/Images/banner5.jpg";
import banner2 from "../../../Assets/Images/banner2.jpg";
import banner3 from "../../../Assets/Images/banner3.jpg";
import banner4 from "../../../Assets/Images/banner4.jpg";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo() {

  const bannerContent = [
    {
      src: banner5,
      alt: "banner1",
    },
    {
      src: banner2,
      alt: "banner2",
    },
    {
      src: banner3,
      alt: "banner3",
    },
    {
      src: banner4,
      alt: "banner4",
    },
  ];

  
  return (
    <Carousel
      className="   "
      plugins={[Autoplay({ delay: 3000 })]} // Initialize the autoplay plugin correctly
    >
      <CarouselContent>
      {bannerContent.map((item, index) => (
        
          <CarouselItem key={index}>
            <div className="p-1">
              <Card  src = {item.src} alt = {item.alt} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CarouselDemo;
