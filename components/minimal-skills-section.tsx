"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Skill = {
  name: string;
  category: "frontend" | "backend";
  level: number;
};

export default function MinimalSkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skills: Skill[] = [
    // Frontend
    { name: "HTML & CSS", category: "frontend", level: 90 },
    { name: "JavaScript", category: "frontend", level: 85 },
    { name: "React", category: "frontend", level: 80 },
    { name: "Next.js", category: "frontend", level: 75 },
    { name: "TypeScript", category: "frontend", level: 70 },
    { name: "Tailwind CSS", category: "frontend", level: 85 },
    { name: "UI/UX Design", category: "frontend", level: 65 },

    // Backend
    { name: "Node.js", category: "backend", level: 75 },
    { name: "Express", category: "backend", level: 70 },
    { name: "MongoDB", category: "backend", level: 65 },
    { name: "PostgreSQL", category: "backend", level: 60 },
    { name: "REST APIs", category: "backend", level: 80 },
    { name: "GraphQL", category: "backend", level: 55 },
    { name: "Docker", category: "backend", level: 50 },
  ];

  const frontendSkills = skills.filter(
    (skill) => skill.category === "frontend"
  );
  const backendSkills = skills.filter((skill) => skill.category === "backend");

  return (
    <section className="py-24 px-4 bg-white dark:bg-black" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-light mb-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="font-bold">Skills</span> & Expertise
        </motion.h2>

        <div className="space-y-20">
          {/* Frontend Skills */}
          <div>
            <motion.h3
              className="text-xl font-medium mb-8 inline-block border-b-2 border-emerald-500 pb-1"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Frontend Development
            </motion.h3>

            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-emerald-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{
                        duration: 1,
                        delay: 0.5 + index * 0.1,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div>
            <motion.h3
              className="text-xl font-medium mb-8 inline-block border-b-2 border-violet-500 pb-1"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              Backend Development
            </motion.h3>

            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-violet-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{
                        duration: 1,
                        delay: 1.5 + index * 0.1,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
