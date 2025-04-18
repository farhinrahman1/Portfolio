"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Timeline } from "../components/timeline";
import amazonImage from "../components/amazon.png";
import twitterImage from "../components/twitter.png";
import githubImage from "../components/github.png";
import githubImage2024 from "../components/2024-github.png";
import shadcn from "../components/shadcn.png";
import code1 from "../components/code1.png";
import figma1 from "../components/figma1.png";
import figma2 from "../components/figma2.png";

export default function AboutPage() {
  const data = [
    {
      title: "Frontend Growth 2024",
      content: (
        <div>
          <p className="text-gray-300 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            This timeline captures my evolution as a frontend developer. With
            tools like Shadcn UI, Framer Motion, and TypeScript, I’ve pushed my
            creativity and skills to build polished, responsive interfaces. Each
            milestone below reflects a step forward in code, design, and
            passion.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={githubImage2024}
              alt="2024 Github Image"
              width={500}
              height={540}
              className="object-contain h-36 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={shadcn}
              alt="Shadcn UI"
              width={500}
              height={540}
              className="object-contain h-36 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023 Frontend Log",
      content: (
        <div>
          <p className="text-neutral-300 dark:text-neutral-200 text-sm md:text-sm font-normal mb-8">
            I focused on frontend development, learning JavaScript, Next.js, and
            using GitHub to deploy my projects. I explored UI/UX with Figma and
            gradually moved from basic HTML and CSS to modern tools like Shadcn
            UI and Framer Motion. TypeScript added structure to my code, while
            GitHub helped me share and manage my work efficiently.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={code1}
              alt="code template"
              width={500}
              height={500}
              className="object-contain h-36 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={figma1}
              alt="figma template"
              width={500}
              height={500}
              className="object-contain h-36 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={figma2}
              alt="figma template"
              width={500}
              height={500}
              className="object-contain h-36 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="object-contain h-36 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Growth Log",
      content: (
        <div>
          <p className="text-neutral-300 dark:text-neutral-200 text-base md:text-sm font-normal mb-4">
            Completed several key milestones in my learning journey:
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 dark:text-neutral-300 text-sm md:text-sm">
              <div className="flex items-center me-4">
                <input
                  checked
                  readOnly
                  id="teal-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 accent-teal-500 bg-gray-100 border-gray-300 rounded-sm dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <span className="ms-2">
                  Mastered HTML, CSS and JavaScript for building responsive
                  websites
                </span>
              </div>
            </div>
            <div className="flex gap-2 items-center text-neutral-300 dark:text-neutral-300 text-sm md:text-sm">
              <div className="flex items-center me-4">
                <input
                  checked
                  readOnly
                  id="teal-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 accent-teal-500 bg-gray-100 border-gray-300 rounded-sm dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <span className="ms-2">
                  Developed a strong understanding of Tailwind CSS for rapid UI
                  development
                </span>
              </div>
            </div>
            <div className="flex gap-2 items-center text-neutral-300 dark:text-neutral-300 text-sm md:text-sm">
              <div className="flex items-center me-4">
                <input
                  checked
                  readOnly
                  id="teal-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 accent-teal-500 bg-gray-100 border-gray-300 rounded-sm dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <span className="ms-2">
                  Experience with Git for version control, collaboration, and
                  project deployment
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Image
              src={amazonImage}
              alt="Amazon"
              width={500}
              height={500}
              className="object-contain h-36 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={twitterImage}
              alt="Twitter"
              width={500}
              height={500}
              className="object-contain h-36 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={githubImage}
              alt="Github Profile"
              width={500}
              height={500}
              className="object-contain h-36 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-20 bg-black ">
      {/* <h1 className="font-playfair text-3xl font-bold text-white tracking-tight">
        My Expertise
      </h1>
      <p className="font-raleway text-zinc-400 mb-2 italic">
        Discover my professional skillset
      </p> */}
      {/* timeline */}
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </main>
  );
}
