// components/Navbar.js
"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import NavLink from "./NavLinks";
// import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../Assets/Icons/logo.svg";
import menu from "./../../../Assets/Icons/menu.svg";
import close from "./../../../Assets/Icons/close.svg";
import { Link } from "react-scroll";

const navLinks = [
  {
    title: "Capabilities",
    path: "/",
  },
  {
    title: "Pricing",
    path: "/pricing",
  },

  {
    title: "Our works",
    path: "/ourWork",
  },
 
  {
    title: "Sign up",
    path: "/Signup",
  },
  {
    title: "Sign in",
    path: "/Signin",
  },
];

const Navbar = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [switchMenu, setSwitchMenu] = useState(menu);
  const path = usePathname();

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
    setSwitchMenu((prev) => (prev === menu ? close : menu));
  };

  return (
    <nav className="fixed top-0 z-10 mx-auto box-border w-full bg-[] bg-white bg-opacity-100">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-2 lg:py-4">
        <Link href="/" className="text-2xl font-semibold md:text-5xl">
          <Image
            src={logo}
            alt="Alayian"
            className="md:h-28 md:w-36 lg:h-28 lg:w-44 xl:h-28 xl:w-72"
          />
        </Link>
        <div className="cursor-pointer sm:hidden" onClick={toggleMenu}>
          <Image
            src={switchMenu}
            alt="menu"
            className="cursor-pointer"
            width={20}
            height={20}
          />
        </div>
        <div className={`menu md:w-auto" id="navbar hidden sm:block md:block`}>
          <ul className="mt-0 flex p-4 md:flex-row md:space-x-8 md:p-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  isActive={path === link.path}
                />
              </li>
            ))}
            <li className="">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
                // onSetActive={handleSetActive}
              >
                About
              </Link>
            </li>
            <li className="">
              <Link
                activeClass="active"
                to="nocode"
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
                // onSetActive={handleSetActive}
              >
                No code
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {showMenu && (
        <div className="ml-[4%] flex w-[100%] flex-col gap-2 bg-white px-[20%] pr-4 text-black shadow-lg">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              className={`text-lg font-medium ${router.pathname === link.path ? "bg-red-300" : ""}`}
              href={link.path}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
