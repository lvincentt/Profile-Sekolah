import { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import HomePpdbBanner from "../components/HomePpdbBanner";
import PrincipalGreeting from "../components/PrincipleGreetings";
import SchoolStats from "../components/SchoolStats";
import LatestNews from "../components/LatestNews";
import CtaPpdb from "../components/CtaPPDB";

export default function Home() {
  // misalnya PPDB aktif antara Maret - Juni
  const [isPpdbActive, setIsPpdbActive] = useState(false);

  useEffect(() => {
    const now = new Date();
    const start = new Date("2025-03-13");
    const end = new Date("2025-06-30");
    setIsPpdbActive(now >= start && now <= end);
    console.log(now);
  }, []);

  return (
    <main className="relative">
      {/* Ganti HeroSection dengan PPDB banner saat periode PPDB */}
      {isPpdbActive ? <HomePpdbBanner /> : <HeroSection />}

      <PrincipalGreeting />
      <SchoolStats />
      <LatestNews />
      <CtaPpdb />
    </main>
  );
}
