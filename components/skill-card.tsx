"use client";

import type React from "react";
import { motion } from "framer-motion";

interface SkillCardProps {
  skill: {
    id: number;
    name: string;
    icon: React.ReactNode;
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
      className={`${skill.bgClass} rounded-xl p-6 shadow-2xl cursor-pointer h-full border border-gray-800 backdrop-blur-sm hover:border-gray-700 transition-all duration-300 relative overflow-hidden group`}
    >
      {/* Card corner accents */}
      <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-white/20"></div>
      <div className="absolute top-0 right-0 w-10 h-10 border-t border-r border-white/20"></div>
      <div className="absolute bottom-0 left-0 w-10 h-10 border-b border-l border-white/20"></div>
      <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-white/20"></div>

      <div className="flex items-center gap-4 mb-6 relative z-10">
        <motion.div
          className="p-4 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg"
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
            <div className="flex-grow h-[1px] mx-2 bg-gray-700"></div>
            <span className="text-gray-400 font-raleway">
              {subSkill.level}%
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center relative z-10">
        <motion.div
          className="inline-flex items-center gap-2 text-gray-300 font-raleway border-b border-transparent hover:border-gray-500 transition-all duration-300 pb-1"
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
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        initial={{ rotate: -45, scale: 1.5 }}
        whileHover={{
          x: ["100%", "-100%"],
          transition: { duration: 1.5, ease: "easeInOut" },
        }}
      />
    </div>
  );
}
