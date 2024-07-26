import {
  BellIcon,
  figmaIcon,
  githubIcon,
  sketchIcon,
  dribbleIcon,
  behanceIcon,
  pintrestIcon,
  analyticsIcon,
} from "@/assets/icons";

type unlimitedAdvantagesType = {
  id: number;
  title: string;
}[];

export const unlimitedAdvantages: unlimitedAdvantagesType = [
  { id: 0, title: "Instant and Real-time" },
  { id: 1, title: "Convenience and Accessibility" },
  { id: 2, title: "Cost-effectiveness" },
  { id: 3, title: "Customer Support Advantages" },
  { id: 4, title: "Contextual Interaction" },
  { id: 5, title: "24/7 support team" },
  { id: 6, title: "unlock 25 more features" },
  { id: 7, title: "Unlimited requests" },
];

type developmentType = {
  features: {
    id: number;
    title: string;
    description: string;
  }[];
  slogan: {
    id: number;
    title: string;
    linkAddr: string;
    linkTitle: string;
    description: string;
  }[];
};

export const development: developmentType = {
  features: [
    {
      id: 0,
      title: "Completely Open-Sourced",
      description:
        "Every team has a unique process for shipping software. Use an out-of-the-box workflow, or create one to match the way your team works.",
    },
    {
      id: 1,
      title: "daily merge requests",
      description:
        "Every team has a unique process for shipping software. Use an out-of-the-box workflow, or create one to match the way your team works. Use an out-of-the-box workflow, or create one to match.",
    },
    {
      id: 2,
      title: "Just for Learning",
      description:
        "Every team has a unique process for shipping software. Use an out-of-the-box workflow, or create one to match the way your team works.Use an out-of-the-box workflow, or create one to match the way your team works.",
    },
  ],
  slogan: [
    {
      id: 0,
      title: "Completely Open-Sourced",
      linkTitle: "Github Repo",
      linkAddr: "https://github.com/vito-mohagheghian",
      description:
        "Every team has a unique process for shipping software. Use an out-of-the-box workflow. Every team has a unique process for shipping software. Use an out-of-the-box workflow.",
    },
    {
      id: 1,
      title: "Daily merge requests",
      linkTitle: "portfolio",
      linkAddr: "https://vito-dev.ir/en",
      description:
        "Every team has a unique process for shipping software. Use an out-of-the-box workflow. Every team has a unique process for shipping software. Use an out-of-the-box workflow.",
    },
  ],
};

type graduatesCompaniesType = {
  id: number;
  icon: string;
  name: string;
}[];

export const graduatesCompanies: graduatesCompaniesType = [
  {
    id: 0,
    icon: figmaIcon,
    name: "Figma",
  },
  {
    id: 1,
    icon: sketchIcon,
    name: "Sketch",
  },
  {
    id: 2,
    icon: pintrestIcon,
    name: "Pintrest",
  },
  {
    id: 3,
    icon: dribbleIcon,
    name: "Dribble",
  },
  {
    id: 4,
    icon: behanceIcon,
    name: "Behance",
  },
  {
    id: 5,
    icon: githubIcon,
    name: "Github",
  },
];

type mobileAppFeaturesType = {
  id: number;
  icon: string;
  title: string;
  heading: string;
  description: string;
}[];

export const mobileAppFeatures: mobileAppFeaturesType = [
  {
    id: 0,
    icon: analyticsIcon,
    title: "Create, collabrate your work in One place",
    heading: "analytics",
    description:
      "Every team has a unique process for shipping software. Use an out-of-the-box workflow. Every team has a unique process for shipping software. Use an out-of-the-box workflow.",
  },
  {
    id: 1,
    icon: BellIcon,
    title: "Create, collabrate your work in One place",
    heading: "analytics",
    description:
      "Every team has a unique process for shipping software. Use an out-of-the-box workflow. Every team has a unique process for shipping software. Use an out-of-the-box workflow.",
  },
];

type QAndAsType = {
  id: number;
  question: string;
  answer: string;
}[];

export const QAndAs: QAndAsType = [
  {
    id: 0,
    question: "How can I contact Inkyy Team?",
    answer:
      "You can reach us through our contact form on our website or by emailing us at **hello@inkyy.com** We typically respond within 24 hours. You can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hoursYou can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hoursYou can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hours",
  },
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hours.",
  },
  {
    id: 2,
    question: "How long does it take to design and develop a website?",
    answer:
      "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hours.",
  },
  {
    id: 3,
    question: "Do you provide website maintenance services?",
    answer:
      "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hours.",
  },
  {
    id: 4,
    question: "Do you require a deposit for projects?",
    answer:
      "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hours.",
  },
];
