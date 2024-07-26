"use client";

import React, { useState } from "react";

import { QAndAs } from "@/constants";

const QAndABoxes = () => {
  const [openedId, setOpenedId] = useState<null | number>(0);

  const openHandler = (itemId: number) => {
    if (itemId !== openedId) setOpenedId(itemId);
    else setOpenedId(null);
  };

  return (
    <div className="w-full lg:w-1/2 space-y-4">
      {QAndAs.map((item) => {
        const { id, question, answer } = item;

        const convertStartsToSpanString = (inputString: string) => {
          const boldRegex = /\*\*(.*?)\*\*/g;

          const boldClear = inputString.replace(
            boldRegex,
            `<span class="text-light font-semibold">$1</span>`
          );

          return boldClear;
        };

        return (
          <div
            key={id}
            className="p-6 text-light border border-light overflow-hidden rounded-2xl"
          >
            <div className="flex items-center justify-between gap-x-4">
              <h3 className="w-fit text-sm sm:text-base lg:text-lg">
                {question}
              </h3>

              <button
                onClick={() => {
                  openHandler(id);
                }}
                className="group relative w-4 sm:w-5 h-4 sm:h-5"
              >
                <span
                  className={`h-1 w-full absolute top-1/2 left-0 -translate-y-1/2 bg-gray-500 group-hover:bg-primary rounded-full transition-all duration-300`}
                />
                <span
                  className={`h-1 w-full absolute top-1/2 left-0 -translate-y-1/2 ${
                    openedId === id
                      ? "bg-secondary shadow-shadow-secondary"
                      : "bg-gray-500 -rotate-90 group-hover:bg-primary"
                  } rounded-full transition-all duration-300`}
                />
              </button>
            </div>

            <p
              className={`mt-4 pl-2 text-[0.75rem] sm:text-sm text-gray-500 text-justify !leading-loose ${
                id !== openedId && "hidden"
              }`}
              dangerouslySetInnerHTML={{
                __html: convertStartsToSpanString(answer),
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default QAndABoxes;
