"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import {
  Code,
  Server,
  ChevronRight,
  X,
  ExternalLink,
  Github,
  Globe,
  Book,
  Clock,
} from "lucide-react";

type SkillResource = {
  title: string;
  url: string;
  type: "documentation" | "tutorial" | "github" | "website";
};

type Skill = {
  id: string;
  name: string;
  category: "frontend" | "backend";
  description: string;
  color: string;
  longDescription?: string;
  yearStarted?: number;
  resources?: SkillResource[];
  relatedSkills?: string[];
};

// Updated skills array with additional information for the modal
const skills: Skill[] = [
  {
    id: "react",
    name: "React",
    category: "frontend",
    description:
      "Component-based UI library for building interactive web applications with reusable UI components and a virtual DOM for efficient rendering.",
    color: "#61DAFB",
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    description:
      "React framework with server-side rendering, file-based routing, and optimized performance for production-ready applications.",
    color: "#000000",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    description:
      "Strongly typed programming language that builds on JavaScript, adding static type definitions for better developer experience and code quality.",
    color: "#3178C6",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "frontend",
    description:
      "Dynamic programming language for web development that enables interactive web pages and is an essential part of web applications.",
    color: "#F7DF1E",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    description:
      "Utility-first CSS framework for rapidly building custom designs without leaving your HTML, allowing for quick styling and consistent design.",
    color: "#06B6D4",
  },
  {
    id: "css",
    name: "CSS",
    category: "frontend",
    description:
      "Styling language used to describe the presentation of documents, controlling layout, colors, fonts, and responsive design.",
    color: "#1572B6",
  },
  {
    id: "html",
    name: "HTML",
    category: "frontend",
    description:
      "Standard markup language for documents designed to be displayed in browsers, forming the foundation of web content structure.",
    color: "#E34F26",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    description:
      "JavaScript runtime for server-side applications and API development, allowing JavaScript to run outside the browser.",
    color: "#339933",
  },
  {
    id: "express",
    name: "Express",
    category: "backend",
    description:
      "Fast, unopinionated web framework for Node.js applications that provides robust features for web and mobile applications.",
    color: "#000000",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "backend",
    description:
      "NoSQL document database for modern applications that stores data in flexible, JSON-like documents.",
    color: "#47A248",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "backend",
    description:
      "Powerful, open-source object-relational database system with a strong reputation for reliability and data integrity.",
    color: "#4169E1",
  },
  {
    id: "graphql",
    name: "GraphQL",
    category: "backend",
    description:
      "Query language for APIs and a runtime for executing those queries with your existing data, providing a more efficient alternative to REST.",
    color: "#E10098",
  },
];

// Simulated API integration to fetch additional skill data
async function fetchSkillData(skillId: string): Promise<any> {
  // In a real app, this would be an actual API call
  return new Promise((resolve) => {});
}

