import React from "react";
import Link from "next/link";
import Image from "next/image";

import { footer } from "@/constants";
import { FooterSvg, Logo } from "@/assets/svgs";

const Footer = () => {
  return (
    <footer className="!mt-36 lg:!mt-56 !mb-14 w-full relative bg-box border border-light shadow-shadow-dark rounded-3xl overflow-hidden">
      <Image
        src={FooterSvg}
        alt="footer image"
        width={450}
        height={320}
        className="w-52 md:w-96 absolute -top-16 md:-top-1/2 -right-24 md:-right-24"
      />

      <div className="relative p-6 md:p-10 flex flex-col md:flex-row items-end justify-between gap-y-10">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-[.75rem] md:text-sm text-gray-500 gap-y-5 md:gap-y-10">
          <Image
            src={Logo}
            alt="v chat logo"
            width={180}
            height={40}
            className="w-32 md:w-fit"
          />

          <p className="max-w-[25rem] !leading-relaxed text-center md:text-start">
            {footer.caption}
          </p>

          <p className="text-center md:text-start">
            Made with <span className="text-lg">💙</span> and{" "}
            <span className="text-lg">🥤</span> powered by{" "}
            <a
              href={`https://${footer.owner.portfolioAddr}`}
              className="text-gray-100 font-medium hover:underline"
            >
              {footer.owner.name}
            </a>
          </p>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end gap-x-4">
          {footer.socialLinks.map((link, index) => (
            <Link
              href={link.address}
              key={index}
              className="group p-3 md:p-4 md:bg-box hover:bg-none hover:!bg-light hover:!bg-opacity-75 border border-light rounded-full transition-colors duration-300"
            >
              <Image
                src={link.icon}
                alt={link.name}
                width={15}
                height={15}
                className="w-3 md:w-4 h-3 md:h-4 group-hover:invert transition-colors duration-300"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
