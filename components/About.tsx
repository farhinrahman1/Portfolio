// "use client";
// import React from "react";
// import Image from "next/image";
// import { Timeline } from "../components/timeline";
// import amazonImage from "../components/amazon.png";
// import twitterImage from "../components/twitter.png";
// import githubImage from "../components/github.png";
// import githubImage2024 from "../components/2024-github.png";
// import shadcn from "../components/shadcn.png";
// import code1 from "../components/code1.png";
// import figma1 from "../components/figma1.png";
// import figma2 from "../components/figma2.png";
// import aceternity from "../components/aceternity.png";
// import dynamic from "next/dynamic";

// const About = dynamic(() => import("./About"), { ssr: false });
// export { About };

// export default function AboutPage() {
//   const data = [
//     {
//       title: "Frontend Growth 2024",
//       content: (
//         <div>
//           <p className="text-gray-300 dark:text-neutral-200 text-sm md:text-sm font-normal mb-8">
//             This timeline captures my evolution as a frontend developer. With
//             tools like Shadcn UI, Framer Motion, and TypeScript, I’ve pushed my
//             creativity and skills to build polished, responsive interfaces. Each
//             milestone below reflects a step forward in code, design, and
//             passion.
//           </p>
//           <div className="w-full max-w-none flex flex-col items-center justify-center px-0 space-y-6">
//             <Image
//               src={githubImage2024}
//               alt="2024 Github Image"
//               className="w-screen object-contain rounded-2xl"
//             />
//             {/* <Image
//               src={shadcn}
//               alt="Shadcn UI"
//               className="w-screen object-contain rounded-2xl"
//             /> */}
//             <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] mx-auto">
//               <Image
//                 src={shadcn}
//                 alt="Shadcn UI"
//                 className="w-full object-contain rounded-2xl"
//               />
//             </div>
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "2023 Frontend Log",
//       content: (
//         <div>
//           <p className="text-neutral-300 dark:text-neutral-200 text-sm md:text-sm font-normal mb-8">
//             I focused on frontend development, learning JavaScript, Next.js, and
//             using GitHub to deploy my projects. I explored UI/UX with Figma and
//             gradually moved from basic HTML and CSS to modern tools like Shadcn
//             UI and Framer Motion. TypeScript added structure to my code, while
//             GitHub helped me share and manage my work efficiently.
//           </p>
//           <div className="w-full max-w-none flex flex-col items-center justify-center px-0 space-y-6">
//             <Image
//               src={code1}
//               alt="Code Template"
//               className="w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[40vw] object-contain rounded-2xl"
//             />
//             <Image
//               src={figma1}
//               alt="Figma Template"
//               className="w-screen object-contain rounded-2xl"
//             />
//             <Image
//               src={figma2}
//               alt="Figma Template"
//               className="w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[40vw] object-contain rounded-2xl"
//             />
//             <Image
//               src={aceternity}
//               alt="Aceternity Template"
//               className="w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[40vw] object-contain rounded-2xl"
//             />
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Growth Log",
//       content: (
//         <div>
//           <p className="text-neutral-300 dark:text-neutral-200 text-base md:text-sm font-normal mb-4">
//             Completed several key milestones in my learning journey:
//           </p>
//           <div className="mb-8">
//             <div className="flex gap-2 items-center text-neutral-300 dark:text-neutral-300 text-sm md:text-sm">
//               <div className="flex items-center me-4">
//                 <input
//                   checked
//                   readOnly
//                   id="teal-checkbox"
//                   type="checkbox"
//                   value=""
//                   className="w-4 h-4 accent-teal-500 bg-gray-100 border-gray-300 rounded-sm dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//                 />
//                 <span className="ms-2">
//                   Mastered HTML, CSS and JavaScript for building responsive
//                   websites
//                 </span>
//               </div>
//             </div>
//             <div className="flex gap-2 items-center text-neutral-300 dark:text-neutral-300 text-sm md:text-sm">
//               <div className="flex items-center me-4">
//                 <input
//                   checked
//                   readOnly
//                   id="teal-checkbox"
//                   type="checkbox"
//                   value=""
//                   className="w-4 h-4 accent-teal-500 bg-gray-100 border-gray-300 rounded-sm dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2"
//                 />
//                 <span className="ms-2">
//                   Developed a strong understanding of Tailwind CSS for rapid UI
//                   development
//                 </span>
//               </div>
//             </div>
//             <div className="flex gap-2 items-center text-neutral-300 dark:text-neutral-300 text-sm md:text-sm">
//               <div className="flex items-center me-4">
//                 <input
//                   checked
//                   readOnly
//                   id="teal-checkbox"
//                   type="checkbox"
//                   value=""
//                   className="w-4 h-4 accent-teal-500 bg-gray-100 border-gray-300 rounded-sm dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2"
//                 />
//                 <span className="ms-2">
//                   Experience with Git for version control, collaboration, and
//                   project deployment
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className="w-full max-w-none flex flex-col items-center justify-center px-0 space-y-6 sm:px-6">
//             <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%]">
//               <Image
//                 src={amazonImage}
//                 alt="Amazon"
//                 className="w-screen object-contain rounded-2xl"
//               />
//               <Image
//                 src={twitterImage}
//                 alt="Twitter"
//                 className="w-screen object-contain rounded-2xl"
//               />
//               <Image
//                 src={githubImage}
//                 alt="Github Profile"
//                 className="w-screen object-contain rounded-2xl"
//               />
//             </div>
//           </div>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center p-20 bg-black ">
//       <div className="w-full">
//         <Timeline data={data} />
//       </div>
//     </main>
//   );
// }

