import React from "react";
import Image from "next/image";

import { FooterSvg, Logo } from "@/assets/svgs";
import { footer } from "@/constants";
import Link from "next/link";

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

      <div className="relative p-6 md:p-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-y-6">
        <div className="w-full md:w-1/2 text-[.75rem] md:text-sm text-gray-500 space-y-5 md:space-y-10">
          <Image
            src={Logo}
            alt="v chat logo"
            width={180}
            height={40}
            className="w-32 md:w-fit"
          />

          <p className="max-w-[25rem] !leading-relaxed">
            Ready to elevate your online presence? Contact us today to discuss
            your project and discover how we can bring your vision to life.
          </p>

          <p>
            Made with <span className="text-lg">💙</span> and{" "}
            <span className="text-lg">🥤</span> powered by{" "}
            <a
              href="https://vito-dev.ir"
              className="text-gray-100 font-medium hover:underline"
            >
              vito-dev.ir
            </a>
          </p>
        </div>

        <div className="flex items-center gap-x-4">
          {footer.links.map((link, index) => (
            <Link
              href={link.address}
              key={index}
              className="p-4  md:bg-box border border-light rounded-full"
            >
              <Image
                src={link.icon}
                alt={link.name}
                width={15}
                height={15}
                className="w-3 h-3"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
