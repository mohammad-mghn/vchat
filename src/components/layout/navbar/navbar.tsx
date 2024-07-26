"use client";

import Image from "next/image";
import React, { useState } from "react";

import NavLinks from "./navLinks";
import MenuButton from "./menuButton";
import { Button } from "@/components/elements";

import { Logo } from "@/assets/svgs";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevValue) => !prevValue);
  };

  return (
    <div
      className={`mt-6 px-4 lg:px-0 py-3 ${
        isMenuOpen ? "h-[16rem] lg:h-fit" : "h-[3.5rem]"
      } flex lg:flex flex-col lg:flex-row lg:items-center lg:justify-between gap-y-2 overflow-hidden lg:overflow-visible rounded-2xl bg-dark lg:bg-none bg-opacity-60 backdrop-blur-xl lg:backdrop-blur-none border border-light lg:border-none shadow-shadow-dark lg:shadow-none transition-all duration-500 z-50`}
    >
      <div className="w-full lg:w-fit flex items-center justify-between overflow-visible">
        <div className="lg:pr-10">
          <Image
            src={Logo}
            alt="V chat logo"
            width={170}
            height={36}
            className="w-[7rem] lg:w-[8rem]"
          />
        </div>

        <MenuButton {...{ toggleMenu, isMenuOpen }} />
      </div>

      <NavLinks toggleMenu={toggleMenu} />

      <div className="flex flex-row-reverse lg:flex-row items-center justify-end lg:justify-start gap-x-2 overflow-visible">
        <Button background="bg-transparent" href="/register">
          Login
        </Button>

        <Button href="/login">Sign Up</Button>
      </div>
    </div>
  );
};

export default Navbar;
