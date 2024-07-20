import Image from "next/image";
import React from "react";

type props = {
  image: any;
  title: string;
};

const ThirdPartyAuth = ({ image, title }: props) => {
  return (
    <div className="p-4 lg:p-6 xl:p-6 bg-box border border-light rounded-3xl overflow-hidden">
      <Image src={image} alt={title} width={28} height={28} />

      <p className="mt-5 text-[.75rem] text-sm text-gray-500">Sign up</p>
      <p className="mt-1 text-[.75rem] text-sm whitespace-nowrap overflow-hidden text-ellipsis">
        <span>with</span> {title}
      </p>
    </div>
  );
};

export default ThirdPartyAuth;
