import React from "react";

import GetInTouchForm from "./form";

const GetInTouch = () => {
  return (
    <section className="flex flex-col items-center gap-y-4">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-light font-bold">
        Let&apos;s <span className="text-primary">Get in Touch</span>
      </h2>
      <p className="max-w-[25rem] sm:max-w-[30rem] text-sm text-gray-500 text-center">
        This resource contains all viewports versions for a landing page
        template based on components.
      </p>

      <GetInTouchForm />
    </section>
  );
};

export default GetInTouch;
