"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

import { TriangleArrowIcon } from "@/assets/icons";

function ScrollToTop() {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY >= 120) {
        setDisplay(true);
      } else {
        setDisplay(false);
      }
    });
  }, []);

  const toggleDisplay = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <button
      title="scroll to top"
      className={`fixed bottom-5 right-5 w-10 h-10 flex items-center justify-center bg-primary text-sm font-medium gap-x-2 ${
        !display && "hidden"
      } rounded-lg z-10 transition-all duration-300`}
      onClick={toggleDisplay}
    >
      <Image
        src={TriangleArrowIcon}
        alt="top"
        className="w-5 h-5 invert -rotate-90"
      />
    </button>
  );
}

export default ScrollToTop;
