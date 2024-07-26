"use client";

import React from "react";
import Image from "next/image";
import { MouseParallax } from "react-just-parallax";

import { ChatBox, VoiceBox, SearchBox, WalletBox } from "@/assets/svgs";

const HeroBoxes = () => {
  return (
    <div className="w-full h-[150vw] sm:h-[44rem] lg:h-[42.5rem] relative overflow-visible lg:w-1/2 no">
      <MouseParallax
        strength={0.01}
        lerpEase={1.75}
        shouldPause={true}
        isAbsolutelyPositioned={true}
      >
        <div className="p-4 sm:px-16 md:px-32 lg:p-0  space-y-2">
          <Image
            src={VoiceBox}
            alt="app components"
            className="lg:absolute top-4 lg:top-10 left-2 lg:left-48 lg:-translate-x-1/2 w-[85%] sm:w-fit pointer-events-none"
          />
          <Image
            src={ChatBox}
            alt="app components"
            className="ml-auto lg:absolute top-20 lg:top-[22.5%] right-2 w-[90%] sm:w-fit pointer-events-none"
          />
          <Image
            src={SearchBox}
            alt="app components"
            className="lg:absolute left-4 top-72 lg:top-1/2 w-[45%] sm:w-fit pointer-events-none"
          />
          <Image
            src={WalletBox}
            alt="app components"
            className="ml-auto !-mt-14 lg:!mt-0 lg:absolute right-4 lg:right-4 top-80 lg:top-2/3 w-[55%] sm:w-fit pointer-events-none"
          />
        </div>
      </MouseParallax>
    </div>
  );
};

export default HeroBoxes;
