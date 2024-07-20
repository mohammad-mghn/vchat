import React from "react";
import Image from "next/image";

import { Button } from "@/components";

import { TriangleArrowIcon } from "@/assets/icons";

const FinalTalk = () => {
  return (
    <section className="flex flex-col items-center text-center gap-y-4">
      <h2 className="max-w-[20rem] sm:max-w-[30rem] lg:max-w-[40rem] text-xl sm:text-4xl lg:text-5xl text-light font-bold !leading-relaxed">
        Move fast, stay aligned, and build better -{" "}
        <span className="text-primary">together</span>
      </h2>

      <p className="max-w-[20rem] sm:max-w-[35rem] lg:max-w-[50rem] text-sm lg:text-base text-gray-500">
        This resource contains all viewports versions for a landing page
        template based on components.
      </p>

      <Button
        className="group mt-2 py-2 sm:py-3 !px-5 lg:px-8 sm:max-w-fit flex items-center justify-center gap-x-5"
        href={"/services"}
      >
        <span>Get Early Access</span>

        <span className="p-1 flex items-center justify-center group-hover:bg-light group-hover:bg-opacity-25 border border-white rounded-full transition-all duration-300">
          <Image
            src={TriangleArrowIcon}
            alt="arrow icon"
            className="pointer-events-none"
          />
        </span>
      </Button>
    </section>
  );
};

export default FinalTalk;
