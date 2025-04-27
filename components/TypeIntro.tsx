import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { HeroGeometric } from "../components/shape-landing-hero";

export default function HeroSection() {
  const handleType = (count: number) => {
    console.log(count);
  };
  const handleDone = () => {
    console.log(`Done after 10 loops!`);
  };
  return (
    <div className="relative h-screen min-w-full bg-gray-50 dark:bg-neutral-900 overflow-hidden">
      <HeroGeometric
        badge="Kokonut UI"
        title1="Elevate Your"
        title2="Digital Vision"
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="flex items-center justify-center mb-4"></div>
        <div className="text-center"></div>
      </div>
    </div>
  );
}
