"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import SkillCard from "./skill-card";
import GlowBackground from "./glow-background";
import {
  Code,
  Database,
  Palette,
  Sparkles,
  BookOpen,
  BookOpenIcon as BookClosed,
  Figma,
  Github,
  Linkedin,
  Chrome,
  Server,
  Layers,
} from "lucide-react";

// Define skills data with more detailed information and logos
const skills = [
  {
    id: 1,
    name: "Frontend Development",
    icon: <Code className="h-8 w-8" />,
    color: "from-rose-400 to-burgundy-600",
    bgClass: "bg-gradient-to-br from-rose-900/20 to-burgundy-900/30",
    skills: [
      {
        name: "React",
        level: 90,
        icon: <Chrome className="h-5 w-5 text-sky-400" />,
        description: "Component architecture, hooks, context API",
      },
      {
        name: "HTML/CSS",
        level: 95,
        icon: <Layers className="h-5 w-5 text-orange-400" />,
        description: "Semantic markup, CSS3, animations",
      },
      {
        name: "JavaScript",
        level: 85,
        icon: <Github className="h-5 w-5 text-yellow-400" />,
        description: "ES6+, async/await, DOM manipulation",
      },
      {
        name: "TypeScript",
        level: 80,
        icon: <Code className="h-5 w-5 text-blue-400" />,
        description: "Type safety, interfaces, generics",
      },
    ],
  },
  {
    id: 2,
    name: "Backend Development",
    icon: <Database className="h-8 w-8" />,
    color: "from-emerald-400 to-teal-600",
    bgClass: "bg-gradient-to-br from-emerald-900/20 to-teal-900/30",
    skills: [
      {
        name: "Node.js",
        level: 85,
        icon: <Server className="h-5 w-5 text-green-400" />,
        description: "Express, RESTful APIs, middleware",
      },
      {
        name: "Express",
        level: 80,
        icon: <Server className="h-5 w-5 text-gray-400" />,
        description: "Routing, authentication, error handling",
      },
      {
        name: "MongoDB",
        level: 75,
        icon: <Database className="h-5 w-5 text-green-500" />,
        description: "Schema design, aggregation, indexing",
      },
      {
        name: "SQL",
        level: 70,
        icon: <Database className="h-5 w-5 text-blue-500" />,
        description: "Queries, joins, transactions",
      },
    ],
  },
  {
    id: 3,
    name: "UI/UX Design",
    icon: <Palette className="h-8 w-8" />,
    color: "from-violet-400 to-purple-600",
    bgClass: "bg-gradient-to-br from-violet-900/20 to-purple-900/30",
    skills: [
      {
        name: "Figma",
        level: 85,
        icon: <Figma className="h-5 w-5 text-purple-400" />,
        description: "Prototyping, components, auto layout",
      },
      {
        name: "UI Design",
        level: 80,
        icon: <Palette className="h-5 w-5 text-pink-400" />,
        description: "Color theory, typography, visual hierarchy",
      },
      {
        name: "Responsive Design",
        level: 90,
        icon: <Layers className="h-5 w-5 text-blue-400" />,
        description: "Mobile-first, adaptive layouts",
      },
      {
        name: "Prototyping",
        level: 75,
        icon: <Figma className="h-5 w-5 text-indigo-400" />,
        description: "Interactive prototypes, user flows",
      },
    ],
  },
  {
    id: 4,
    name: "Professional Skills",
    icon: <Sparkles className="h-8 w-8" />,
    color: "from-amber-400 to-orange-600",
    bgClass: "bg-gradient-to-br from-amber-900/20 to-orange-900/30",
    skills: [
      {
        name: "Git",
        level: 85,
        icon: <Github className="h-5 w-5 text-white" />,
        description: "Version control, branching strategies",
      },
      {
        name: "DevOps",
        level: 70,
        icon: <Server className="h-5 w-5 text-gray-400" />,
        description: "CI/CD, Docker, deployment",
      },
      {
        name: "Testing",
        level: 75,
        icon: <Code className="h-5 w-5 text-green-400" />,
        description: "Unit testing, integration testing",
      },
      {
        name: "Networking",
        level: 80,
        icon: <Linkedin className="h-5 w-5 text-blue-400" />,
        description: "Professional communication, teamwork",
      },
    ],
  },
];

