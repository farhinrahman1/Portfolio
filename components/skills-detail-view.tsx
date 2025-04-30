"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Skill = {
  id: string;
  name: string;
  level: number;
  category: "frontend" | "backend";
  relatedTo: string[];
  description: string;
};

type SkillsDetailViewProps = {
  skills: Skill[];
  isOpen: boolean;
  onClose: () => void;
};

export default function SkillsDetailView({
  skills,
  isOpen,
  onClose,
}: SkillsDetailViewProps) {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredSkills = filter
    ? skills.filter((skill) => skill.category === filter)
    : skills;

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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[80vh] overflow-hidden flex flex-col"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
          >
            {/* <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                All Skills & Technologies
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close skills view"
              >
                <X className="w-5 h-5" />
              </button>
            </div> */}

            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilter(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === null
                      ? "bg-gray-900 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilter("frontend")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === "frontend"
                      ? "bg-gray-800 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  Frontend
                </button>
                <button
                  onClick={() => setFilter("backend")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === "backend"
                      ? "bg-gray-900 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  Backend
                </button>
              </div>
            </div>

            <div className="overflow-y-auto p-6 flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredSkills.map((skill) => (
                  <motion.div
                    key={skill.id}
                    className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`${getCategoryColor(
                        skill.category
                      )} px-4 py-3 text-white flex justify-between items-center`}
                    >
                      <h3 className="font-bold">{skill.name}</h3>
                      <span className="text-sm opacity-80">
                        {skill.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-4 border-t border-gray-200 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Hide Skills
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
