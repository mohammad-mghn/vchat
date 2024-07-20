import {
  Hero,
  Features,
  FinalTalk,
  PhoneNews,
  Statistics,
  GetInTouch,
  Development,
  QAndASection,
  GraduatesCompanies,
} from "@/components";

export default function Home() {
  return (
    <main className="space-y-32 lg:space-y-48">
      <Hero />

      <Features />

      <Development />

      <GraduatesCompanies />

      <PhoneNews />

      <Statistics />

      <GetInTouch />

      <QAndASection />

      <FinalTalk />
    </main>
  );
}
