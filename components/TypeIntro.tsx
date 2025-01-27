import React from "react";
import { Typewriter } from "react-simple-typewriter";
import farhinImage from "../components/farhin1.jpg";
import { BackgroundBeamsWithCollision } from "../components/background-beams-with-collision";

export default function () {
  const handleType = (count: number) => {
    console.log(count);
  };
  const handleDone = () => {
    console.log(`Done after 10 loops!`);
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-screen">
      <BackgroundBeamsWithCollision>
        {/* <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/4 p-[4px] border-4 border-gray-300 rounded-lg shadow-xl">
          <img
            src={farhinImage.src}
            alt="Farhin"
            className="h-[260px] w-[200px] max-w-full border-4 border-white rounded-lg shadow-lg"
          />
        </div> */}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="mb-[150px] text-center">
            <h1 className="text-4xl font-bold shadow-sm shadow-slate-200">
              <span className="text-3xl font-bold font-mono">
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
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
