import React from "react";
import member1 from "../../../Assets/Images/member1.png";
import Image from "next/image";

export const About = () => {
  return (
    <>
      <div className="mt-36">
        <h1 className="text-headColor text-center text-5xl font-bold">
          About us{" "}
        </h1>
      </div>
      <div className="mt-16 flex flex-col items-center justify-between gap-12 md:flex-row md:px-48">
        <div className="w-[80%] md:w-[40%]">
          <p className="text-paraColor text-justify text-xl">
            At Duck.Design, our team of dedicated experts shares a common
            passion for design. With years of experience and deep knowledge in
            various design fields, our designers create innovative and
            impressive work. Each team member continually hones their skills and
            keeps up with the latest trends to offer our clients the most modern
            solutions. At Duck.Design, our team of dedicated experts shares a
            common passion for design. With years of experience and deep
            knowledge in various design fields, our designers create innovative
            and impressive work. Each team member continually hones their skills
            and keeps up with the latest trends to offer our clients the most
            modern solutions.
          </p>
        </div>

        <div className="px-12 md:w-[40%] md:px-0">
          <Image src={member1} alt="member1 " className="h-[350px]" />
        </div>
      </div>
    </>
  );
};
