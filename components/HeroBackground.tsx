// // "use client";

// // import { useRef } from "react";
// // import { motion, useInView, useScroll, useTransform } from "framer-motion";
// // import { Code, Lightbulb, Monitor, Palette } from "lucide-react";
// // import TypeIntro from "./TypeIntro";
// // import dynamic from "next/dynamic";
// // const InteractiveAbout = dynamic(
// //   () => import("../components/interactive-about"),
// //   { ssr: false }
// // );

// // export default function AnimatedAbout() {
// //   const containerRef = useRef(null);
// //   const isInView = useInView(containerRef, { once: false, amount: 0.2 });
// //   const { scrollYProgress } = useScroll({
// //     target: containerRef,
// //     offset: ["start end", "end start"],
// //   });

// //   const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

// //   // Skills with icons
// //   const skills = [
// //     { name: "React", icon: <Code className="size-4" /> },
// //     { name: "Next.js", icon: <Monitor className="size-4" /> },
// //     { name: "Tailwind CSS", icon: <Palette className="size-4" /> },
// //     { name: "UI/UX", icon: <Lightbulb className="size-4" /> },
// //   ];

// //   return (
// //     <div className="relative">
// //       <div className="sticky top-0 flex flex-col items-center justify-center text-black h-screen">
// //         <TypeIntro />
// //       </div>
// //       <div className="">
// //         <InteractiveAbout />
// //       </div>
// //     </div>
// //   );

// //   {
// //     /* Helper components for animations */
// //   }
// //   function AnimatedParagraph({
// //     children,
// //     delay = 0,
// //   }: {
// //     children: React.ReactNode;
// //     delay?: number;
// //   }) {
// //     const ref = useRef(null);
// //     const isInView = useInView(ref, { once: false, amount: 0.3 });

// //     return (
// //       <motion.p
// //         ref={ref}
// //         className="text-gray-300 leading-relaxed"
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
// //         transition={{ delay, duration: 0.5 }}
// //       >
// //         {children}
// //       </motion.p>
// //     );
// //   }

// //   function HighlightedText({ children }: { children: React.ReactNode }) {
// //     const ref = useRef(null);
// //     const isInView = useInView(ref, { once: false, amount: 0.5 });

// //     return (
// //       <motion.span
// //         ref={ref}
// //         className="relative inline-block font-medium text-white"
// //       >
// //         {children}
// //         <motion.span
// //           className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-400 to-blue-400"
// //           initial={{ width: 0 }}
// //           animate={isInView ? { width: "100%" } : { width: 0 }}
// //           transition={{ delay: 0.2, duration: 0.6 }}
// //         />
// //       </motion.span>
// //     );
// //   }
// // }

// "use client";

// import { useRef, useEffect, useState } from "react";
// import { motion, useInView, useScroll, useTransform } from "framer-motion";
// import { Code, Lightbulb, Monitor, Palette } from "lucide-react";
// import TypeIntro from "./TypeIntro";
// import dynamic from "next/dynamic";

// const InteractiveAbout = dynamic(
//   () => import("../components/interactive-about"),
//   { ssr: false }
// );

// export default function AnimatedAbout() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null; // Wait for hydration

//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, { once: false, amount: 0.2 });
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

//   const skills = [
//     { name: "React", icon: <Code className="size-4" /> },
//     { name: "Next.js", icon: <Monitor className="size-4" /> },
//     { name: "Tailwind CSS", icon: <Palette className="size-4" /> },
//     { name: "UI/UX", icon: <Lightbulb className="size-4" /> },
//   ];

//   return (
//     <div ref={containerRef} className="relative">
//       <div className="sticky top-0 flex flex-col items-center justify-center text-black h-screen">
//         <TypeIntro />
//       </div>
//       <div className="">
//         <InteractiveAbout />
//       </div>
//     </div>
//   );
// }
// "use client";

// import { useRef, useEffect, useState } from "react";
// import { useInView, useScroll, useTransform, motion } from "framer-motion";
// import { Code, Lightbulb, Monitor, Palette } from "lucide-react";
// import TypeIntro from "./TypeIntro";
// import dynamic from "next/dynamic";

// const InteractiveAbout = dynamic(
//   () => import("../components/interactive-about"),
//   { ssr: false }
// );

// export default function AnimatedAbout() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [mounted, setMounted] = useState(false);

//   // Only mark mounted after hydration
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   export default function AnimatedAbout() {
//     // Hooks must always be at the top
//     const containerRef = useRef<HTMLDivElement>(null);
//     const { scrollYProgress } = useScroll({
//       target: containerRef,
//       offset: ["start end", "end start"],
//     });
//     const isInView = useInView(containerRef, { once: false, amount: 0.2 });
//     const [mounted, setMounted] = useState(false);

//     useEffect(() => {
//       setMounted(true);
//     }, []);

//     const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

//     const skills = [
//       { name: "React", icon: <Code className="size-4" /> },
//       { name: "Next.js", icon: <Monitor className="size-4" /> },
//       { name: "Tailwind CSS", icon: <Palette className="size-4" /> },
//       { name: "UI/UX", icon: <Lightbulb className="size-4" /> },
//     ];

//     // Only conditionally render JSX, NOT hooks
//     if (!mounted) return null;

//     return (
//       <div ref={containerRef} className="relative">
//         <div className="sticky top-0 flex flex-col items-center justify-center text-black h-screen">
//           <TypeIntro />
//         </div>
//         <div>
//           <InteractiveAbout />
//         </div>
//       </div>
//     )
//   }
"use client";

import { useRef, useEffect, useState } from "react";
import { useInView, useScroll, useTransform } from "framer-motion";
import { Code, Lightbulb, Monitor, Palette } from "lucide-react";
import TypeIntro from "./TypeIntro";
import dynamic from "next/dynamic";

const InteractiveAbout = dynamic(
  () => import("../components/interactive-about"),
  { ssr: false }
);

export default function AnimatedAbout() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  // Only mark mounted after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Hooks stay at the top: pass undefined as target until mounted
  const { scrollYProgress } = useScroll({
    target: mounted ? containerRef : undefined,
    offset: ["start end", "end start"],
  });
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const skills = [
    { name: "React", icon: <Code className="size-4" /> },
    { name: "Next.js", icon: <Monitor className="size-4" /> },
    { name: "Tailwind CSS", icon: <Palette className="size-4" /> },
    { name: "UI/UX", icon: <Lightbulb className="size-4" /> },
  ];

  // Only JSX is conditional
  if (!mounted) return null;

  return (
    <div ref={containerRef} className="relative">
      <div className="sticky top-0 flex flex-col items-center justify-center text-black h-screen">
        <TypeIntro />
      </div>
      <div>
        <InteractiveAbout />
      </div>
    </div>
  );
}
