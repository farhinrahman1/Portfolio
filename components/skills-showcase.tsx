"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import SkillCard from "./skill-card";
import {
  Code,
  Database,
  Palette,
  Sparkles,
  Plus,
  X,
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
    bgClass: "bg-gradient-to-br from-gray-900 to-black",
    skills: [
      {
        name: "React",
        level: 90,
        icon: <Chrome className="h-5 w-5 text-white" />,
        description: "Component architecture, hooks, context API",
      },
      {
        name: "HTML/CSS",
        level: 95,
        icon: <Layers className="h-5 w-5 text-white" />,
        description: "Semantic markup, CSS3, animations",
      },
      {
        name: "JavaScript",
        level: 85,
        icon: <Github className="h-5 w-5 text-white" />,
        description: "ES6+, async/await, DOM manipulation",
      },
      {
        name: "TypeScript",
        level: 80,
        icon: <Code className="h-5 w-5 text-white" />,
        description: "Type safety, interfaces, generics",
      },
    ],
  },
  {
    id: 2,
    name: "Backend Development",
    icon: <Database className="h-8 w-8" />,
    bgClass: "bg-gradient-to-br from-gray-900 to-black",
    skills: [
      {
        name: "Node.js",
        level: 85,
        icon: <Server className="h-5 w-5 text-white" />,
        description: "Express, RESTful APIs, middleware",
      },
      {
        name: "Express",
        level: 80,
        icon: <Server className="h-5 w-5 text-gray-300" />,
        description: "Routing, authentication, error handling",
      },
      {
        name: "MongoDB",
        level: 75,
        icon: <Database className="h-5 w-5 text-white" />,
        description: "Schema design, aggregation, indexing",
      },
      {
        name: "SQL",
        level: 70,
        icon: <Database className="h-5 w-5 text-white" />,
        description: "Queries, joins, transactions",
      },
    ],
  },
  {
    id: 3,
    name: "UI/UX Design",
    icon: <Palette className="h-8 w-8" />,
    bgClass: "bg-gradient-to-br from-gray-900 to-black",
    skills: [
      {
        name: "Figma",
        level: 85,
        icon: <Figma className="h-5 w-5 text-white" />,
        description: "Prototyping, components, auto layout",
      },
      {
        name: "UI Design",
        level: 80,
        icon: <Palette className="h-5 w-5 text-white" />,
        description: "Color theory, typography, visual hierarchy",
      },
      {
        name: "Responsive Design",
        level: 90,
        icon: <Layers className="h-5 w-5 text-white" />,
        description: "Mobile-first, adaptive layouts",
      },
      {
        name: "Prototyping",
        level: 75,
        icon: <Figma className="h-5 w-5 text-white" />,
        description: "Interactive prototypes, user flows",
      },
    ],
  },
  {
    id: 4,
    name: "Professional Skills",
    icon: <Sparkles className="h-8 w-8" />,
    bgClass: "bg-gradient-to-br from-gray-900 to-black",
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
        icon: <Server className="h-5 w-5 text-gray-300" />,
        description: "CI/CD, Docker, deployment",
      },
      {
        name: "Testing",
        level: 75,
        icon: <Code className="h-5 w-5 text-white" />,
        description: "Unit testing, integration testing",
      },
      {
        name: "Networking",
        level: 80,
        icon: <Linkedin className="h-5 w-5 text-white" />,
        description: "Professional communication, teamwork",
      },
    ],
  },
];

export default function SkillsShowcase() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const toggleSkills = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setSelectedSkill(null);
    }
  };

  return (
    <motion.div
      className="w-full max-w-4xl relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      ref={ref}
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-background"></div>
        <div className="absolute inset-0 noise-overlay"></div>
      </div>

      <div className="flex justify-center mb-12">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={toggleSkills}
            className="font-raleway text-lg px-10 py-7 rounded-full bg-white text-black hover:bg-gray-200 shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center gap-3 group relative overflow-hidden"
          >
            {/* Button shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400 to-transparent skew-x-[-45deg]"
              initial={{ x: "-100%" }}
              animate={{ x: "300%" }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 3,
                ease: "easeInOut",
                repeatDelay: 1,
              }}
            />

            <motion.div
              animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Plus className="h-5 w-5" />
              )}
            </motion.div>
            <span className="relative z-10">
              {isOpen ? "Close Skills" : "Explore Skills"}
            </span>
          </Button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {selectedSkill === null ? (
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                }}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {skills.map((skill) => (
                  <motion.div
                    key={skill.id}
                    variants={{
                      hidden: { y: 50, opacity: 0 },
                      visible: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          type: "spring",
                          stiffness: 100,
                          damping: 15,
                        },
                      },
                    }}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedSkill(skill.id)}
                    className="card-container"
                  >
                    <SkillCard skill={skill} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <SkillDetail
                skill={skills[selectedSkill - 1]}
                onClose={() => setSelectedSkill(null)}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function SkillDetail({
  skill,
  onClose,
}: {
  skill: (typeof skills)[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`${skill.bgClass} rounded-xl p-8 shadow-2xl border border-gray-800 backdrop-blur-sm relative overflow-hidden`}
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

      <div className="flex justify-between items-center mb-8 relative z-10">
        <div className="flex items-center gap-4">
          <motion.div
            className="p-4 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg"
            initial={{ rotate: -20, scale: 0.8 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
          >
            {skill.icon}
          </motion.div>
          <motion.h3
            className="text-3xl font-playfair font-bold text-white"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {skill.name}
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
            onClick={onClose}
            className="border-gray-700 text-black font-semibold hover:bg-white/35 font-raleway relative overflow-hidden group"
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
        {skill.skills.map((subSkill, index) => (
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
              <span className="text-gray-400 font-raleway ml-auto">
                {subSkill.level}%
              </span>
            </div>
            <p className="text-gray-400 font-raleway text-sm mb-2">
              {subSkill.description}
            </p>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden backdrop-blur-sm relative">
              <motion.div
                className="h-full bg-gradient-to-r from-white/70 to-white/90"
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
        ))}
      </div>
    </motion.div>
  );
}
