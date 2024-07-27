import type { Metadata } from "next";

import { Footer, Navbar } from "@/components/layout";
import { ScrollToTop } from "@/components/elements";

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
    <div className="px-6 pt-20 lg:mx-auto relative xl:max-w-[86rem] lg:space-y-5">
      {/* position relative is for the hero background svg that has a absolute position. */}
      <Navbar />

      {children}

      <ScrollToTop />

      <Footer />
    </div>
  );
}
