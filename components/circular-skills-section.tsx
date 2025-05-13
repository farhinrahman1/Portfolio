"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Skill = {
  name: string;
  category: "frontend" | "backend";
  level: number;
};

export default function CircularSkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skills: Skill[] = [
    // Frontend
    { name: "HTML/CSS", category: "frontend", level: 90 },
    { name: "JavaScript", category: "frontend", level: 85 },
    { name: "React", category: "frontend", level: 80 },
    { name: "Next.js", category: "frontend", level: 75 },
    { name: "TypeScript", category: "frontend", level: 70 },
    { name: "Tailwind", category: "frontend", level: 85 },

    // Backend
    { name: "Node.js", category: "backend", level: 75 },
    { name: "Express", category: "backend", level: 70 },
    { name: "MongoDB", category: "backend", level: 65 },
    { name: "PostgreSQL", category: "backend", level: 60 },
    { name: "REST APIs", category: "backend", level: 80 },
    { name: "GraphQL", category: "backend", level: 55 },
  ];

  const frontendSkills = skills.filter(
    (skill) => skill.category === "frontend"
  );
  const backendSkills = skills.filter((skill) => skill.category === "backend");

  return (
    <section className="py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Frontend Skills */}
          <div>
            <motion.h3
              className="text-xl font-medium mb-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Frontend Development
            </motion.h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="relative w-24 h-24 mb-4">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      {/* Background circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#e2e8f0"
                        strokeWidth="8"
                      />
                      {/* Progress circle */}
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={
                          2 * Math.PI * 40 * (1 - skill.level / 100)
                        }
                        transform="rotate(-90 50 50)"
                        initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                        animate={
                          isInView
                            ? {
                                strokeDashoffset:
                                  2 * Math.PI * 40 * (1 - skill.level / 100),
                              }
                            : {}
                        }
                        transition={{
                          duration: 1.5,
                          delay: 0.5 + index * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold">{skill.level}%</span>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div>
            <motion.h3
              className="text-xl font-medium mb-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Backend Development
            </motion.h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="relative w-24 h-24 mb-4">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      {/* Background circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#e2e8f0"
                        strokeWidth="8"
                      />
                      {/* Progress circle */}
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#8b5cf6"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={
                          2 * Math.PI * 40 * (1 - skill.level / 100)
                        }
                        transform="rotate(-90 50 50)"
                        initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                        animate={
                          isInView
                            ? {
                                strokeDashoffset:
                                  2 * Math.PI * 40 * (1 - skill.level / 100),
                              }
                            : {}
                        }
                        transition={{
                          duration: 1.5,
                          delay: 1.1 + index * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold">{skill.level}%</span>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
