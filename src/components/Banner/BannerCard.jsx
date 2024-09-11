"use client";
import Image from "next/image";
import React from "react";

const BannerCard = ({src, alt}) => {
  

  return (
    <div>
     
        <Image
        className="w-[89%] mx-auto rounded-md  h-[800px]"
        src={src} alt={alt} />
     
    </div>
  );
};
export default BannerCard;
