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

        <div className="sticky top-0 h-screen w-screen flex items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-4 py-12">
            {/* About Me Card */}
            <div className="flex items-center justify-center w-full md:w-1/2">
              <div className="max-w-full md:max-w-3xl mx-auto bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-xl mb-12 md:mb-0">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  About Me
                </h2>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
                  I am a passionate Frontend Developer with over 2 years of
                  experience in designing and building responsive, user-friendly
                  websites. I specialize in creating modern, scalable web
                  applications using technologies like React, Next.js, and
                  Tailwind CSS. My goal is to make the web more accessible and
                  engaging for users through innovative design and seamless user
                  interfaces. When I'm not coding, you can find me exploring new
                  technologies, experimenting with design.
                </p>
              </div>
            </div>

            {/* PinContainer */}
            {/* <div className="flex items-center justify-center w-full md:w-1/2 sm:w-[200px]">
              <PinContainer
                title="/in/farhin-rahman00"
                href="https://www.linkedin.com/in/farhin-rahman-06510a27b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              >
                <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-full sm:w-[16rem] md:w-[20rem] lg:w-[24rem] h-[20rem]">
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
            </div> */}

            <div className="flex items-center justify-center w-full md:w-1/2 sm:w-[20px]">
              <PinContainer
                title="/in/farhin-rahman00"
                href="https://www.linkedin.com/in/farhin-rahman-06510a27b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              >
                <div className="flex flex-col mb-20 p-4 tracking-tight text-slate-100/50 w-[340px] h-[300px]">
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