export default function SkillsShowcase() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInitialRender) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
      });
      setIsInitialRender(false);
    }
  }, [isInitialRender, controls]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const toggleBook = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setSelectedSkill(null);
    }
  };

  // Parallax effect for decorative elements
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="w-full max-w-4xl relative"
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      ref={ref}
    >
      <GlowBackground mousePosition={mousePosition} />

      <div className="flex justify-center mb-12">
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 30px rgba(209, 160, 128, 0.3)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            onClick={toggleBook}
            className="font-playfair text-lg px-10 py-7 rounded-full bg-gradient-to-r from-burgundy-500 to-burgundy-700 hover:from-burgundy-600 hover:to-burgundy-800 shadow-lg border border-burgundy-400/30 flex items-center gap-3 group relative overflow-hidden"
          >
            {/* Button shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-45deg]"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 3,
                ease: "easeInOut",
                repeatDelay: 1,
              }}
            />

            {isOpen ? (
              <>
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <BookOpen className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                </motion.div>
                <span>Close Portfolio</span>
              </>
            ) : (
              <>
                <motion.div
                  animate={{
                    rotate: [0, 10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    repeatDelay: 3,
                  }}
                >
                  <BookClosed className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                </motion.div>
                <span>View My Skills</span>
              </>
            )}

            {/* Subtle pulsing border */}
            <motion.div
              className="absolute -inset-[1px] rounded-full z-[-1]"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              style={{
                background:
                  "linear-gradient(45deg, rgba(209, 160, 128, 0.5), rgba(209, 160, 128, 0.2))",
              }}
            />
          </Button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="perspective-1200"
          >
            <div className="relative w-full">
              {/* Book cover animation */}
              <div className="flex justify-center">
                <motion.div
                  className="book-container"
                  initial="closed"
                  animate={isOpen ? "open" : "closed"}
                >
                  {/* Page turning effect */}
                  <motion.div
                    className="book-page absolute"
                    variants={{
                      closed: { rotateY: 0, opacity: 0 },
                      open: { rotateY: -170, opacity: 1 },
                    }}
                    transition={{
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.2,
                    }}
                  >
                    <div className="book-page-content"></div>
                  </motion.div>

                  <motion.div
                    className="book-left bg-gradient-to-br from-burgundy-800 to-burgundy-950 rounded-l-lg shadow-xl border-l border-t border-b border-burgundy-700/50"
                    variants={{
                      open: {
                        rotateY: -180,
                        boxShadow: "10px 10px 30px rgba(0,0,0,0.3)",
                      },
                      closed: {
                        rotateY: 0,
                        boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
                      },
                    }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="book-content flex flex-col items-center justify-center h-full">
                      <motion.div
                        className="book-decoration"
                        animate={{
                          rotateZ: [0, 360],
                        }}
                        transition={{
                          duration: 60,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      >
                        <svg
                          width="80"
                          height="80"
                          viewBox="0 0 80 80"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <motion.circle
                            cx="40"
                            cy="40"
                            r="38"
                            stroke="#D1A080"
                            strokeWidth="1.5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                              duration: 2,
                              delay: 0.5,
                              ease: "easeInOut",
                            }}
                          />
                          <motion.circle
                            cx="40"
                            cy="40"
                            r="30"
                            stroke="#D1A080"
                            strokeWidth="1"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                              duration: 2,
                              delay: 0.7,
                              ease: "easeInOut",
                            }}
                          />
                          <motion.path
                            d="M40 10V70"
                            stroke="#D1A080"
                            strokeWidth="0.5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                              duration: 1.5,
                              delay: 0.9,
                              ease: "easeInOut",
                            }}
                          />
                          <motion.path
                            d="M10 40H70"
                            stroke="#D1A080"
                            strokeWidth="0.5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                              duration: 1.5,
                              delay: 1.1,
                              ease: "easeInOut",
                            }}
                          />
                          <motion.path
                            d="M18.5 18.5L61.5 61.5"
                            stroke="#D1A080"
                            strokeWidth="0.5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                              duration: 1.5,
                              delay: 1.3,
                              ease: "easeInOut",
                            }}
                          />
                          <motion.path
                            d="M18.5 61.5L61.5 18.5"
                            stroke="#D1A080"
                            strokeWidth="0.5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                              duration: 1.5,
                              delay: 1.5,
                              ease: "easeInOut",
                            }}
                          />
                        </svg>
                      </motion.div>
                    </div>
                    <div className="book-spine"></div>

                    {/* Gold foil effect */}
                    <motion.div
                      className="absolute inset-0 gold-foil-effect rounded-l-lg opacity-0"
                      animate={{ opacity: [0, 0.2, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>

                  <motion.div
                    className="book-right bg-gradient-to-br from-burgundy-800 to-burgundy-950 rounded-r-lg shadow-xl border-r border-t border-b border-burgundy-700/50"
                    variants={{
                      open: {
                        rotateY: 180,
                        boxShadow: "-10px 10px 30px rgba(0,0,0,0.3)",
                      },
                      closed: {
                        rotateY: 0,
                        boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
                      },
                    }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="book-content flex flex-col items-center justify-center h-full">
                      <motion.div
                        className="book-decoration"
                        animate={{
                          rotateZ: [0, -360],
                        }}
                        transition={{
                          duration: 60,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      >
                        <svg
                          width="80"
                          height="80"
                          viewBox="0 0 80 80"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <motion.circle
                            cx="40"
                            cy="40"
                            r="38"
                            stroke="#D1A080"
                            strokeWidth="1.5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                              duration: 2,
                              delay: 0.5,
                              ease: "easeInOut",
                            }}
                          />
                          <motion.circle
                            cx="40"
                            cy="40"
                            r="30"
                            stroke="#D1A080"
                            strokeWidth="1"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                              duration: 2,
                              delay: 0.7,
                              ease: "easeInOut",
                            }}
                          />
                          <motion.path
                            d="M40 10V70"
                            stroke="#D1A080"
                            strokeWidth="0.5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                              duration: 1.5,
                              delay: 0.9,
                              ease: "easeInOut",
                            }}
                          />
                          <motion.path
                            d="M10 40H70"
                            stroke="#D1A080"
                            strokeWidth="0.5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                              duration: 1.5,
                              delay: 1.1,
                              ease: "easeInOut",
                            }}
                          />
                          <motion.path
                            d="M18.5 18.5L61.5 61.5"
                            stroke="#D1A080"
                            strokeWidth="0.5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                              duration: 1.5,
                              delay: 1.3,
                              ease: "easeInOut",
                            }}
                          />
                          <motion.path
                            d="M18.5 61.5L61.5 18.5"
                            stroke="#D1A080"
                            strokeWidth="0.5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                              duration: 1.5,
                              delay: 1.5,
                              ease: "easeInOut",
                            }}
                          />
                        </svg>
                      </motion.div>
                    </div>
                    <div className="book-spine"></div>

                    {/* Gold foil effect */}
                    <motion.div
                      className="absolute inset-0 gold-foil-effect rounded-r-lg opacity-0"
                      animate={{ opacity: [0, 0.2, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    />
                  </motion.div>
                </motion.div>
              </div>

              {/* Skills content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-12"
              >
                {selectedSkill === null ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.id}
                        initial={{ opacity: 0, y: 20, rotateX: -10 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          rotateX: 0,
                          transition: {
                            delay: 1.2 + index * 0.15,
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        }}
                        whileHover={{
                          scale: 1.03,
                          boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                          rotateX: 5,
                          rotateY: 5,
                          z: 10,
                        }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedSkill(skill.id)}
                        style={{
                          transformStyle: "preserve-3d",
                        }}
                      >
                        <SkillCard skill={skill} />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`${
                      skills[selectedSkill - 1].bgClass
                    } rounded-xl p-8 shadow-xl border border-white/10 backdrop-blur-sm relative overflow-hidden`}
                  >
                    {/* Animated background elements */}
                    <motion.div
                      className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-white/5"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.15, 0.1],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    />

                    <motion.div
                      className="absolute -left-20 -bottom-20 w-60 h-60 rounded-full bg-white/5"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.05, 0.1, 0.05],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        delay: 1,
                      }}
                    />

                    <div className="flex justify-between items-center mb-8 relative z-10">
                      <div className="flex items-center gap-4">
                        <motion.div
                          className={`p-4 rounded-full bg-gradient-to-r ${
                            skills[selectedSkill - 1].color
                          } shadow-lg`}
                          initial={{ rotate: -20, scale: 0.8 }}
                          animate={{ rotate: 0, scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                          }}
                        >
                          {skills[selectedSkill - 1].icon}
                        </motion.div>
                        <motion.h3
                          className="text-3xl font-playfair font-bold text-white"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {skills[selectedSkill - 1].name}
                        </motion.h3>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Button
                          variant="outline"
                          onClick={() => setSelectedSkill(null)}
                          className="border-white/20 text-white hover:bg-white/10 font-raleway relative overflow-hidden group"
                        >
                          <span className="relative z-10">Back to Skills</span>
                          <motion.div
                            className="absolute inset-0 bg-white/10"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "0%" }}
                            transition={{ duration: 0.3 }}
                          />
                        </Button>
                      </motion.div>
                    </div>

                    <div className="space-y-8 relative z-10">
                      {skills[selectedSkill - 1].skills.map(
                        (subSkill, index) => (
                          <motion.div
                            key={index}
                            className="space-y-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{
                              opacity: 1,
                              x: 0,
                              transition: {
                                delay: 0.4 + index * 0.15,
                                duration: 0.5,
                              },
                            }}
                          >
                            <div className="flex items-center gap-3 mb-1">
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                  delay: 0.5 + index * 0.15,
                                  type: "spring",
                                  stiffness: 300,
                                  damping: 15,
                                }}
                              >
                                {subSkill.icon}
                              </motion.div>
                              <span className="text-white font-playfair text-lg">
                                {subSkill.name}
                              </span>
                              <span className="text-white/70 font-raleway ml-auto">
                                {subSkill.level}%
                              </span>
                            </div>
                            <p className="text-white/60 font-raleway text-sm mb-2">
                              {subSkill.description}
                            </p>
                            <div className="h-2 bg-black/30 rounded-full overflow-hidden backdrop-blur-sm relative">
                              <motion.div
                                className={`h-full bg-gradient-to-r ${
                                  skills[selectedSkill - 1].color
                                }`}
                                initial={{ width: 0 }}
                                animate={{ width: `${subSkill.level}%` }}
                                transition={{
                                  duration: 1.2,
                                  ease: "easeOut",
                                  delay: 0.6 + index * 0.15,
                                }}
                              />

                              {/* Animated glow effect on progress bar */}
                              <motion.div
                                className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                initial={{ left: "-20%" }}
                                animate={{ left: "120%" }}
                                transition={{
                                  duration: 2,
                                  delay: 1.5 + index * 0.2,
                                  repeat: Number.POSITIVE_INFINITY,
                                  repeatDelay: 3,
                                }}
                              />
                            </div>
                          </motion.div>
                        )
                      )}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
