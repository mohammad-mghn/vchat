import { StaticImport } from "next/dist/shared/lib/get-img-props";

import {
  GithubIcon,
  LinkedInIcon,
  TelegramIcon,
  InstagramIcon,
} from "@/assets/icons";

type footerType = {
  caption: string;
  owner: {
    name: string;
    portfolioAddr: string;
  };
  socialLinks: {
    name: string;
    address: string;
    icon: StaticImport;
  }[];
};

export const footer: footerType = {
  caption:
    "Ready to elevate your online presence? Contact us today to discuss your project and discover how we can bring your vision to life",
  owner: {
    name: "Vito Mohagheghian",
    portfolioAddr: "vito-dev.ir",
  },
  socialLinks: [
    { name: "Instagram", icon: InstagramIcon, address: "" },
    { name: "Linkedin", icon: LinkedInIcon, address: "" },
    { name: "Telegram", icon: TelegramIcon, address: "" },
    {
      name: "Github",
      icon: GithubIcon,
      address: "https://github.com/vito-mohagheghian",
    },
  ],
};
