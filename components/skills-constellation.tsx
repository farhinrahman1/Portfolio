"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import SkillsDetailView from "./skills-detail-view";

// Update the Skill type to include description
type Skill = {
  id: string;
  name: string;
  level: number;
  category: "frontend" | "backend" | "design" | "other";
  relatedTo: string[];
  description: string;
};

// Replace the skills array with this updated version that includes descriptions
const skills: Skill[] = [
  {
    id: "react",
    name: "React",
    level: 90,
    category: "frontend",
    relatedTo: ["javascript", "typescript", "nextjs"],
    description:
      "Component-based UI library for building interactive web applications",
  },
  {
    id: "nextjs",
    name: "Next.js",
    level: 85,
    category: "frontend",
    relatedTo: ["react", "typescript", "nodejs"],
    description:
      "React framework with SSR, file-based routing, and optimized performance",
  },
  {
    id: "typescript",
    name: "TypeScript",
    level: 80,
    category: "frontend",
    relatedTo: ["javascript", "react", "nodejs"],
    description:
      "Strongly typed programming language that builds on JavaScript",
  },
  {
    id: "javascript",
    name: "JavaScript",
    level: 95,
    category: "frontend",
    relatedTo: ["typescript", "react", "nodejs"],
    description: "Dynamic programming language for web development and beyond",
  },
  {
    id: "nodejs",
    name: "Node.js",
    level: 75,
    category: "backend",
    relatedTo: ["javascript", "express", "mongodb"],
    description:
      "JavaScript runtime for server-side applications and API development",
  },
  {
    id: "express",
    name: "Express",
    level: 70,
    category: "backend",
    relatedTo: ["nodejs", "mongodb"],
    description: "Fast, unopinionated web framework for Node.js applications",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    level: 65,
    category: "backend",
    relatedTo: ["nodejs", "express"],
    description: "NoSQL document database for modern applications",
  },
  {
    id: "figma",
    name: "Figma",
    level: 80,
    category: "design",
    relatedTo: ["css", "tailwind"],
    description: "Collaborative interface design tool for UI/UX design",
  },
  {
    id: "css",
    name: "CSS",
    level: 85,
    category: "frontend",
    relatedTo: ["html", "tailwind", "figma"],
    description:
      "Styling language used to describe the presentation of documents",
  },
  {
    id: "html",
    name: "HTML",
    level: 95,
    category: "frontend",
    relatedTo: ["css", "javascript"],
    description:
      "Standard markup language for documents designed to be displayed in browsers",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    level: 90,
    category: "frontend",
    relatedTo: ["css", "react", "nextjs"],
    description:
      "Utility-first CSS framework for rapidly building custom designs",
  },
  {
    id: "git",
    name: "Git",
    level: 85,
    category: "other",
    relatedTo: ["github"],
    description:
      "Distributed version control system for tracking changes in source code",
  },
  {
    id: "github",
    name: "GitHub",
    level: 80,
    category: "other",
    relatedTo: ["git"],
    description: "Platform for hosting and collaborating on Git repositories",
  },
];

