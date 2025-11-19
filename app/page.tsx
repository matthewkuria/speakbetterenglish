import Hero from "./components/Hero";
import LanguagesCard from "./components/LanguagesCard";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <Hero />
      <LanguagesCard />
      <CTA />
    </main>
  );
}
