import React from "react";
import TypeIntro from "./TypeIntro";
import { PinContainer } from "./3d-pin";

export default function () {
  return (
    <>
      <div className="relative">
        <div className="sticky top-0 flex flex-col items-center justify-center text-black h-screen">
          <TypeIntro />
        </div>
        <div className="h-[40vh]"></div>
        <div className="sticky top-0 h-screen w-screen flex items-center justify-center bg-slate-800 text-black">
          <div className="flex flex-col md:flex-row items-center justify-center mb-24 gap-4 md:gap-10 px-2 py-12">
            <div className="flex items-center justify-center w-full md:w-1/2">
              <div className="max-w-full md:max-w-3xl mx-auto bg-gray-300 dark:bg-neutral-800 rounded-lg p-6 shadow-2xl shadow-slate-950 mb-12 md:mb-0">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  About Me
                </h2>
                <p className="text-base text-gray-800 dark:text-gray-300 mb-4">
                  Hi, I'm{" "}
                  <span className="font-bold text-slate-700">
                    Farhin Rahman
                  </span>
                  , a passionate Frontend Developer with over 2 years of
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
            <div className="flex items-center justify-center w-full md:w-1/2">
              <PinContainer
                title="/in/farhin-rahman00"
                href="https://www.linkedin.com/in/farhin-rahman-06510a27b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              >
                <div className="flex flex-col p-6 w-[340px] h-[280px] bg-slate-700/80 backdrop-blur-md border border-slate-600/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 text-white font-semibold text-lg rounded-full shadow-md">
                      F
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-50">
                        Farhin Rahman
                      </h3>
                      <p className="text-sm text-slate-400">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-slate-400">
                    Lives in Dhaka, Bangladesh
                  </p>
                  <div className="w-full h-[1px] bg-slate-600 my-4"></div>
                  <a
                    href="https://www.linkedin.com/in/farhin-rahman-06510a27b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center justify-center w-full py-2 text-sm font-medium text-white bg-gradient-to-r from-violet-500 to-blue-500 rounded-lg shadow-md hover:opacity-90 transition-all"
                  >
                    View Profile
                  </a>
                </div>
              </PinContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
