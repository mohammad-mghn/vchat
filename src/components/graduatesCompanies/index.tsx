import React from "react";

import { graduatesCompanies } from "@/constants";
import Image from "next/image";

const GraduatesCompanies = () => {
  return (
    <section>
      <h2 className="text-xl lg:text-2xl text-light font-semibold text-center lg:text-start">
        Trusted by the fastest growing companies
      </h2>
      <div className="mt-6 mx-auto max-w-[30rem] lg:max-w-fit flex flex-wrap justify-between gap-4 lg:gap-8">
        {graduatesCompanies.map((company) => (
          <div
            key={company.id}
            className="p-4 lg:p-8 w-[calc(50%-8px)] lg:w-[calc(33%-20px)] flex items-center justify-center gap-x-4 bg-box border border-light rounded-2xl lg:rounded-3xl"
          >
            <Image
              src={company.icon}
              alt={company.name}
              width={52}
              height={52}
              className="w-6 sm:w-8 lg:w-12 h-6 sm:h-8 lg:h-12"
            />

            <p className="text-light text-sm lg:text-base">{company.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GraduatesCompanies;
