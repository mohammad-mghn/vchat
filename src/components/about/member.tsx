import React from "react";
import Image from "next/image";

type props = {
  name: string;
  role: string;
  image: string;
};

const Member = ({ image, name, role }: props) => {
  return (
    <div dir="ltr" className="p-4 bg-box border border-light rounded-2xl">
      <Image
        src={image}
        alt={name}
        width={250}
        height={300}
        className="rounded-2xl w-full"
      />
      <h3 className="mt-3 text-light text-ellipsis overflow-hidden whitespace-nowrap">
        {name}
      </h3>
      <p className="mt-1 text-sm text-gray-500">{role}</p>
    </div>
  );
};

export default Member;
