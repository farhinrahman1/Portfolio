"use client";

import type React from "react";
import { motion } from "framer-motion";

interface SkillCardProps {
  skill: {
    id: number;
    name: string;
    icon: React.ReactNode;
    color: string;
    bgClass: string;
    skills: {
      name: string;
      level: number;
      icon: React.ReactNode;
      description: string;
    }[];
  };
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div
      className={`${skill.bgClass} rounded-xl p-6 shadow-lg cursor-pointer h-full border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 relative overflow-hidden group`}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-white/5"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="flex items-center gap-4 mb-6 relative z-10">
        <motion.div
          className={`p-4 rounded-full bg-gradient-to-r ${skill.color} shadow-lg`}
          whileHover={{ rotate: [0, -10, 10, -5, 0] }}
          transition={{ duration: 0.5 }}
        >
          {skill.icon}
        </motion.div>
        <h3 className="text-2xl font-playfair font-bold text-white">
          {skill.name}
        </h3>
      </div>

      <div className="space-y-4 relative z-10">
        {skill.skills.map((subSkill, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {subSkill.icon}
            </motion.div>
            <span className="text-white font-raleway">{subSkill.name}</span>
            <div className="flex-grow h-[1px] mx-2 bg-white/10"></div>
            <span className="text-white/70 font-raleway">
              {subSkill.level}%
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center relative z-10">
        <motion.div
          className="inline-flex items-center gap-2 text-white/80 font-raleway border-b border-white/0 hover:border-white/40 transition-all duration-300 pb-1"
          whileHover={{ scale: 1.05 }}
        >
          <span>View Details</span>
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            →
          </motion.span>
        </motion.div>
      </div>

      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        initial={{ rotate: -45, scale: 1.5 }}
        whileHover={{
          x: ["100%", "-100%"],
          transition: { duration: 1.5, ease: "easeInOut" },
        }}
      />
    </div>
  );
}
