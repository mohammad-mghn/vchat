import React from "react";

import { Contact } from "@/components";
import { AboutHero, AboutMembers } from "@/components/about";

const About = () => {
  return (
    <div className="space-y-20 md:space-y-44">
      <AboutHero />

      <AboutMembers />

      <Contact />
    </div>
  );
};

export default About;
