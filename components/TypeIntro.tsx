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
        <div className="text-center">
          <h1 className="mt-2 text-3xl font-bold text-gray-800 dark:text-gray-100">
            <Typewriter
              words={["Hi, I'm Farhin", "<Frontend Developer/>"]}
              loop={10}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1000}
              onLoopDone={handleDone}
              onType={handleType}
            />
          </h1>
          <p className="text-lg text-gray-800 font-medium dark:text-gray-300 mt-4">
            Dedicated to creating intuitive and dynamic user interfaces.
          </p>
        </div>
      </div>
    </div>
  );
}
