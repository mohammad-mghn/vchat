import Image from "next/image";

import HeroBoxes from "./boxes";
import { Button } from "@/components/elements";

import { PlayIcon } from "@/assets/icons";
import { HeroBackground } from "@/assets/svgs";

const Hero = () => {
  const buttonClasses =
    "px-4 md:px-6 py-3 md:py-5 text-[0.6rem] sm:text-[0.75rem] md:text-base font-bold group-hover/button:font-extrabold";

  return (
    <>
      <header className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-y-5">
        <div className="py-10 lg:py-20 w-full md:w-3/4 lg:w-7/12 flex flex-col items-center lg:items-start gap-y-5 text-center lg:text-start">
          <h1 className="px-5 max-w-[25rem] md:max-w-[35rem] lg:max-w-full text-4xl md:text-5xl lg:text-7xl text-light font-black !leading-normal">
            Welcome to the Future of Landings
          </h1>

          <p className="max-w-[25rem] lg:max-w-full text-[.75rem] sm:text-sm md:text-base !leading-relaxed text-gray-200">
            Create screens right in your Figma. Connect different blocks and
            create awesome landings. Yes, it just takes a few minutes!
          </p>

          <div className="mt-5 p-2 flex flex-col sm:flex-row items-center lg:items-start gap-5 overflow-visible">
            <Button className={buttonClasses}>Open the Web app</Button>

            <Button
              background="bg-dark lg:bg-light bg-opacity-80 lg:bg-opacity-10 backdrop-blur-md border border-light"
              className={`${buttonClasses} flex items-center gap-x-3`}
            >
              <Image
                src={PlayIcon}
                alt="play icon"
                className="w-4 h-4 md:w-fit md:h-fit pointer-events-none"
              />

              <span>Watch video</span>
            </Button>
          </div>
        </div>

        <HeroBoxes />

        {/* background svg */}
        <div className="absolute -right-3/4 md:-right-20 lg:-right-10 xl:-right-40 top-96 lg:-top-20 xl:-top-32 w-[200vw] md:w-[120vw] lg:w-2/3 xl:w-[70rem] -z-10">
          <Image
            src={HeroBackground}
            alt="background"
            width={1080}
            height={1120}
            className="pointer-events-none"
          />
        </div>
      </header>
    </>
  );
};

export default Hero;
