"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, FormEvent } from "react";

import { ChatIcon, EnterIcon, MicrophoneIcon } from "@/assets/icons";
import { MouseParallax, ScrollParallax } from "react-just-parallax";

type inputElementType = { target: { value: string } };

const AIChatBox = () => {
  const router = useRouter();

  const [activeSendButton, setActiveSendButton] = useState(false);

  const inputHandler = ({ target }: inputElementType) => {
    if (target.value !== "") {
      setActiveSendButton(true);
    } else {
      setActiveSendButton(false);
    }
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push("/login");
  };

  return (
    <form
      className="group/input px-4 lg:px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-y-5 !bg-light !bg-opacity-10 backdrop-blur-lg shadow-shadow-light border-white border border-light rounded-2xl lg:rounded-full"
      onSubmit={submitHandler}
    >
      <div className="w-2/3 flex items-center justify-center lg:justify-start gap-x-4">
        <Image
          src={ChatIcon}
          alt="chat icon"
          width={25}
          height={25}
          className="pointer-events-none"
        />

        <input
          type="text"
          onChange={inputHandler}
          className="w-full text-light placeholder:text-gray-500"
          placeholder="How AI can you help?"
        />
      </div>

      <div className="flex items-center gap-x-3">
        <button className="group p-2 bg-light bg-opacity-10 rounded-full hover:bg-opacity-80 transition-all duration-500">
          <Image
            src={MicrophoneIcon}
            alt="microphone"
            className="group-hover:invert transition-all duration-500 pointer-events-none"
          />
        </button>

        <button
          className={`group px-4 py-2 flex items-center gap-x-2 bg-light bg-opacity-10 rounded-full hover:bg-opacity-80 transition-all duration-500 ${
            activeSendButton && "bg-opacity-80"
          }`}
          type="submit"
        >
          <Image
            src={EnterIcon}
            alt="send icon"
            className={`group-hover:invert transition-all duration-500 ${
              activeSendButton && "invert"
            } pointer-events-none`}
          />
          <span
            className={`group-hover:invert transition-all duration-500 ${
              activeSendButton && "invert"
            }`}
          >
            Send
          </span>
        </button>
      </div>
    </form>
  );
};

export default AIChatBox;
