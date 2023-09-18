//@ts-nocheck


import { Inter } from "next/font/google";

import { useEffect } from "react";
import SecondSection from "@/components/SecondSection";
import AboutSection from "@/components/Pages/Home/AboutSection";
import HeroSection from "@/components/Pages/Home/HeroSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeroSection />
      <SecondSection />
      <AboutSection />
      <div className="tap-to-top-box hide">
        <button className="tap-to-top-button">
          <i className="iconsax" data-icon="chevron-up"></i>
        </button>
      </div>
    </>
  );
}
