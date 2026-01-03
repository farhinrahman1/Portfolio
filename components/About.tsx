"use client";
import React from "react";
import Image from "next/image";
import { Timeline } from "../components/timeline";
import amazonImage from "../components/amazon.png";
import twitterImage from "../components/twitter.png";
import githubImage from "../components/github.png";
import github2024 from "../components/github2024.png";
import code1 from "../components/code1.png";
import figma1 from "../components/figma1.png";
import aceternity from "../components/aceternity.png";
import shadcn from "../components/shadcn.png";
import ecommercedashboard from "../components/ecommerce-dashboard.png";
import minimalistportfolio from "../components/minimalist-portfolio-dark-ui.png";
import dynamic from "next/dynamic";

const About = dynamic(() => import("./About"), { ssr: false });
export { About };

// ✅ Responsive image that is big on mobile, same as original on md+lg
const ResponsiveImage = ({ src, alt }: { src: any; alt: string }) => (
  <div className="w-full px-2 sm:px-4 md:px-0 md:max-w-[80vw] lg:max-w-[40vw]">
    <Image
      src={src}
      alt={alt}
      className="w-full object-contain rounded-2xl"
      priority
    />
  </div>
);

export default function AboutPage() {
  const data = [
    {
      title: "2025 — Systems, Motion & Production-Level Work",
      content: (
        <div>
          <p className="text-gray-300 lg:text-lg md:text-base font-normal mb-4">
            2025 marked a shift from isolated components to complete systems. I
            focused on building scalable UI patterns, refined motion behavior,
            and production-ready frontend architecture.
          </p>

          <ul className="list-disc pl-5 text-neutral-300 mb-6 space-y-1">
            <li>Built a full portfolio using Next.js App Router</li>
            <li>
              Implemented state-driven UI feedback and conditional rendering for
              real-time product experiences
            </li>
            <li>
              Building a multi-vendor marketplace where creators can host
              personalized storefronts and sell digital products
            </li>
          </ul>
          <div className="w-full max-w-none flex flex-col items-center justify-center px-0 space-y-6">
            <p className="text-sm text-neutral-400 uppercase tracking-widest">
              Selected Interfaces
            </p>

            <ResponsiveImage src={minimalistportfolio} alt="Portfolio System" />
            <ResponsiveImage
              src={ecommercedashboard}
              alt="Ecommerce Dashboard"
            />
          </div>
        </div>
      ),
    },

    {
      title: "2024 — Production UI, Motion Systems & Portfolio Engineering",
      content: (
        <div>
          <p className="text-gray-300 lg:text-lg md:text-base font-normal mb-4">
            2024 focused on building production-level UI systems and advanced
            animations.
          </p>

          <ul className="list-disc pl-5 text-neutral-300 mb-6 space-y-1">
            <li>
              Transitioned to Next.js App Router and modern project structure
            </li>
            <li>Introduced Framer Motion scroll-based animations</li>
            <li>Adopted Shadcn UI for consistent design systems</li>
          </ul>
          <div className="w-full max-w-none flex flex-col items-center justify-center px-0 space-y-6">
            <ResponsiveImage src={github2024} alt="2024 github" />
            <ResponsiveImage src={shadcn} alt="2024 github" />
          </div>
        </div>
      ),
    },
    {
      title: "2023 — Frontend Transition, Real Projects & UI Exploration",
      content: (
        <div>
          <p className="text-gray-300 lg:text-lg md:text-base font-normal mb-4">
            This year focused on exploration — experimenting with layouts, UI
            patterns, and learning by building small but frequent projects.
          </p>

          <div className="w-full max-w-none flex flex-col items-center justify-center px-0 space-y-6">
            <ResponsiveImage src={code1} alt="Code Template" />
            <ResponsiveImage src={figma1} alt="Figma Template 1" />
            <ResponsiveImage src={aceternity} alt="Aceternity Template" />
          </div>
        </div>
      ),
    },
    {
      title: "2022 — Web Fundamentals, Tooling & Learning Phase",
      content: (
        <div>
          <p className="text-neutral-300 lg:text-lg md:text-base font-normal mb-4">
            Completed several key milestones in my learning journey:
          </p>
          <div className="mb-8">
            {[
              "Mastered HTML, CSS and JavaScript for building responsive websites",
              "Developed a strong understanding of Tailwind CSS for rapid UI development",
              "Experience with Git for version control, collaboration, and project deployment",
            ].map((text, index) => (
              <div
                key={index}
                className="flex gap-2 items-center text-neutral-300 text-sm md:text-sm"
              >
                <div className="flex items-center me-4">
                  <input
                    checked
                    readOnly
                    type="checkbox"
                    className="w-4 h-4 accent-teal-500 bg-gray-100 border-gray-300 rounded-sm dark:focus:ring-teal-600 focus:ring-2"
                  />
                  <span className="ms-2">{text}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full max-w-none flex flex-col items-center justify-center px-0 space-y-6">
            <ResponsiveImage src={amazonImage} alt="Amazon" />
            <ResponsiveImage src={twitterImage} alt="Twitter" />
            <ResponsiveImage src={githubImage} alt="Github Profile" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-10 md:p-20 bg-black">
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </main>
  );
}
