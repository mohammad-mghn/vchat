"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/constants";

const NavLinks = () => {
  const currentPathname = usePathname();

  return (
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
  );
};

export default NavLinks;
