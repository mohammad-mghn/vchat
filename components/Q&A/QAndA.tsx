"use client";

import { QAndAs } from "@/constants";
import React, { useState } from "react";

const QAndA = () => {
  const [openedId, setOpenedId] = useState<null | number>(0);

  const openHandler = (itemId: number) => {
    if (itemId !== openedId) setOpenedId(itemId);
    else setOpenedId(null);
  };
  return (
    <div className="w-full md:w-1/2 space-y-4">
      {QAndAs.map((item) => (
        <div
          key={item.id}
          className="p-6 text-light border border-light overflow-hidden rounded-2xl"
        >
          <div className="flex items-center justify-between gap-x-4">
            <h3 className="w-fit text-sm sm:text-base lg:text-lg">
              {item.question}
            </h3>

            <button
              onClick={() => {
                openHandler(item.id);
              }}
              className="group relative w-4 sm:w-5 h-4 sm:h-5"
            >
              <span
                className={`h-1 w-full absolute top-1/2 left-0 -translate-y-1/2 bg-gray-500 group-hover:bg-primary rounded-full transition-all duration-300`}
              />
              <span
                className={`h-1 w-full absolute top-1/2 left-0 -translate-y-1/2 ${
                  openedId === item.id
                    ? "bg-secondary shadow-shadow-secondary"
                    : "bg-gray-500 -rotate-90 group-hover:bg-primary"
                } rounded-full transition-all duration-300`}
              />
            </button>
          </div>

          <p
            className={`mt-4 pl-2 text-[0.75rem] sm:text-sm text-gray-500 text-justify !leading-loose ${
              item.id !== openedId && "hidden"
            }`}
          >
            {item.answer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default QAndA;
