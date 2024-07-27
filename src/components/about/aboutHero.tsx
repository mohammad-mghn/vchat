import React from "react";
import Image from "next/image";

import { Button } from "@/components/elements";

import { about } from "@/constants";
import { AboutSVG } from "@/assets/svgs";
import { GithubIcon } from "@/assets/icons";

const AboutHero = () => {
  const buttonClasses =
    "px-4 md:px-6 py-2 md:py-4 w-[15rem] sm:w-fit flex items-center justify-center text-[0.6rem] md:text-sm font-bold group-hover/button:font-extrabold";

  return (
    <section className="mt-20 md:mt-32 relative flex flex-col items-center gap-y-5 text-center">
      <h1 className="text-2xl sm:text-5xl lg:text-6xl text-light font-bold !leading-relaxed">
        {about.title[0]} <br />
        {about.title[1]}
      </h1>
      <p className="mx-auto max-w-[18rem] sm:max-w-[25rem] text-light text-[.7rem] sm:text-sm md:text-base opacity-90">
        {about.description}
      </p>
      <div className="mt-3 p-2 flex flex-col sm:flex-row items-center lg:items-start gap-x-5 gap-y-3 overflow-visible">
        <Button href={about.resume.link} className={buttonClasses}>
          {about.resume.title}
        </Button>

        <Button
          href={about.github.link}
          background="bg-dark bg-opacity-60 backdrop-blur-md border border-light"
          className={`${buttonClasses} flex items-center gap-x-3`}
        >
          <Image
            src={GithubIcon}
            alt="play icon"
            className="w-4 h-4 pointer-events-none"
          />

          <span>{about.github.title}</span>
        </Button>
      </div>

      <Image
        src={AboutSVG}
        alt=""
        width={580}
        height={550}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10 waving"
      />
    </section>
  );
};

export default AboutHero;