"use client";
import React from "react";
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
import aceternity from "../components/aceternity.png";
import dynamic from "next/dynamic";

const About = dynamic(() => import("./About"), { ssr: false });
export { About };

export default function AboutPage() {
  const ResponsiveImage = ({ src, alt }: { src: any; alt: string }) => (
    <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] mx-auto">
      <Image
        src={src}
        alt={alt}
        className="w-full object-contain rounded-2xl"
      />
    </div>
  );

  const data = [
    {
      title: "Frontend Growth 2024",
      content: (
        <div>
          <p className="text-gray-300 dark:text-neutral-200 text-base sm:text-sm font-normal mb-8">
            This timeline captures my evolution as a frontend developer. With
            tools like Shadcn UI, Framer Motion, and TypeScript, I’ve pushed my
            creativity and skills to build polished, responsive interfaces. Each
            milestone below reflects a step forward in code, design, and
            passion.
          </p>
          <div className="flex flex-col items-center justify-center space-y-6">
            <ResponsiveImage src={githubImage2024} alt="2024 Github Image" />
            <ResponsiveImage src={shadcn} alt="Shadcn UI" />
          </div>
        </div>
      ),
    },
    {
      title: "2023 Frontend Log",
      content: (
        <div>
          <p className="text-neutral-300 dark:text-neutral-200 text-base sm:text-sm font-normal mb-8">
            I focused on frontend development, learning JavaScript, Next.js, and
            using GitHub to deploy my projects. I explored UI/UX with Figma and
            gradually moved from basic HTML and CSS to modern tools like Shadcn
            UI and Framer Motion. TypeScript added structure to my code, while
            GitHub helped me share and manage my work efficiently.
          </p>
          <div className="flex flex-col items-center justify-center space-y-6">
            <ResponsiveImage src={code1} alt="Code Template" />
            <ResponsiveImage src={figma1} alt="Figma Template 1" />
            <ResponsiveImage src={figma2} alt="Figma Template 2" />
            <ResponsiveImage src={aceternity} alt="Aceternity Template" />
          </div>
        </div>
      ),
    },
    {
      title: "Growth Log",
      content: (
        <div>
          <p className="text-neutral-300 dark:text-neutral-200 text-base sm:text-sm font-normal mb-4">
            Completed several key milestones in my learning journey:
          </p>
          <div className="mb-8 space-y-3">
            {[
              "Mastered HTML, CSS and JavaScript for building responsive websites",
              "Developed a strong understanding of Tailwind CSS for rapid UI development",
              "Experience with Git for version control, collaboration, and project deployment",
            ].map((text, i) => (
              <div
                key={i}
                className="flex gap-2 items-center text-neutral-300 dark:text-neutral-300 text-sm sm:text-base"
              >
                <input
                  checked
                  readOnly
                  type="checkbox"
                  className="w-4 h-4 accent-teal-500 bg-gray-100 border-gray-300 rounded-sm dark:bg-gray-700 dark:border-gray-600 focus:ring-2"
                />
                <span>{text}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center space-y-6">
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
