"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Database, ExternalLink, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Define skill interface
interface Skill {
  name: string;
  level: number; // 1-10 scale
  description: string;
  yearsExperience: number;
  link?: string;
  color: string;
}

// Frontend skills data
const frontendSkills: Skill[] = [
  {
    name: "React",
    level: 9,
    description:
      "Building complex UIs with hooks, context API, and advanced patterns",
    yearsExperience: 5,
    link: "https://reactjs.org",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Next.js",
    level: 8,
    description: "Server components, app router, and full-stack applications",
    yearsExperience: 3,
    link: "https://nextjs.org",
    color: "from-slate-500 to-slate-800",
  },
  {
    name: "TypeScript",
    level: 8,
    description: "Type-safe code with interfaces, generics, and utility types",
    yearsExperience: 4,
    link: "https://www.typescriptlang.org",
    color: "from-blue-600 to-blue-800",
  },
  {
    name: "Tailwind CSS",
    level: 9,
    description:
      "Responsive designs with utility-first approach and custom configurations",
    yearsExperience: 3,
    link: "https://tailwindcss.com",
    color: "from-cyan-400 to-sky-600",
  },
  {
    name: "Framer Motion",
    level: 7,
    description: "Creating fluid animations and interactive UI elements",
    yearsExperience: 2,
    link: "https://www.framer.com/motion",
    color: "from-purple-500 to-purple-800",
  },
  {
    name: "Redux",
    level: 8,
    description: "State management with Redux Toolkit and middleware",
    yearsExperience: 4,
    link: "https://redux.js.org",
    color: "from-purple-600 to-indigo-800",
  },
];

// Backend skills data
const backendSkills: Skill[] = [
  {
    name: "Node.js",
    level: 8,
    description: "Building scalable APIs and microservices",
    yearsExperience: 4,
    link: "https://nodejs.org",
    color: "from-green-500 to-green-700",
  },
  {
    name: "Express",
    level: 8,
    description: "RESTful API development with middleware and authentication",
    yearsExperience: 4,
    link: "https://expressjs.com",
    color: "from-gray-500 to-gray-700",
  },
  {
    name: "PostgreSQL",
    level: 7,
    description: "Complex queries, indexing, and performance optimization",
    yearsExperience: 3,
    link: "https://www.postgresql.org",
    color: "from-blue-500 to-cyan-700",
  },
  {
    name: "MongoDB",
    level: 8,
    description:
      "Schema design, aggregation pipelines, and indexing strategies",
    yearsExperience: 3,
    link: "https://www.mongodb.com",
    color: "from-green-600 to-emerald-800",
  },
  {
    name: "GraphQL",
    level: 7,
    description:
      "Schema definition, resolvers, and Apollo Server implementation",
    yearsExperience: 2,
    link: "https://graphql.org",
    color: "from-pink-500 to-rose-700",
  },
  {
    name: "Docker",
    level: 7,
    description:
      "Containerization, multi-container applications with Docker Compose",
    yearsExperience: 2,
    link: "https://www.docker.com",
    color: "from-sky-500 to-blue-700",
  },
];

// Skill card component
const SkillCard = ({
  skill,
  index,
  visible,
}: {
  skill: Skill;
  index: number;
  visible: boolean;
}) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
          }}
          className={cn(
            "bg-gradient-to-br rounded-xl p-6 border border-gray-800 relative overflow-hidden backdrop-blur-sm",
            `${skill.color}`
          )}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">{skill.name}</h3>
              {skill.link && (
                <a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>

            <div className="mb-4">
              <div className="w-full bg-black/50 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level * 10}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  className="h-full bg-white rounded-full"
                />
              </div>
              <div className="mt-2 text-xs text-white/70">
                {skill.yearsExperience}{" "}
                {skill.yearsExperience === 1 ? "year" : "years"} experience
              </div>
            </div>

            <p className="text-white/80 text-sm">{skill.description}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState("frontend");
  const [showSkills, setShowSkills] = useState(false);

  return (
    <section className="py-16 px-4 bg-black min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Technical Skills
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            A comprehensive overview of my technical expertise across frontend
            and backend technologies.
          </p>

          <Tabs
            defaultValue="frontend"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              {!showSkills ? (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => setShowSkills(true)}
                    className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-6 rounded-full text-lg font-medium hover:shadow-glow transition-all duration-300 relative z-10"
                    size="lg"
                  >
                    <span className="relative z-10">
                      Reveal My Skills <ChevronRight className="ml-2 inline" />
                    </span>
                    <div className="absolute inset-0 rounded-full bg-black/20 backdrop-blur-sm -z-0"></div>
                  </Button>
                </motion.div>
              ) : (
                <TabsList className="grid w-full max-w-md grid-cols-2 bg-gray-900/80 backdrop-blur-sm p-1">
                  <TabsTrigger
                    value="frontend"
                    className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-600 data-[state=active]:text-white"
                  >
                    <Code2 size={16} />
                    <span>Frontend</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="backend"
                    className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-600 data-[state=active]:text-white"
                  >
                    <Database size={16} />
                    <span>Backend</span>
                  </TabsTrigger>
                </TabsList>
              )}
            </div>

            <TabsContent value="frontend" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {frontendSkills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={index}
                    visible={showSkills && activeTab === "frontend"}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="backend" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {backendSkills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={index}
                    visible={showSkills && activeTab === "backend"}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
