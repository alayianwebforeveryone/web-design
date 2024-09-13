import React from "react";
import member1  from "../../../Assets/Images/member1.png";
import Image from "next/image";

export const About = () => {
  return (
    <>
        <div>
          <h1 className="text-headColor font-bold text-center text-5xl ">Our Team</h1>
        </div>
      <div className="flex flex-col md:flex-row  justify-between  gap-12 md:px-48 items-center mt-16">
        <div className="md:w-[40%] w-[80%]">
          <p className="text-xl  text-paraColor text-justify">
            At Duck.Design, our team of dedicated experts shares a common
            passion for design. With years of experience and deep knowledge in
            various design fields, our designers create innovative and
            impressive work. Each team member continually hones their skills and
            keeps up with the latest trends to offer our clients the most modern
            solutions.
            At Duck.Design, our team of dedicated experts shares a common
            passion for design. With years of experience and deep knowledge in
            various design fields, our designers create innovative and
            impressive work. Each team member continually hones their skills and
            keeps up with the latest trends to offer our clients the most modern
            solutions.
          </p>
        </div>

        <div className="md:w-[40%]  px-12 md:px-0">
            <Image src={member1} alt="member1 " className="h-[350px]" />
          
        </div>
      </div>
    </>
  );
};
