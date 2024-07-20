import React from "react";
import Image from "next/image";

import { phoneNews } from "@/constants";
import { AppSamples } from "@/assets/svgs";

const PhoneNews = () => {
  return (
    <div className="mx-auto max-w-[30rem] lg:max-w-fit flex flex-col lg:flex-row items-center justify-between gap-y-10">
      <div className="space-y-10 lg:space-y-20 w-full lg:w-1/3">
        {phoneNews.map((phoneNews) => (
          <div key={phoneNews.id} className="space-y-5">
            <div className="flex items-center gap-x-4">
              <div className="p-2 bg-secondary rounded-xl">
                <Image
                  src={phoneNews.icon}
                  alt={phoneNews.heading}
                  width={20}
                  height={20}
                  className="w-4 lg:w-5 h-4 lg:h-5 pointer-events-none"
                />
              </div>

              <h3 className="text-light text-[0.75rem] font-semibold uppercase">
                {phoneNews.heading}
              </h3>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold text-light">
              {phoneNews.title}
            </h2>

            <p className="text-sm lg:text-base text-gray-500">
              {phoneNews.description}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full lg:w-2/3 flex items-center justify-center lg:justify-end">
        <Image
          src={AppSamples}
          alt="app samples"
          width={665}
          height={515}
          className="pointer-events-none"
        />
      </div>
    </div>
  );
};

export default PhoneNews;
