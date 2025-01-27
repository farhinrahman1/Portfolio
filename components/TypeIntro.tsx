import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function () {
  const handleType = (count: number) => {
    console.log(count);
  };
  const handleDone = () => {
    console.log(`Done after 10 loops!`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center justify-center border-black border-dashed border-2 rounded-full h-[200px] w-[200px] animate-bounce"></div>
      <h1 className="text-4xl font-bold text-center">
        <span className="text-3xl font-bold font-mono text-center ">
          <Typewriter
            words={[
              "Hi, I'm Farhin",
              "<Frontend Developer/>",
              "Girl-who-likes-ice-cream.tsx",
            ]}
            loop={10}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h1>
    </div>
  );
}
