import React from "react";
import Image from "next/image";

import { SimplificationStatisticsSvg } from "@/assets/svgs";

const Statistics = () => {
  return (
    <section className="mx-auto max-w-[25rem] lg:max-w-fit flex flex-col items-center text-center">
      <h2 className="sm:max-w-[35rem] lg:max-w-[50rem] text-light text-2xl sm:text-4xl lg:text-5xl font-extrabold !leading-normal">
        Use Quickit to simplify{" "}
        <span className="text-primary">building and maintaining layouts</span>
      </h2>

      <p className="mt-4 sm:max-w-[35rem] max-w-[50rem] text-sm lg:text-base text-gray-500">
        You can decide how you are working as a team first and then let the
        software work around you. The pace of delivery from idea to reality has
        exploded.
      </p>

      <div className="mt-8 lg:mt-16 p-3 lg:p-6 bg-box border border-light rounded-2xl lg:rounded-3xl">
        <Image
          src={SimplificationStatisticsSvg}
          alt="simplification statistics"
          width={900}
          height={280}
          className="pointer-event-none"
        />
      </div>
    </section>
  );
};

export default Statistics;
