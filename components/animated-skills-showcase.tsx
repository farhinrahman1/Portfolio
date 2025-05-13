"use client";

import type React from "react";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Code,
  Database,
  Globe,
  Layers,
  Server,
  Palette,
  Zap,
} from "lucide-react";

type Skill = {
  id: string;
  name: string;
  icon: React.ReactNode;
  category: "frontend" | "backend";
  description: string;
  highlights: string[];
  color: string;
};

export default function AnimatedSkillsShowcase() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<
    "frontend" | "backend"
  >("frontend");
  const containerRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    // Frontend Skills
    {
      id: "html-css",
      name: "HTML & CSS",
      icon: <Code className="h-5 w-5" />,
      category: "frontend",
      description:
        "Creating responsive, accessible, and visually appealing user interfaces with modern HTML5 and CSS3 techniques.",
      highlights: [
        "Semantic HTML structure for better accessibility",
        "CSS Grid and Flexbox for complex layouts",
        "CSS animations and transitions",
        "Mobile-first responsive design",
      ],
      color: "from-orange-400 to-red-500",
    },
    {
      id: "javascript",
      name: "JavaScript",
      icon: <Zap className="h-5 w-5" />,
      category: "frontend",
      description:
        "Building interactive web applications with modern JavaScript, including ES6+ features and asynchronous programming.",
      highlights: [
        "ES6+ features (arrow functions, destructuring, etc.)",
        "Asynchronous programming with Promises and async/await",
        "DOM manipulation and event handling",
        "Working with APIs and fetch",
      ],
      color: "from-yellow-400 to-yellow-600",
    },
    {
      id: "react",
      name: "React",
      icon: <Globe className="h-5 w-5" />,
      category: "frontend",
      description:
        "Developing component-based user interfaces with React, focusing on reusable components and efficient state management.",
      highlights: [
        "Functional components with hooks",
        "State management with Context API and Redux",
        "Custom hooks for reusable logic",
        "Performance optimization techniques",
      ],
      color: "from-cyan-400 to-blue-500",
    },
    {
      id: "nextjs",
      name: "Next.js",
      icon: <Layers className="h-5 w-5" />,
      category: "frontend",
      description:
        "Building full-stack React applications with Next.js, leveraging server-side rendering and the App Router.",
      highlights: [
        "Server Components and Client Components",
        "App Router for file-based routing",
        "Server Actions for form handling",
        "API routes and data fetching strategies",
      ],
      color: "from-slate-600 to-slate-900",
    },
    {
      id: "ui-design",
      name: "UI/UX Design",
      icon: <Palette className="h-5 w-5" />,
      category: "frontend",
      description:
        "Creating intuitive and visually appealing user interfaces with a focus on user experience and accessibility.",
      highlights: [
        "Design systems and component libraries",
        "Responsive and adaptive design",
        "Accessibility (WCAG) compliance",
        "User-centered design principles",
      ],
      color: "from-purple-400 to-pink-500",
    },

    // Backend Skills
    {
      id: "nodejs",
      name: "Node.js",
      icon: <Server className="h-5 w-5" />,
      category: "backend",
      description:
        "Building scalable server-side applications with Node.js, focusing on performance and maintainability.",
      highlights: [
        "RESTful API development",
        "Middleware architecture",
        "Asynchronous programming patterns",
        "Performance optimization",
      ],
      color: "from-green-400 to-green-600",
    },
    {
      id: "databases",
      name: "Databases",
      icon: <Database className="h-5 w-5" />,
      category: "backend",
      description:
        "Designing and implementing database solutions, including SQL and NoSQL databases, with a focus on data modeling and query optimization.",
      highlights: [
        "SQL database design (PostgreSQL, MySQL)",
        "NoSQL solutions (MongoDB, Firebase)",
        "Query optimization techniques",
        "Data modeling and normalization",
      ],
      color: "from-blue-400 to-blue-600",
    },
    {
      id: "api-design",
      name: "API Design",
      icon: <Globe className="h-5 w-5" />,
      category: "backend",
      description:
        "Creating robust and well-documented APIs following RESTful principles and modern best practices.",
      highlights: [
        "RESTful API design principles",
        "GraphQL API development",
        "API documentation (OpenAPI/Swagger)",
        "Authentication and authorization strategies",
      ],
      color: "from-red-400 to-red-600",
    },
    {
      id: "serverless",
      name: "Serverless",
      icon: <Zap className="h-5 w-5" />,
      category: "backend",
      description:
        "Developing serverless applications using cloud functions and managed services for scalable and cost-effective solutions.",
      highlights: [
        "Cloud functions (AWS Lambda, Vercel Functions)",
        "Event-driven architecture",
        "Serverless databases and storage",
        "Microservices architecture",
      ],
      color: "from-amber-400 to-orange-600",
    },
    {
      id: "devops",
      name: "DevOps",
      icon: <Layers className="h-5 w-5" />,
      category: "backend",
      description:
        "Implementing CI/CD pipelines and infrastructure as code for automated testing, deployment, and monitoring.",
      highlights: [
        "CI/CD pipeline setup",
        "Docker containerization",
        "Infrastructure as Code (Terraform, CloudFormation)",
        "Monitoring and logging solutions",
      ],
      color: "from-indigo-400 to-indigo-600",
    },
  ];

  const filteredSkills = skills.filter(
    (skill) => skill.category === selectedCategory
  );

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill);
    // Scroll to container if on mobile
    if (window.innerWidth < 768) {
      containerRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800"
      ref={containerRef}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A showcase of my skills and experience in web development and
            software engineering
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-slate-200 dark:border-slate-700 p-1 bg-slate-100 dark:bg-slate-800">
            <button
              onClick={() => {
                setSelectedCategory("frontend");
                setSelectedSkill(null);
              }}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                selectedCategory === "frontend"
                  ? "bg-white dark:bg-slate-700 shadow-sm"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => {
                setSelectedCategory("backend");
                setSelectedSkill(null);
              }}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                selectedCategory === "backend"
                  ? "bg-white dark:bg-slate-700 shadow-sm"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              Backend
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-2"
              >
                {filteredSkills.map((skill) => (
                  <motion.div
                    key={skill.id}
                    whileHover={{ x: 5 }}
                    onClick={() => handleSkillClick(skill)}
                    className={`p-4 rounded-lg cursor-pointer transition-all flex items-center justify-between ${
                      selectedSkill?.id === skill.id
                        ? "bg-gradient-to-r " +
                          skill.color +
                          " text-white shadow-md"
                        : "bg-white dark:bg-slate-800 hover:shadow-md border border-slate-200 dark:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`p-2 rounded-md mr-3 ${
                          selectedSkill?.id === skill.id
                            ? "bg-white/20"
                            : "bg-gradient-to-r " + skill.color + " text-white"
                        }`}
                      >
                        {skill.icon}
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="md:col-span-2 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {selectedSkill ? (
                <motion.div
                  key={selectedSkill.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full"
                >
                  <div className="flex items-center mb-6">
                    <div
                      className={`p-3 rounded-lg text-white mr-4 bg-gradient-to-r ${selectedSkill.color}`}
                    >
                      {selectedSkill.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{selectedSkill.name}</h3>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    {selectedSkill.description}
                  </p>

                  <h4 className="font-medium mb-3">Key Capabilities:</h4>
                  <ul className="space-y-3">
                    {selectedSkill.highlights.map((highlight, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        className="flex items-start"
                      >
                        <div
                          className={`p-1 rounded-full text-white mr-3 bg-gradient-to-r ${selectedSkill.color} mt-0.5`}
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 13L9 17L19 7"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span className="text-slate-700 dark:text-slate-200">
                          {highlight}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center text-slate-500 dark:text-slate-400 max-w-md"
                >
                  <div className="mb-4 opacity-70">
                    {selectedCategory === "frontend" ? (
                      <Globe className="h-16 w-16 mx-auto" />
                    ) : (
                      <Server className="h-16 w-16 mx-auto" />
                    )}
                  </div>
                  <h3 className="text-xl font-medium mb-2">
                    {selectedCategory === "frontend"
                      ? "Frontend Development"
                      : "Backend Development"}
                  </h3>
                  <p>
                    Select a skill from the list to see detailed information
                    about my expertise and experience.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
