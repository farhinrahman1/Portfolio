"use client";

import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
  easeIn,
  easeInOut,
} from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Code, Lightbulb, Zap, ArrowRight, Quote } from "lucide-react";

export default function AboutSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  const [activeQuote, setActiveQuote] = useState(0);

  const quotes = [
    "Design is not just what it looks like and feels like. Design is how it works.",
    "The details are not the details. They make the design.",
    "Simplicity is the ultimate sophistication.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.2,
        duration: 0.8,
        ease: easeInOut,
      },
    }),
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      y: -40,
      transition: {
        duration: 0.6,
        ease: easeInOut,
      },
    },
  };

  const words = [
    "Create",
    "Design",
    "Develop",
    "Build",
    "Innovate",
    "Transform",
  ];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity, scale }}
      className="py-20 px-4 flex items-center justify-center min-h-screen relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-neutral-200 dark:bg-neutral-800"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-full md:max-w-4xl mx-auto dark:bg-neutral-800/90 bg-white/90 backdrop-blur-lg rounded-lg shadow-xl relative z-10 border border-neutral-200 dark:border-neutral-700"
      >
        <div className="p-8 md:p-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: easeInOut,
            }}
            className="relative"
          >
            {/* Animated decorative element */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-neutral-300 dark:border-neutral-600"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            />
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: easeInOut,
              }}
              className="md:col-span-2"
            >
              <div className="text-lg md:text-2xl font-semibold text-neutral-800 dark:text-white mb-6">
                Here is a little about me.
              </div>

              <div className="space-y-6">
                <motion.div
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <div className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-700">
                    <Code className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
                  </div>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Frontend Developer
                  </p>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <div className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-700">
                    <Lightbulb className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
                  </div>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    UI/UX Enthusiast
                  </p>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  <div className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-700">
                    <Zap className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
                  </div>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Problem Solver
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div className="md:col-span-3 text-neutral-700 dark:text-neutral-300 space-y-6">
              <motion.p
                className="leading-relaxed text-lg"
                custom={0}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={paragraphVariants}
              >
                A{" "}
                <span className="font-semibold">
                  passionate Frontend Developer
                </span>{" "}
                with over 2 years of experience in designing and building
                responsive, user-friendly websites. I specialize in creating
                modern, scalable web applications using technologies like{" "}
                <span className="italic">React</span>,{" "}
                <span className="italic">Next.js</span>, and{" "}
                <span className="italic">Tailwind CSS</span>.
              </motion.p>

              <motion.p
                className="leading-relaxed text-lg"
                custom={1}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={paragraphVariants}
              >
                My goal is to make the web more accessible and engaging for
                users through innovative design and seamless user interfaces.
                When I'm not coding, you can find me exploring new technologies,
                experimenting with design, and constantly learning new skills to
                improve my craft.
              </motion.p>

              <motion.p
                className="leading-relaxed text-lg font-medium"
                custom={2}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={paragraphVariants}
              >
                I'm always eager to take on new challenges and grow as a
                developer.
              </motion.p>
            </motion.div>
          </div>

          {/* Quote section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mb-12 p-6 border border-neutral-200 dark:border-neutral-700 rounded-lg relative"
          >
            <Quote className="absolute text-neutral-300 dark:text-neutral-700 w-8 h-8 -top-4 -left-4" />
            <div className="h-16 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeQuote}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg italic text-neutral-700 dark:text-neutral-300 text-center"
                >
                  "{quotes[activeQuote]}"
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
