import type { Metadata } from "next";

import { Footer, Navbar } from "@/components/layout";

export const metadata: Metadata = {
  title: "V Business Chat 🤝",
  description:
    "Empower your business communication with our professional chat app. Seamlessly connect teams, clients, and partners in real time.",
  creator: "Vito Mohagheghian",
  keywords: ["vchat", "business chat", "chat box", "business community"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* position relative is for the hero background svg that has a absolute position. */}
      <div className="px-6 lg:mx-auto relative xl:max-w-[86rem] lg:space-y-5">
        <Navbar />

        {children}

        <Footer />
      </div>
    </>
  );
}
