import React from "react";
import Image from "next/image";

import { Button } from "@/components/elements";

import { development } from "@/constants";
import { TriangleArrowIcon } from "@/assets/icons";

const DevelopmentDetails = () => {
  return (
    <section className="mx-auto lg:mx-10 xl:mx-20 max-w-[25rem] lg:max-w-fit flex flex-col lg:flex-row justify-between gap-y-16 lg:gap-10">
      <div className="space-y-14 xl:space-y-20 xl:w-2/5">
        {development.features.map((feature) => (
          <div
            key={feature.id}
            className="pl-6 relative space-y-2 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-[125%] before:first:bg-primary before:bg-gray-500 before:bg-opacity-20 before:rounded-full"
          >
            <h2 className="text-lg font-extrabold text-light">
              {feature.title}
            </h2>
            <p className="text-sm text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="space-y-10 xl:w-2/5">
        {development.slogan.map((slogan) => (
          <div key={slogan.id} className="space-y-4">
            <h2 className="text-xl lg:text-2xl text-light font-extrabold">
              {slogan.title}
            </h2>
            <p className="text-sm text-gray-500">{slogan.description}</p>

            <Button
              className="group !mt-4 py-3 w-full lg:w-fit flex items-center justify-center gap-x-5"
              href={slogan.linkAddr}
            >
              <span>{slogan.linkTitle}</span>

              <span className="p-1 flex items-center justify-center group-hover:bg-light group-hover:bg-opacity-25 border border-white rounded-full transition-all duration-300">
                <Image
                  src={TriangleArrowIcon}
                  alt="arrow icon"
                  className="pointer-events-none"
                />
              </span>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DevelopmentDetails;
