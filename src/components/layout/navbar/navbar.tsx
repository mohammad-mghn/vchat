"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { Button } from "@/components";

import { Logo } from "@/assets/svgs";
import { navLinks } from "@/constants";

const Navbar = () => {
  const currentPathname = usePathname();
  const [openNavigation, setOpenNavigation] = useState(false);

  const openNavigationHandler = () => {
    setOpenNavigation((prevValue) => !prevValue);
  };

  return (
    <div
      className={`mt-6 px-4 lg:px-0 py-3 ${
        openNavigation ? "h-[16rem]" : "h-[3.5rem]"
      } flex lg:flex flex-col lg:flex-row lg:items-center lg:justify-between overflow-hidden lg:overflow-visible rounded-2xl bg-dark lg:bg-none bg-opacity-60 backdrop-blur-xl lg:backdrop-blur-none border border-light lg:border-none shadow-shadow-dark lg:shadow-none transition-all duration-500 z-50`}
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

        <div className="w-7 h-7 lg:hidden">
          <button
            onClick={openNavigationHandler}
            className="group/button h-full w-full relative flex flex-col justify-center gap-1 overflow-hidden"
          >
            <span
              className={`relative block w-7 h-1 rounded-lg bg-gray-700 transition-all duration-500 ${
                openNavigation ? "-rotate-45 top-2" : "rotate-0 top-0"
              }`}
            />
            <span
              className={`relative ${
                openNavigation ? "left-full" : "left-0"
              } block w-7 h-1 rounded-lg bg-gray-700 transition-all duration-500 delay-75`}
            />
            <span
              className={`relative block w-7 h-1 rounded-lg bg-gray-700 transition-all duration-500 ${
                openNavigation ? "rotate-45 bottom-2" : "rotate-0 bottom-0"
              }`}
            />
          </button>
        </div>
      </div>

      <nav className="lg:py-1 lg:px-10 lg:bg-dark lg:bg-opacity-60 lg:backdrop-blur-xl lg:border lg:border-light lg:shadow-shadow-dark rounded-2xl overflow-visible">
        <ul className="py-3 flex flex-col lg:flex-row gap-y-2 gap-x-6">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`text-base font-medium ${
                currentPathname === link.path ? "text-light" : "text-gray-500"
              } hover:text-gray-200 transition-colors duration-300`}
            >
              <Link href={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-row-reverse lg:flex-row items-center gap-x-2 overflow-visible">
        <Button background="bg-transparent" href="/register">
          login
        </Button>
        <Button href="/login">Sign Up</Button>
      </div>
    </div>
  );
};

export default Navbar;
