import React from "react";
import { Typewriter } from "react-simple-typewriter";
import farhinImage from "../components/farhin1.jpg";
import { BackgroundBeamsWithCollision } from "../components/background-beams-with-collision";

export default function HeroSection() {
  const handleType = (count: number) => {
    console.log(count);
  };
  const handleDone = () => {
    console.log(`Done after 10 loops!`);
  };
  return (
    <div className="relative h-screen w-screen bg-gray-50 dark:bg-neutral-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <BackgroundBeamsWithCollision />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="flex items-center justify-center mb-4">
          <div className="p-[4px] border-4 border-gray-300 rounded-full shadow-xl">
            <img
              src={farhinImage.src}
              alt="Farhin"
              className="h-[130px] w-[120px] max-w-full border-2 border-white rounded-full shadow-lg object-cover"
            />
          </div>
        </div>
        <p className="mt-3 text-base text-slate-700 dark:text-gray-300">
          <span className="font-mono text-lg font-semibold pr-16">
            |TURNING
          </span>{" "}
          <span className="font-mono text-lg font-semibold pr-16">
            COMPLEXITY
          </span>{" "}
          <span className="font-mono text-lg font-semibold pr-16">INTO</span>
          <span className="font-mono text-lg font-semibold">SIMPLICITY|</span>
        </p>
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
