import React from "react";
import TypeIntro from "./TypeIntro";
import { PinContainer } from "./3d-pin";

export default function () {
  return (
    <>
      <div className="relative">
        {/* Section 1 */}
        <div className="sticky top-0 flex flex-col items-center justify-center text-black">
          <div>
            <TypeIntro />
          </div>
        </div>

        {/* Section 2 */}
        <div className="sticky top-0 h-screen w-screen flex items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
          <div className="flex items-center justify-center gap-16">
            {/* Circle */}

            {/* Card */}
            <div className="flex items-center justify-center">
              <PinContainer
                title="/in/farhin-rahman00"
                href="https://www.linkedin.com/in/farhin-rahman-06510a27b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              >
                <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                    Farhin Rahman
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500">
                      <p>Frontend Developer</p>
                      Lives in Dhaka, Bangladesh
                    </span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"></div>
                </div>
              </PinContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
