import Hero from "./components/Hero";
import ProfileComponent from "./components/ProfileComponent";
import LanguagesCard from "./components/LanguagesCard";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <Hero />
      <LanguagesCard />
    </main>
  );
}