// Modal component for skill details
function SkillDetailModal({
  skill,
  isOpen,
  onClose,
}: {
  skill: Skill | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [additionalData, setAdditionalData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (skill && isOpen) {
      setLoading(true);
      fetchSkillData(skill.id).then((data) => {
        setAdditionalData(data);
        setLoading(false);
      });
    } else {
      setAdditionalData(null);
    }
  }, [skill, isOpen]);

  if (!skill) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-gray-900 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-gray-800"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className="p-6 relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, #111111, #222222)`,
                borderBottom: `3px solid ${skill.color}`,
              }}
            >
              {/* <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 0.5,
                }}
              /> */}

              {/* <div className="flex items-center gap-4 relative z-10">
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: `${skill.color}20` }}
                >
                  {skill.category === "frontend" ? (
                    <Code className="w-8 h-8" style={{ color: skill.color }} />
                  ) : (
                    <Server
                      className="w-8 h-8"
                      style={{ color: skill.color }}
                    />
                  )}
                </div>
              </div> */}

              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white transition-colors"
                onClick={onClose}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            {/* <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-6">
                  {skill.longDescription || skill.description}
                </p>
              </div>
            </div> */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SkillCard({
  skill,
  index,
  onClick,
}: {
  skill: Skill;
  index: number;
  onClick: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, {
    once: false,
    amount: 0.2,
    margin: "-100px 0px",
  });
  const [isFlipped, setIsFlipped] = useState(false);

  // Mouse position values for 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Derived values for the tilt rotation
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Spotlight effect
  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);
  const spotlightBackground = useMotionTemplate`radial-gradient(250px circle at ${spotlightX}px ${spotlightY}px, rgba(255, 255, 255, 0.1), transparent 80%)`;

  // Handle mouse move for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isFlipped) return;

    const rect = cardRef.current.getBoundingClientRect();

    // Calculate mouse position relative to card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation based on mouse position
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -5; // Reduced tilt for horizontal cards
    const rotateYValue = ((x - centerX) / centerX) * 5; // Reduced tilt for horizontal cards

    // Update motion values
    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);

    // Update spotlight position
    spotlightX.set(x);
    spotlightY.set(y);

    // Update mouse position for other effects
    mouseX.set(x);
    mouseY.set(y);
  };

  // Reset values when mouse leaves
  const handleMouseLeave = () => {
    if (!isFlipped) {
      rotateX.set(0);
      rotateY.set(0);
    }
  };

  // Handle card flip
  const handleFlip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  // Handle card click to open modal
  const handleCardClick = () => {
    if (!isFlipped) {
      onClick();
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative h-[120px] perspective-1000 group"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ z: 10 }}
    >
      <motion.div
        className="w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {/* Front of card */}
        <motion.div
          className="bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-800 h-full transform-gpu flex absolute w-full backface-hidden"
          style={{
            rotateX: isFlipped ? 0 : rotateX,
            rotateY: isFlipped ? 0 : rotateY,
            transformStyle: "preserve-3d",
          }}
          whileHover={isFlipped ? {} : { scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          onClick={handleCardClick}
        >
          {/* Animated background spotlight effect */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: spotlightBackground }}
          />

          {/* Left side with icon and name */}
          <div
            className="p-6 relative overflow-hidden w-1/3 flex flex-col justify-center items-center"
            style={{
              background: `linear-gradient(135deg, #111111, #222222)`,
              borderRight: `2px solid ${skill.color}`,
            }}
          >
            {/* Animated light beam effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 0.5,
              }}
            />

            {/* Animated particles */}
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 4 + 2,
                  height: Math.random() * 4 + 2,
                  backgroundColor: skill.color,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: 0,
                }}
                animate={{
                  y: [0, -20],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: Math.random() * 2 + 1,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                }}
              />
            ))}

            <motion.div
              className="p-3 rounded-lg mb-3 relative z-10"
              style={{ backgroundColor: `${skill.color}20` }}
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {skill.category === "frontend" ? (
                <Code className="w-8 h-8" style={{ color: skill.color }} />
              ) : (
                <Server className="w-8 h-8" style={{ color: skill.color }} />
              )}
            </motion.div>
            <motion.h3
              className="text-xl font-bold text-white text-center relative z-10"
              initial={{ x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {skill.name}
            </motion.h3>

            {skill.yearStarted && (
              <motion.div
                className="mt-2 text-xs text-gray-400 flex items-center gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Clock className="w-3 h-3" /> Since {skill.yearStarted}
              </motion.div>
            )}
          </div>

          {/* Right side with description */}
          <div className="p-6 flex-1 relative z-10">
            <motion.p
              className="text-gray-300"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              {skill.description}
            </motion.p>

            {/* Buttons that appear on hover */}
            <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <motion.button
                className="flex items-center gap-1 text-sm font-medium text-gray-400 hover:text-white transition-colors bg-gray-800/50 hover:bg-gray-700/50 px-3 py-1 rounded-md"
                style={{ transform: "translateZ(20px)" }}
                whileHover={{ scale: 1.05, color: skill.color }}
                onClick={handleFlip}
              >
                <span>Flip</span>
              </motion.button>

              <motion.button
                className="flex items-center gap-1 text-sm font-medium text-gray-400 hover:text-white transition-colors bg-gray-800/50 hover:bg-gray-700/50 px-3 py-1 rounded-md"
                style={{ transform: "translateZ(20px)" }}
                whileHover={{ scale: 1.05, color: skill.color }}
              >
                <span>Details</span>
                <ExternalLink className="w-3 h-3" />
              </motion.button>
            </div>
          </div>

          {/* Animated border glow effect */}
          <motion.div
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              boxShadow: `0 0 15px ${skill.color}40, 0 0 30px ${skill.color}20`,
              zIndex: -1,
            }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>

        {/* Back of card */}
        <motion.div
          className="bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-800 h-full transform-gpu absolute w-full backface-hidden"
          style={{
            transform: "rotateY(180deg)",
            transformStyle: "preserve-3d",
          }}
          onClick={handleFlip}
        >
          <div className="p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h3
                className="text-xl font-bold text-white"
                style={{ color: skill.color }}
              >
                {skill.name} Details
              </h3>
              <button
                className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white transition-colors"
                onClick={handleFlip}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {skill.yearStarted && (
              <div className="mb-3">
                <p className="text-sm text-gray-400">First Released</p>
                <p className="text-lg font-medium text-white">
                  {skill.yearStarted}
                </p>
              </div>
            )}

            {skill.resources && (
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-2">Resources</p>
                <div className="flex flex-col gap-2">
                  {skill.resources.slice(0, 2).map((resource, index) => (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors group"
                    >
                      {resource.type === "documentation" && (
                        <Book className="w-4 h-4 text-gray-400 group-hover:text-white" />
                      )}
                      {resource.type === "github" && (
                        <Github className="w-4 h-4 text-gray-400 group-hover:text-white" />
                      )}
                      {resource.type === "website" && (
                        <Globe className="w-4 h-4 text-gray-400 group-hover:text-white" />
                      )}
                      {resource.type === "tutorial" && (
                        <Book className="w-4 h-4 text-gray-400 group-hover:text-white" />
                      )}
                      <span className="text-gray-300 group-hover:text-white text-sm truncate">
                        {resource.title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {skill.relatedSkills && skill.relatedSkills.length > 0 && (
              <div>
                <p className="text-sm text-gray-400 mb-2">Related Skills</p>
                <div className="flex flex-wrap gap-2">
                  {skill.relatedSkills.map((relatedId) => {
                    const relatedSkill = skills.find((s) => s.id === relatedId);
                    return relatedSkill ? (
                      <span
                        key={relatedId}
                        className="px-2 py-1 rounded-full text-xs"
                        style={{
                          backgroundColor: `${relatedSkill.color}20`,
                          color: relatedSkill.color,
                          border: `1px solid ${relatedSkill.color}40`,
                        }}
                      >
                        {relatedSkill.name}
                      </span>
                    ) : null;
                  })}
                </div>
              </div>
            )}

            <div className="mt-auto pt-4">
              <button
                className="w-full py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition-colors"
                style={{
                  borderBottom: `3px solid ${skill.color}`,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleFlip(e);
                  setTimeout(() => onClick(), 400);
                }}
              >
                View Full Details
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const [showSkills, setShowSkills] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  // Background animation particles
  const particles = Array.from({ length: 20 }, (_, i) => i);

  const handleOpenModal = (skill: Skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="w-full min-h-screen bg-black py-20 px-4 relative overflow-hidden"
      id="skills"
      ref={sectionRef}
    >
      {/* Animated background particles */}
      {particles.map((i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full bg-gray-700"
          style={{
            width: Math.random() * 8 + 4,
            height: Math.random() * 8 + 4,
          }}
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            opacity: 0,
          }}
          animate={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: Math.random() * 20 + 10,
            ease: "linear",
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            My Technical Skills
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            I specialize in frontend and backend development with a focus on
            modern technologies and frameworks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {!showSkills ? (
              <motion.button
                onClick={() => setShowSkills(true)}
                className="px-8 py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-lg flex items-center gap-2 mx-auto text-lg relative overflow-hidden group"
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
                <span className="relative z-10">Explore Skills</span>
                <motion.div
                  className="relative z-10"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
            ) : (
              <motion.button
                onClick={() => setShowSkills(false)}
                className="px-8 py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-lg flex items-center gap-2 mx-auto text-lg relative overflow-hidden group"
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
                <span className="relative z-10">Hide Skills</span>
                <motion.div
                  className="relative z-10"
                  animate={{ rotate: [0, 90] }}
                  transition={{ duration: 0.3 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              </motion.button>
            )}
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          {showSkills && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key="all-skills"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-6"
                >
                  {skills.map((skill, index) => (
                    <SkillCard
                      key={skill.id}
                      skill={skill}
                      index={index}
                      onClick={() => handleOpenModal(skill)}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Skill Detail Modal */}
      <SkillDetailModal
        skill={selectedSkill}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
