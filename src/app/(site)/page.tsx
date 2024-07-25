import {
  Hero,
  WhatWeDo,
  FinalTalk,
  Statistics,
  QAndASection,
  MobileAppFeatures,
  GraduatesCompanies,
  DevelopmentDetails,
} from "@/components/home";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="space-y-32 lg:space-y-48">
      <Hero />

      <WhatWeDo />

      <DevelopmentDetails />

      <GraduatesCompanies />

      <MobileAppFeatures />

      <Statistics />

      <Contact />

      <QAndASection />

      <FinalTalk />
    </main>
  );
}
