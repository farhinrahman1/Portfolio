import React from "react";
import TypeIntro from "./TypeIntro";

export default function () {
  return (
    <>
      <div className="relative">
        <div className="sticky top-0 h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
          <div className="">
            <TypeIntro />
          </div>
        </div>
        <div className="sticky top-0 h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
          <h2 className="text-4xl font-bold">The Fourth slide</h2>
        </div>
      </div>
    </>
  );
}
