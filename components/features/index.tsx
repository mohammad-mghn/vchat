import React from "react";
import Link from "next/link";
import Image from "next/image";

import ThirdPartyAuth from "../elements/third-party-auth";
import Button from "../elements/button";

import {
  FireIcon,
  SendIcon,
  ArrowIcon,
  AppleIcon,
  GoogleIcon,
  CheckBoxIcon,
  PlayButtonIcon,
} from "@/assets/icons";
import { StaticsSvg, VideoBackground } from "@/assets/svgs";
import AIChatBox from "./aiChatBox";
import { unlimitedAdvantages } from "@/constants";

const Features = () => {
  const boxClasses = "p-4 lg:p-6 bg-box border border-light rounded-3xl";

  const groupClasses = "flex flex-col gap-4 lg:gap-6";

  const highlightText = "font-bold text-primary";

  return (
    <section className="mx-auto max-w-[22rem] lg:max-w-full text-light">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center lg:text-start">
        What We Do
      </h1>
      <div className="mt-5 lg:mt-10 flex flex-col lg:flex-row gap-4 lg:gap-8">
        <div className={`relative w-full lg:w-1/4 ${groupClasses}`}>
          <div
            className={`!pr-12 relative text-xl xl:text-2xl font-light leading-relaxed italic ${boxClasses}`}
          >
            <span className={highlightText}>Replace</span> Traditional Boring{" "}
            <span className={highlightText}>Email</span> system.
            <div className="w-10 h-10 absolute right-3 top-3 flex items-center justify-center bg-light bg-opacity-5 rounded-full">
              <Image src={FireIcon} alt="hot" className="pointer-events-none" />
            </div>
          </div>

          <div className={`relative overflow-hidden ${boxClasses}`}>
            <Image
              src={VideoBackground}
              alt="video"
              className="w-[250%] h-[250%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            />

            <Image
              src={PlayButtonIcon}
              alt="play button"
              className="relative"
            />

            <h3 className="mt-5 relative">
              <span className="opacity-60">Watch how v chat</span> <br />
              <span className="text-lg">Can solve your problem.</span>
            </h3>
          </div>

          <div className={`${boxClasses}`}>
            <h3>Successfully resolved issues</h3>

            <h4 className="mt-2 space-x-1">
              <span className="text-4xl font-black">81%</span>{" "}
              <span className="inline-block text-sm text-gray-500">
                average
                <br /> last year
              </span>
            </h4>

            <Image
              src={StaticsSvg}
              alt="growth statistics"
              className="w-full pointer-events-none"
            />
          </div>
        </div>

        <div className={`w-full lg:w-1/2 ${groupClasses}`}>
          <div className={`${boxClasses}`}>
            <h3 className="text-2xl lg:text-3xl">Unlimited Services</h3>

            <p className="mt-2 lg:mt-8 text-sm lg:text-base text-gray-500">
              Take a look at some of our recent projects to see how we&apos;ve
              helped businesses like yours succeed online.
            </p>

            <div className="mt-3 lg:mt-10 flex flex-wrap justify-start lg:gap-y-5 text-gray-500">
              {unlimitedAdvantages.map((advantage) => (
                <div
                  key={advantage.id}
                  className="px-2 w-full lg:w-1/2 h-10 flex items-center gap-x-2 lg:gap-x-4 xl:gap-x-6"
                >
                  <Image
                    src={CheckBoxIcon}
                    alt="checkbox"
                    height={24}
                    width={24}
                    className="w-5 lg:w-fit pointer-events-none"
                  />

                  <span className="block text-sm text-ellipsis overflow-hidden whitespace-nowrap">
                    {advantage.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-2 lg:mt-10 flex items-center justify-between">
              <h4>
                <span className="text-3xl lg:text-5xl font-bold">$3.250</span>{" "}
                <span className="text-gray-500">/mo</span>
              </h4>

              <Link
                href={"/services"}
                className="group p-1 lg:p-3 bg-light rounded-2xl lg:rounded-3xl hover:bg-dark transition-all duration-300"
              >
                <Image
                  src={ArrowIcon}
                  alt="arrow"
                  width={45}
                  height={45}
                  className="w-10 group-hover:invert pointer-events-none"
                />
              </Link>
            </div>
          </div>

          <AIChatBox />
        </div>
        <div className={`w-full lg:w-1/4 ${groupClasses}`}>
          <div className={boxClasses}>
            <h3 className="font-semibold">Do you find some bug?</h3>
            <p className="mt-1 text-sm text-gray-500">
              Leave your feedback about Quickit.
            </p>

            <Button className="mt-5 py-5 w-full flex items-center justify-center gap-x-4 !rounded-3xl">
              <Image
                src={SendIcon}
                alt="send"
                className="pointer-events-none"
              />

              <span className="font-medium">Create a ticket</span>
            </Button>
          </div>
          <div className="flex items-center justify-between gap-x-4 xl:gap-x-8">
            <div className="w-1/2 max-w-[calc(50%-8px)]">
              <ThirdPartyAuth image={GoogleIcon} title="Google" />
            </div>
            <div className="w-1/2 max-w-[calc(50%-8px)]">
              <ThirdPartyAuth image={AppleIcon} title="Apple" />
            </div>
          </div>
          <div className={boxClasses}>
            <h3 className="text-3xl font-bold">
              Let&apos;s Schedule a Meeting
            </h3>

            <Button className="mt-10 py-5 w-full font-bold !rounded-3xl">
              Schedule Meeting
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
