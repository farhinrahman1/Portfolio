"use client";

import React from "react";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Code, Server, ChevronRight, X, ExternalLink } from "lucide-react";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Button } from "@/components/ui/moving-border";

type Skill = {
  id: string;
  name: string;
  category: "frontend" | "backend";
  description: string;
  color: string;
};

// Skills array with colors for each skill
const skills: Skill[] = [
  {
    id: "react",
    name: "React",
    category: "frontend",
    description:
      "Component-based UI library for building interactive web applications.",
    color: "#61DAFB",
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    description:
      "React framework with server-side rendering and file-based routing.",
    color: "#000000",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    description:
      "Strongly typed programming language that builds on JavaScript.",
    color: "#3178C6",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "frontend",
    description: "Dynamic programming language for web development.",
    color: "#F7DF1E",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    description:
      "Utility-first CSS framework for rapidly building custom designs.",
    color: "#06B6D4",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    description:
      "JavaScript runtime for server-side applications and API development.",
    color: "#339933",
  },
  {
    id: "express",
    name: "Express",
    category: "backend",
    description: "Fast, unopinionated web framework for Node.js applications.",
    color: "#000000",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "backend",
    description: "NoSQL document database for modern applications.",
    color: "#47A248",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "backend",
    description: "Powerful, open-source object-relational database system.",
    color: "#4169E1",
  },
  {
    id: "graphql",
    name: "GraphQL",
    category: "backend",
    description:
      "Query language for APIs and a runtime for executing those queries.",
    color: "#E10098",
  },
];

// Simple skill card component
function SimpleSkillCard({ skill, index }: { skill: Skill; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, {
    once: false,
    amount: 0.2,
    margin: "-100px 0px",
  });

  return (
    <motion.div
      ref={cardRef}
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <div className="bg-gray-900 rounded-xl border-2 border-gray-800 overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex">
          {/* Left side with icon and name */}
          <div
            className="p-6 w-1/3 flex flex-col justify-center items-center"
            style={{
              background: `linear-gradient(135deg, #111111, #222222)`,
              borderRight: `2px solid ${skill.color}`,
            }}
          >
            <div
              className="p-3 rounded-lg mb-3 transition-transform duration-300"
              style={{ backgroundColor: `${skill.color}20` }}
            >
              {skill.category === "frontend" ? (
                <Code className="w-8 h-8" style={{ color: skill.color }} />
              ) : (
                <Server className="w-8 h-8" style={{ color: skill.color }} />
              )}
            </div>
            <h3 className="text-xl font-bold text-white text-center">
              {skill.name}
            </h3>
          </div>

          {/* Right side with description */}
          <div className="p-6 flex-1">
            <p className="text-gray-300">{skill.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Category header component
function CategoryHeader({
  title,
  icon,
  delay,
}: {
  title: string;
  icon: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      className="flex items-center gap-3 mb-6 mt-10"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="p-3 bg-gray-800 rounded-lg">{icon}</div>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <div className="h-[2px] bg-gradient-to-r from-gray-700 to-transparent flex-grow ml-3"></div>
    </motion.div>
  );
}

export default function SimpleSkillsSection() {
  const [showSkills, setShowSkills] = useState(false);
  const [activeCategory, setActiveCategory] = useState<
    "all" | "frontend" | "backend"
  >("all");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  // Filter skills based on active category
  const frontendSkills = skills.filter(
    (skill) => skill.category === "frontend"
  );
  const backendSkills = skills.filter((skill) => skill.category === "backend");

  // Get skills to display based on active filter
  const getDisplayedSkills = () => {
    switch (activeCategory) {
      case "frontend":
        return frontendSkills;
      case "backend":
        return backendSkills;
      default:
        return skills;
    }
  };

  return (
    <div
      className="w-full min-h-screen bg-black py-20 px-4"
      id="skills"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            My Technical Skills
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            I specialize in frontend and backend development with a focus on
            modern technologies and frameworks.
          </p>

          <div>
            {!showSkills ? (
              <InteractiveHoverButton
                onClick={() => setShowSkills(true)}
                className="px-8 py-4 bg-gray-200 text-black hover:bg-black shadow-lg flex items-center gap-2 mx-auto text-lg"
              >
                Explore skills
              </InteractiveHoverButton>
            ) : (
              <InteractiveHoverButton
                onClick={() => setShowSkills(false)}
                className="px-8 py-4 bg-gray-300 text-black hover:bg-gray-950 shadow-lg flex items-center gap-2 mx-auto text-lg"
              >
                Hide skills
              </InteractiveHoverButton>
            )}
          </div>
        </motion.div>

        <AnimatePresence>
          {showSkills && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.7 }}
              className="overflow-hidden"
            >
              {/* Category filter buttons */}
              <motion.div
                className="flex justify-center gap-4 mb-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button
                  onClick={() => setActiveCategory("all")}
                  className={`px-4 py-2 rounded-lg font-medium transition-all w-[85px] ${
                    activeCategory === "all"
                      ? "bg-neutral-900 text-white"
                      : "bg-neutral-300 text-black"
                  }`}
                >
                  All Skills
                </Button>

                <Button
                  onClick={() => setActiveCategory("frontend")}
                  className={`px-4 py-2 rounded-lg font-medium transition-all w-[110px] ${
                    activeCategory === "frontend"
                      ? "bg-neutral-900 text-white"
                      : "bg-neutral-300 text-black"
                  }`}
                >
                  <Code className="w-4 h-4 mr-1" /> Frontend
                </Button>

                <Button
                  onClick={() => setActiveCategory("backend")}
                  className={`px-4 py-2 rounded-lg font-medium transition-all w-[110px] ${
                    activeCategory === "backend"
                      ? "bg-neutral-900 text-white"
                      : "bg-neutral-300 text-black"
                  }`}
                >
                  <Server className="w-4 h-4 mr-1" /> Backend
                </Button>
              </motion.div>

              {/* Skills display */}
              {activeCategory === "all" ? (
                <>
                  {/* Frontend section */}
                  <CategoryHeader
                    title="Frontend Development"
                    icon={<Code className="w-6 h-6 text-blue-400" />}
                    delay={0.3}
                  />
                  <div className="space-y-6 mb-12">
                    {frontendSkills.map((skill, index) => (
                      <SimpleSkillCard
                        key={skill.id}
                        skill={skill}
                        index={index}
                      />
                    ))}
                  </div>

                  {/* Backend section */}
                  <CategoryHeader
                    title="Backend Development"
                    icon={<Server className="w-6 h-6 text-green-400" />}
                    delay={0.5}
                  />
                  <div className="space-y-6">
                    {backendSkills.map((skill, index) => (
                      <SimpleSkillCard
                        key={skill.id}
                        skill={skill}
                        index={index}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="space-y-6">
                  {getDisplayedSkills().map((skill, index) => (
                    <SimpleSkillCard
                      key={skill.id}
                      skill={skill}
                      index={index}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
