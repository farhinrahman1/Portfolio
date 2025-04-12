import React from "react";
import TypeIntro from "./TypeIntro";
import { motion } from "framer-motion";
import farhinImage from "../components/farhin1.jpg";
import { Blockquote, BlockquoteAuthor } from "@/components/ui/blockquote";

export default function () {
  return (
    <>
      <div className="relative">
        <div className="sticky top-0 flex flex-col items-center justify-center text-black h-screen">
          <TypeIntro />
        </div>
        <div className="sticky top-0 h-screen flex items-center justify-center bg-neutral-950 text-black">
          <div className="flex flex-col md:flex-row items-center justify-center mb-24 gap-4 md:gap-10 px-2 py-12">
            <div className=" w-full md:w-1/2 ">
              <div className="max-w-full md:max-w-3xl mx-auto dark:bg-neutral-800 rounded-lg md:mb-0">
                <Blockquote className="text-base text-gray-300 dark:text-gray-300 mt-12">
                  <div className="w-full md:w-1/2 text-white flex flex-col items-center justify-center font-semibold text-center md:text-left">
                    {" "}
                    Here is a little about me.
                  </div>
                  A passionate Frontend Developer with over 2 years of
                  experience in designing and building responsive, user-friendly
                  websites. I specialize in creating modern, scalable web
                  applications using technologies like React, Next.js, and
                  Tailwind CSS. My goal is to make the web more accessible and
                  engaging for users through innovative design and seamless user
                  interfaces. When I'm not coding, you can find me exploring new
                  technologies, experimenting with design.
                  <br />
                  I'm always eager to take on new challenges and grow as a
                  developer.
                  <BlockquoteAuthor>Farhin Rahman</BlockquoteAuthor>
                </Blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