export default function SkillsConstellation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [positions, setPositions] = useState<
    Record<string, { x: number; y: number }>
  >({});
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const [showDetailView, setShowDetailView] = useState(false);

  // Calculate positions for skills in a constellation pattern
  useEffect(() => {
    if (!containerRef.current) return;

    const { width, height } = containerRef.current.getBoundingClientRect();
    setDimensions({ width, height });

    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.4; // Increased radius for more spacing

    // Group skills by category
    const categories = {
      frontend: skills.filter((s) => s.category === "frontend"),
      backend: skills.filter((s) => s.category === "backend"),
      design: skills.filter((s) => s.category === "design"),
      other: skills.filter((s) => s.category === "other"),
    };

    const newPositions: Record<string, { x: number; y: number }> = {};

    // Position frontend skills in top-right quadrant with more spacing
    categories.frontend.forEach((skill, i, arr) => {
      const angle =
        Math.PI / 3 + (Math.PI / 3) * (i / Math.max(1, arr.length - 1));
      newPositions[skill.id] = {
        x: centerX + radius * Math.cos(angle),
        y: centerY - radius * Math.sin(angle),
      };
    });

    // Position backend skills in bottom-right quadrant with more spacing
    categories.backend.forEach((skill, i, arr) => {
      const angle =
        (2 * Math.PI) / 3 + (Math.PI / 3) * (i / Math.max(1, arr.length - 1));
      newPositions[skill.id] = {
        x: centerX + radius * Math.cos(angle),
        y: centerY - radius * Math.sin(angle),
      };
    });

    // Position design skills in bottom-left quadrant with more spacing
    categories.design.forEach((skill, i, arr) => {
      const angle = Math.PI + (Math.PI / 3) * (i / Math.max(1, arr.length - 1));
      newPositions[skill.id] = {
        x: centerX + radius * Math.cos(angle),
        y: centerY - radius * Math.sin(angle),
      };
    });

    // Position other skills in top-left quadrant with more spacing
    categories.other.forEach((skill, i, arr) => {
      const angle =
        (4 * Math.PI) / 3 + (Math.PI / 3) * (i / Math.max(1, arr.length - 1));
      newPositions[skill.id] = {
        x: centerX + radius * Math.cos(angle),
        y: centerY - radius * Math.sin(angle),
      };
    });

    setPositions(newPositions);
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "frontend":
        return "bg-gray-800 border-gray-700";
      case "backend":
        return "bg-gray-900 border-gray-800";
      case "design":
        return "bg-black border-gray-900";
      default:
        return "bg-gray-700 border-gray-600";
    }
  };

  const getRelatedSkills = (skillId: string) => {
    const skill = skills.find((s) => s.id === skillId);
    return skill ? skill.relatedTo : [];
  };

  const isRelated = (skill1: string, skill2: string) => {
    const related = getRelatedSkills(skill1);
    return related.includes(skill2);
  };

  return (
    <div
      className="w-full h-screen bg-gray-100 relative overflow-hidden"
      id="skills"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-200 z-0"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          Skills Constellation
        </motion.h2>

        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={() => setShowDetailView(true)}
            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors shadow-md"
          >
            View All Skills with Descriptions
          </button>
        </motion.div>

        <motion.p
          className="text-lg text-center mb-12 text-gray-700 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore my interconnected skills network. Hover over any skill to see
          its relationships.
        </motion.p>

        <div
          ref={containerRef}
          className="relative w-full h-[600px] border border-gray-300 rounded-xl bg-white shadow-xl overflow-hidden"
        >
          {/* Skill nodes */}
          {Object.keys(positions).length > 0 &&
            skills.map((skill) => (
              <motion.div
                key={skill.id}
                className={cn(
                  "absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2",
                  getCategoryColor(skill.category),
                  activeSkill === skill.id ? "z-20 scale-110" : "z-10",
                  activeSkill &&
                    activeSkill !== skill.id &&
                    !isRelated(activeSkill, skill.id)
                    ? "opacity-30"
                    : "opacity-100"
                )}
                style={{
                  left: positions[skill.id]?.x || 0,
                  top: positions[skill.id]?.y || 0,
                  width: `${Math.max(80, skill.level)}px`, // Larger nodes
                  height: `${Math.max(80, skill.level)}px`, // Larger nodes
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={
                  isInView
                    ? {
                        scale: activeSkill === skill.id ? 1.1 : 1,
                        opacity:
                          activeSkill &&
                          activeSkill !== skill.id &&
                          !isRelated(activeSkill, skill.id)
                            ? 0.3
                            : 1,
                      }
                    : { scale: 0, opacity: 0 }
                }
                transition={{
                  duration: 0.5,
                  delay: 0.1 * skills.findIndex((s) => s.id === skill.id),
                }}
                onMouseEnter={() => setActiveSkill(skill.id)}
                onMouseLeave={() => setActiveSkill(null)}
                whileHover={{ scale: 1.1 }}
              >
                <div className="absolute inset-0 rounded-full flex flex-col items-center justify-center p-2 text-center">
                  <span className="text-sm font-medium text-white">
                    {skill.name}
                  </span>
                  {activeSkill === skill.id && (
                    <span className="text-xs text-white/80 mt-1 line-clamp-2">
                      {skill.description}
                    </span>
                  )}
                </div>

                {/* Skill level indicator */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="4"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="48"
                    fill="none"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={
                      isInView
                        ? { pathLength: skill.level / 100 }
                        : { pathLength: 0 }
                    }
                    transition={{
                      duration: 1.5,
                      delay:
                        0.5 + 0.05 * skills.findIndex((s) => s.id === skill.id),
                    }}
                    strokeDasharray="300"
                    strokeDashoffset="0"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
              </motion.div>
            ))}

          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
            {activeSkill &&
              Object.keys(positions).length > 0 &&
              skills.map((skill) => {
                if (skill.id === activeSkill) {
                  return skill.relatedTo.map((relatedId) => (
                    <motion.line
                      key={`${skill.id}-${relatedId}`}
                      x1={positions[skill.id]?.x || 0}
                      y1={positions[skill.id]?.y || 0}
                      x2={positions[relatedId]?.x || 0}
                      y2={positions[relatedId]?.y || 0}
                      stroke="rgba(0,0,0,0.2)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      initial={{ opacity: 0, pathLength: 0 }}
                      animate={{ opacity: 1, pathLength: 1 }}
                      transition={{ duration: 0.6 }}
                    />
                  ));
                }
                return null;
              })}
          </svg>

          {/* Category labels */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 bg-white/80 p-3 rounded-lg shadow-md z-30">
            <div className="text-sm font-semibold mb-1">Categories:</div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-800"></div>
              <span className="text-xs">Frontend</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-900"></div>
              <span className="text-xs">Backend</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-black"></div>
              <span className="text-xs">Design</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-700"></div>
              <span className="text-xs">Other</span>
            </div>
          </div>

          {/* Active skill details */}
          {activeSkill && (
            <motion.div
              className="absolute bottom-4 left-4 bg-white/90 p-4 rounded-lg shadow-lg z-30 max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <h3 className="font-bold text-lg mb-1">
                {skills.find((s) => s.id === activeSkill)?.name}
              </h3>
              <div className="w-full bg-gray-200 h-2 rounded-full mb-2">
                <motion.div
                  className="bg-gray-800 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${
                      skills.find((s) => s.id === activeSkill)?.level || 0
                    }%`,
                  }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
              </div>
              <p className="text-sm text-gray-600">
                Category: {skills.find((s) => s.id === activeSkill)?.category}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Related to:{" "}
                {skills
                  .find((s) => s.id === activeSkill)
                  ?.relatedTo.map((id) => skills.find((s) => s.id === id)?.name)
                  .join(", ")}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Description:{" "}
                {skills.find((s) => s.id === activeSkill)?.description}
              </p>
            </motion.div>
          )}

          {/* Floating particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full bg-gray-300/30 pointer-events-none z-0"
              style={{
                width: Math.random() * 6 + 2,
                height: Math.random() * 6 + 2,
              }}
              initial={{
                x: Math.random() * dimensions.width,
                y: Math.random() * dimensions.height,
                opacity: Math.random() * 0.5 + 0.2,
              }}
              animate={{
                x: [
                  Math.random() * dimensions.width,
                  Math.random() * dimensions.width,
                  Math.random() * dimensions.width,
                ],
                y: [
                  Math.random() * dimensions.height,
                  Math.random() * dimensions.height,
                  Math.random() * dimensions.height,
                ],
                opacity: [
                  Math.random() * 0.5 + 0.2,
                  Math.random() * 0.5 + 0.5,
                  Math.random() * 0.5 + 0.2,
                ],
              }}
              transition={{
                duration: Math.random() * 20 + 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Instructions */}
        <motion.p
          className="text-sm text-center mt-6 text-gray-500"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Hover over any skill node to see its connections and details
        </motion.p>
      </div>
      <SkillsDetailView
        skills={skills}
        isOpen={showDetailView}
        onClose={() => setShowDetailView(false)}
      />
    </div>
  );
}
