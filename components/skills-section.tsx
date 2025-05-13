"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Globe,
  Layout,
  Server,
  Cpu,
  Layers,
  FileJson,
  GitBranch,
  Palette,
  Figma,
  Smartphone,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Skill = {
  name: string;
  icon: React.ReactNode;
  color: string;
  level: number;
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<"frontend" | "backend">(
    "frontend"
  );

  const frontendSkills: Skill[] = [
    {
      name: "HTML/CSS",
      icon: <Layout className="h-6 w-6" />,
      color: "bg-orange-500",
      level: 90,
    },
    {
      name: "JavaScript",
      icon: <Code className="h-6 w-6" />,
      color: "bg-yellow-500",
      level: 85,
    },
    {
      name: "React",
      icon: <Globe className="h-6 w-6" />,
      color: "bg-cyan-500",
      level: 80,
    },
    {
      name: "Next.js",
      icon: <Layers className="h-6 w-6" />,
      color: "bg-black",
      level: 75,
    },
    {
      name: "Tailwind CSS",
      icon: <Palette className="h-6 w-6" />,
      color: "bg-sky-500",
      level: 85,
    },
    {
      name: "TypeScript",
      icon: <FileJson className="h-6 w-6" />,
      color: "bg-blue-600",
      level: 70,
    },
    {
      name: "UI/UX Design",
      icon: <Figma className="h-6 w-6" />,
      color: "bg-purple-500",
      level: 65,
    },
    {
      name: "Responsive Design",
      icon: <Smartphone className="h-6 w-6" />,
      color: "bg-green-500",
      level: 80,
    },
  ];

  const backendSkills: Skill[] = [
    {
      name: "Node.js",
      icon: <Server className="h-6 w-6" />,
      color: "bg-green-600",
      level: 75,
    },
    {
      name: "Express",
      icon: <Server className="h-6 w-6" />,
      color: "bg-gray-600",
      level: 70,
    },
    {
      name: "MongoDB",
      icon: <Database className="h-6 w-6" />,
      color: "bg-green-700",
      level: 65,
    },
    {
      name: "PostgreSQL",
      icon: <Database className="h-6 w-6" />,
      color: "bg-blue-700",
      level: 60,
    },
    {
      name: "REST APIs",
      icon: <Globe className="h-6 w-6" />,
      color: "bg-red-500",
      level: 80,
    },
    {
      name: "GraphQL",
      icon: <Cpu className="h-6 w-6" />,
      color: "bg-pink-600",
      level: 55,
    },
    {
      name: "Docker",
      icon: <Layers className="h-6 w-6" />,
      color: "bg-sky-600",
      level: 50,
    },
    {
      name: "Git/GitHub",
      icon: <GitBranch className="h-6 w-6" />,
      color: "bg-orange-600",
      level: 75,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-20 bg-black">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical expertise and proficiency in various
            technologies
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-slate-200 dark:border-slate-700 p-1 bg-slate-100 dark:bg-slate-800">
            <button
              onClick={() => setActiveTab("frontend")}
              className={cn(
                "px-6 py-3 rounded-md text-sm font-medium transition-all duration-200",
                activeTab === "frontend"
                  ? "bg-black shadow-sm"
                  : "text-muted-foreground hover:bg-slate-200 dark:hover:bg-slate-700"
              )}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveTab("backend")}
              className={cn(
                "px-6 py-3 rounded-md text-sm font-medium transition-all duration-200",
                activeTab === "backend"
                  ? "bg-black shadow-sm"
                  : "text-muted-foreground hover:bg-slate-200 dark:hover:bg-slate-700"
              )}
            >
              Backend
            </button>
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          key={activeTab}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {(activeTab === "frontend" ? frontendSkills : backendSkills).map(
            (skill, index) => (
              <motion.div
                key={skill.name}
                variants={item}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                className="bg-black dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`${skill.color} p-3 rounded-lg text-black mr-4`}
                  >
                    {skill.icon}
                  </div>
                  <h3 className="font-medium">{skill.name}</h3>
                </div>

                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                  <motion.div
                    className={`${skill.color} h-2.5 rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{
                      duration: 1,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                  />
                </div>
                <div className="mt-2 text-right text-sm text-muted-foreground">
                  {skill.level}%
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
