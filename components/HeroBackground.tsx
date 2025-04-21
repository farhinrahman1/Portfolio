// import React from "react";
// import TypeIntro from "./TypeIntro";
// import { Blockquote, BlockquoteAuthor } from "@/components/ui/blockquote";

// export default function () {
//   return (
//     <>
//       <div className="relative">
//         <div className="sticky top-0 flex flex-col items-center justify-center text-black h-screen">
//           <TypeIntro />
//         </div>
//         <div className="sticky top-0 h-screen flex items-center justify-center bg-neutral-950 text-black">
//           <div className="flex flex-col md:flex-row items-center justify-center mb-24 gap-4 md:gap-10 px-2 py-12">
//             <div className=" w-full md:w-1/2 ">
//               <div className="max-w-full md:max-w-3xl mx-auto dark:bg-neutral-800 rounded-lg md:mb-0">
//                 <Blockquote className="text-base text-gray-300 dark:text-gray-300 mt-12">
//                   <div className="w-full md:w-1/2 text-white flex flex-col items-center justify-center font-semibold text-center md:text-left">
//                     {" "}
//                     Here is a little about me.
//                   </div>
//                   A passionate Frontend Developer with over 2 years of
//                   experience in designing and building responsive, user-friendly
//                   websites. I specialize in creating modern, scalable web
//                   applications using technologies like React, Next.js, and
//                   Tailwind CSS. My goal is to make the web more accessible and
//                   engaging for users through innovative design and seamless user
//                   interfaces. When I'm not coding, you can find me exploring new
//                   technologies, experimenting with design.
//                   <br />
//                   I'm always eager to take on new challenges and grow as a
//                   developer.
//                   <BlockquoteAuthor>Farhin Rahman</BlockquoteAuthor>
//                 </Blockquote>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import TypeIntro from "./TypeIntro";

export default function AboutSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-20 px-4 bg-black min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-full md:max-w-3xl mx-auto dark:bg-neutral-800 bg-black rounded-lg overflow-hidden shadow-xl"
      >
        <div className="p-8 md:p-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-300 mb-2 tracking-tight">
              About Me
            </h2>
            <div className="w-20 h-1 bg-neutral-400 rounded"></div>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="md:col-span-2"
            >
              <div className="text-lg md:text-xl font-semibold text-neutral-300 mb-4">
                Here is a little about me.
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="md:col-span-3 text-neutral-400 space-y-4"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="leading-relaxed"
              >
                A passionate Frontend Developer with over 2 years of experience
                in designing and building responsive, user-friendly websites. I
                specialize in creating modern, scalable web applications using
                technologies like React, Next.js, and Tailwind CSS.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.8 }}
                className="leading-relaxed"
              >
                My goal is to make the web more accessible and engaging for
                users through innovative design and seamless user interfaces.
                When I'm not coding, you can find me exploring new technologies,
                experimenting with design.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="leading-relaxed font-medium"
              >
                I'm always eager to take on new challenges and grow as a
                developer.
              </motion.p>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-12 pt-8 border-t border-neutral-200"
          >
            <div className="flex justify-center">
              <AnimatedText />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function AnimatedText() {
  const words = ["Create", "Design", "Develop", "Build", "Innovate"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 overflow-hidden">
      <motion.div
        key={index}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl font-bold text-white"
      >
        {words[index]}
      </motion.div>
    </div>
  );
}
