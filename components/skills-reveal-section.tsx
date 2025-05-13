"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Database,
  Globe,
  Layers,
  Server,
  Palette,
  Zap,
  GitBranch,
  ChevronDown,
} from "lucide-react";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

type Skill = {
  id: string;
  name: string;
  icon: React.ReactNode;
  category: "frontend" | "backend";
  description: string;
  color: string;
};

export default function SkillsRevealSection() {
  const [activeCategory, setActiveCategory] = useState<"frontend" | "backend">(
    "frontend"
  );
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    // Frontend Skills
    {
      id: "html-css",
      name: "HTML & CSS",
      icon: <Code />,
      category: "frontend",
      description:
        "Creating responsive, accessible, and visually appealing user interfaces with modern HTML5 and CSS3 techniques including Grid, Flexbox, and animations.",
      color: "bg-gradient-to-br from-orange-400 to-pink-600",
    },
    {
      id: "javascript",
      name: "JavaScript",
      icon: <Zap />,
      category: "frontend",
      description:
        "Building interactive web applications with modern JavaScript, including ES6+ features, asynchronous programming, and DOM manipulation.",
      color: "bg-gradient-to-br from-yellow-400 to-amber-600",
    },
    {
      id: "react",
      name: "React",
      icon: <Globe />,
      category: "frontend",
      description:
        "Developing component-based user interfaces with React, focusing on hooks, context API, and performance optimization techniques.",
      color: "bg-gradient-to-br from-cyan-400 to-blue-600",
    },
    {
      id: "nextjs",
      name: "Next.js",
      icon: <Layers />,
      category: "frontend",
      description:
        "Building full-stack React applications with Next.js, leveraging server components, app router, and server actions for optimal user experiences.",
      color: "bg-gradient-to-br from-slate-600 to-slate-900",
    },
    {
      id: "ui-design",
      name: "UI/UX Design",
      icon: <Palette />,
      category: "frontend",
      description:
        "Creating intuitive and visually appealing user interfaces with a focus on user experience, accessibility, and design systems.",
      color: "bg-gradient-to-br from-purple-400 to-pink-600",
    },

    // Backend Skills
    {
      id: "nodejs",
      name: "Node.js",
      icon: <Server />,
      category: "backend",
      description:
        "Building scalable server-side applications with Node.js, focusing on RESTful APIs, middleware architecture, and performance optimization.",
      color: "bg-gradient-to-br from-green-400 to-emerald-600",
    },
    {
      id: "databases",
      name: "Databases",
      icon: <Database />,
      category: "backend",
      description:
        "Designing and implementing database solutions, including SQL and NoSQL databases, with a focus on data modeling and query optimization.",
      color: "bg-gradient-to-br from-blue-400 to-indigo-600",
    },
    {
      id: "api-design",
      name: "API Design",
      icon: <Globe />,
      category: "backend",
      description:
        "Creating robust and well-documented APIs following RESTful principles, GraphQL, and modern authentication strategies.",
      color: "bg-gradient-to-br from-red-400 to-rose-600",
    },
    {
      id: "serverless",
      name: "Serverless",
      icon: <Zap />,
      category: "backend",
      description:
        "Developing serverless applications using cloud functions and managed services for scalable and cost-effective solutions.",
      color: "bg-gradient-to-br from-amber-400 to-orange-600",
    },
    {
      id: "devops",
      name: "DevOps",
      icon: <GitBranch />,
      category: "backend",
      description:
        "Implementing CI/CD pipelines, containerization, and infrastructure as code for automated testing, deployment, and monitoring.",
      color: "bg-gradient-to-br from-violet-400 to-purple-600",
    },
  ];

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

  // Mouse move animation for 3D effect
  useEffect(() => {
    if (!isRevealed) return;

    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll(
        ".skill-card"
      ) as NodeListOf<HTMLElement>;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        if (card.matches(":hover")) {
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        }
      });
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [activeCategory, isRevealed]);

  return (
    <section className="py-20 px-4 bg-black" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Skills & Expertise
          </h2>
          <p className="text-white max-w-2xl mx-auto mb-12">
            Interactive showcase of my technical skills and expertise
          </p>

          {/* Animated Reveal Button */}
          {!isRevealed ? (
            <InteractiveHoverButton>
              <motion.button
                onClick={() => setIsRevealed(true)}
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-xl text-black overflow-hidden rounded"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(circle at center, white 0%, transparent 70%)",
                  }}
                />

                {/* Button text and icon */}
                <span className="">Reveal My Skills</span>
                <motion.div
                  className="relative z-10"
                  animate={{
                    y: [0, 3, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                >
                  <ChevronDown className="h-5 w-5" />
                </motion.div>
              </motion.button>
            </InteractiveHoverButton>
          ) : null}
        </motion.div>

        <AnimatePresence>
          {isRevealed && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="flex justify-center mb-12">
                <div className="inline-flex rounded-lg border border-slate-200 dark:border-slate-700 p-1 bg-slate-100 dark:bg-slate-800">
                  <button
                    onClick={() => setActiveCategory("frontend")}
                    className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeCategory === "frontend"
                        ? "bg-white dark:bg-slate-700 shadow-sm"
                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                    }`}
                  >
                    Frontend
                  </button>
                  <button
                    onClick={() => setActiveCategory("backend")}
                    className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeCategory === "backend"
                        ? "bg-white dark:bg-slate-700 shadow-sm"
                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                    }`}
                  >
                    Backend
                  </button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredSkills.map((skill, index) => (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="skill-card relative h-64 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ease-out"
                      style={{
                        transformStyle: "preserve-3d",
                        transform: "perspective(1000px)",
                        transformOrigin: "center center",
                      }}
                      onMouseEnter={() => setHoveredSkill(skill.id)}
                      onMouseLeave={() => {
                        setHoveredSkill(null);
                        // Reset transform when not hovering
                        const element = document.getElementById(skill.id);
                        if (element) {
                          element.style.transform = "perspective(1000px)";
                        }
                      }}
                      id={skill.id}
                    >
                      <div className={`absolute inset-0 ${skill.color}`}></div>

                      {/* Glowing effect */}
                      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_70%)]"></div>

                      {/* Content */}
                      <div className="relative h-full p-6 flex flex-col justify-between z-10 text-white">
                        <div>
                          <div className="bg-white/20 p-3 rounded-lg w-fit mb-4">
                            {skill.icon}
                          </div>
                          <h3 className="text-xl font-bold mb-2">
                            {skill.name}
                          </h3>
                        </div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{
                            opacity: hoveredSkill === skill.id ? 1 : 0,
                            y: hoveredSkill === skill.id ? 0 : 10,
                          }}
                          transition={{ duration: 0.3 }}
                          className="text-sm"
                        >
                          {skill.description}
                        </motion.div>
                      </div>

                      {/* Floating particles for visual effect */}
                      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-white/30 animate-pulse"></div>
                      <div className="absolute top-3/4 left-1/2 w-3 h-3 rounded-full bg-white/20 animate-pulse animation-delay-700"></div>
                      <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-white/30 animate-pulse animation-delay-1000"></div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Hide Skills Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center mt-12"
              >
                <motion.button
                  onClick={() => setIsRevealed(false)}
                  className="px-6 py-3 rounded-full text-sm font-medium bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Hide Skills
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
