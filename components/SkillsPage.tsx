// "use client";

// import type React from "react";

// import { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowRight,
//   ExternalLink,
//   Github,
//   Star,
//   Code,
//   Database,
//   ChevronRight,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// // Define frontend skills with detailed descriptions
// const frontendSkills = [
//   {
//     name: "React",
//     icon: "/placeholder.svg?height=40&width=40",
//     description:
//       "A JavaScript library for building user interfaces with a component-based architecture",
//     features: [
//       "Component-based architecture",
//       "Virtual DOM for efficient updates",
//       "Unidirectional data flow",
//       "JSX syntax for templating",
//       "Rich ecosystem of libraries",
//     ],
//     level: 90,
//     resources: "https://reactjs.org",
//     github: "https://github.com/facebook/react",
//     color: "from-zinc-800 to-zinc-900",
//   },
//   {
//     name: "Next.js",
//     icon: "/placeholder.svg?height=40&width=40",
//     description:
//       "The React framework for production that enables server-side rendering and static site generation",
//     features: [
//       "Server-side rendering (SSR)",
//       "Static site generation (SSG)",
//       "File-based routing system",
//       "API routes for backend functionality",
//       "Built-in image optimization",
//     ],
//     level: 85,
//     resources: "https://nextjs.org",
//     github: "https://github.com/vercel/next.js",
//     color: "from-zinc-800 to-zinc-900",
//   },
//   {
//     name: "TypeScript",
//     icon: "/placeholder.svg?height=40&width=40",
//     description:
//       "A strongly typed programming language that builds on JavaScript with static type definitions",
//     features: [
//       "Static type checking",
//       "Interface definitions",
//       "Generics support",
//       "Advanced type inference",
//       "Excellent IDE integration",
//     ],
//     level: 80,
//     resources: "https://www.typescriptlang.org",
//     github: "https://github.com/microsoft/TypeScript",
//     color: "from-zinc-800 to-zinc-900",
//   },
//   {
//     name: "Tailwind CSS",
//     icon: "/placeholder.svg?height=40&width=40",
//     description:
//       "A utility-first CSS framework for rapidly building custom user interfaces",
//     features: [
//       "Utility-first approach",
//       "Responsive design utilities",
//       "JIT compiler for optimized output",
//       "Customizable design system",
//       "Dark mode support",
//     ],
//     level: 95,
//     resources: "https://tailwindcss.com",
//     github: "https://github.com/tailwindlabs/tailwindcss",
//     color: "from-zinc-800 to-zinc-900",
//   },
//   {
//     name: "Framer Motion",
//     icon: "/placeholder.svg?height=40&width=40",
//     description:
//       "A production-ready motion library for React that makes creating animations easy",
//     features: [
//       "Declarative animations",
//       "Gesture recognition",
//       "Layout animations",
//       "SVG path animations",
//       "Exit animations",
//     ],
//     level: 75,
//     resources: "https://www.framer.com/motion",
//     github: "https://github.com/framer/motion",
//     color: "from-zinc-800 to-zinc-900",
//   },
// ];

// // Define backend skills with detailed descriptions
// const backendSkills = [
//   {
//     name: "Node.js",
//     icon: "/placeholder.svg?height=40&width=40",
//     description:
//       "A JavaScript runtime built on Chrome's V8 JavaScript engine for server-side development",
//     features: [
//       "Non-blocking I/O model",
//       "Event-driven architecture",
//       "CommonJS module system",
//       "NPM package ecosystem",
//       "Cross-platform compatibility",
//     ],
//     level: 85,
//     resources: "https://nodejs.org",
//     github: "https://github.com/nodejs/node",
//     color: "from-zinc-800 to-zinc-900",
//   },
//   {
//     name: "Express",
//     icon: "/placeholder.svg?height=40&width=40",
//     description:
//       "Fast, unopinionated, minimalist web framework for Node.js that provides robust routing",
//     features: [
//       "Middleware architecture",
//       "HTTP utility methods",
//       "Content negotiation",
//       "Template engine integration",
//       "Static file serving",
//     ],
//     level: 80,
//     resources: "https://expressjs.com",
//     github: "https://github.com/expressjs/express",
//     color: "from-zinc-800 to-zinc-900",
//   },
//   {
//     name: "MongoDB",
//     icon: "/placeholder.svg?height=40&width=40",
//     description:
//       "A document-based NoSQL database designed for modern application development",
//     features: [
//       "Document-oriented storage",
//       "JSON-like documents",
//       "Dynamic schema design",
//       "Horizontal scaling",
//       "Aggregation framework",
//     ],
//     level: 75,
//     resources: "https://www.mongodb.com",
//     github: "https://github.com/mongodb/mongo",
//     color: "from-zinc-800 to-zinc-900",
//   },
//   {
//     name: "PostgreSQL",
//     icon: "/placeholder.svg?height=40&width=40",
//     description:
//       "A powerful, open-source object-relational database system with strong reliability",
//     features: [
//       "ACID compliance",
//       "Complex queries",
//       "JSON data support",
//       "Table inheritance",
//       "Multi-version concurrency control",
//     ],
//     level: 70,
//     resources: "https://www.postgresql.org",
//     github: "https://github.com/postgres/postgres",
//     color: "from-zinc-800 to-zinc-900",
//   },
//   {
//     name: "GraphQL",
//     icon: "/placeholder.svg?height=40&width=40",
//     description:
//       "A query language for APIs and a runtime for executing those queries with your existing data",
//     features: [
//       "Declarative data fetching",
//       "Single endpoint architecture",
//       "Strong type system",
//       "Introspection capabilities",
//       "Real-time updates with subscriptions",
//     ],
//     level: 65,
//     resources: "https://graphql.org",
//     github: "https://github.com/graphql/graphql-spec",
//     color: "from-zinc-800 to-zinc-900",
//   },
// ];

// export default function SkillsPage() {
//   const [activeTab, setActiveTab] = useState<"frontend" | "backend">(
//     "frontend"
//   );
//   const [selectedSkill, setSelectedSkill] = useState<any>(null);
//   const containerRef = useRef<HTMLDivElement>(null);

//   // Track mouse position for parallax effect
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({
//         x: e.clientX,
//         y: e.clientY,
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   // Calculate parallax effect
//   const calcParallax = (depth = 10) => {
//     const x = (window.innerWidth / 2 - mousePosition.x) / depth;
//     const y = (window.innerHeight / 2 - mousePosition.y) / depth;
//     return { x, y };
//   };

//   return (
//     <div className="min-h-screen bg-black text-white overflow-hidden">
//       {/* Background grid with parallax effect */}
//       <div className="fixed inset-0 z-0">
//         <motion.div
//           className="absolute inset-0 opacity-20"
//           style={{
//             backgroundImage:
//               "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2px, transparent 0)",
//             backgroundSize: "50px 50px",
//           }}
//           animate={{
//             x: calcParallax(50).x,
//             y: calcParallax(50).y,
//           }}
//           transition={{
//             type: "spring",
//             damping: 50,
//             stiffness: 100,
//           }}
//         />
//       </div>

//       {/* Main content */}
//       <div className="relative z-10 container mx-auto px-4 py-16">
//         {/* Header section with animated text */}
//         <div className="mb-16 relative">
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
//               <motion.span
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.2, duration: 0.8 }}
//                 className="block"
//               >
//                 Technical
//               </motion.span>
//               <motion.span
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.4, duration: 0.8 }}
//                 className="block text-gray-400"
//               >
//                 Expertise
//               </motion.span>
//             </h1>

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.6, duration: 0.8 }}
//               className="text-gray-400 text-lg md:text-xl max-w-2xl mb-8"
//             >
//               Specialized in modern web development technologies and frameworks
//               for building scalable applications
//             </motion.p>
//           </motion.div>

//           {/* Animated line */}
//           <motion.div
//             className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent w-full"
//             initial={{ scaleX: 0, opacity: 0 }}
//             animate={{ scaleX: 1, opacity: 0.5 }}
//             transition={{ delay: 0.8, duration: 1.2 }}
//           />
//         </div>

//         {/* Tab navigation */}
//         <motion.div
//           className="flex space-x-4 mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//         >
//           <TabButton
//             active={activeTab === "frontend"}
//             onClick={() => setActiveTab("frontend")}
//             icon={<Code className="mr-2 h-5 w-5" />}
//           >
//             Frontend
//           </TabButton>
//           <TabButton
//             active={activeTab === "backend"}
//             onClick={() => setActiveTab("backend")}
//             icon={<Database className="mr-2 h-5 w-5" />}
//           >
//             Backend
//           </TabButton>
//         </motion.div>

//         {/* Skills grid with staggered animation */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: { opacity: 0 },
//             visible: {
//               opacity: 1,
//               transition: {
//                 staggerChildren: 0.1,
//               },
//             },
//           }}
//         >
//           {(activeTab === "frontend" ? frontendSkills : backendSkills).map(
//             (skill, index) => (
//               <SkillCard
//                 key={skill.name}
//                 skill={skill}
//                 index={index}
//                 onClick={() => setSelectedSkill(skill)}
//                 isSelected={selectedSkill?.name === skill.name}
//               />
//             )
//           )}
//         </motion.div>

//         {/* Explore all skills button */}
//         <motion.div
//           className="mt-12 text-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8, duration: 0.6 }}
//         >
//           <Button
//             className="bg-white text-black hover:bg-gray-200 transition-all duration-300 group"
//             size="lg"
//           >
//             Explore All Skills
//             <motion.span
//               animate={{ x: [0, 5, 0] }}
//               transition={{
//                 repeat: Number.POSITIVE_INFINITY,
//                 duration: 1.5,
//                 repeatType: "loop",
//               }}
//             >
//               <ArrowRight className="ml-2 h-4 w-4" />
//             </motion.span>
//           </Button>
//         </motion.div>
//       </div>

//       {/* Detailed skill view modal */}
//       <AnimatedModal
//         isOpen={!!selectedSkill}
//         onClose={() => setSelectedSkill(null)}
//       >
//         {selectedSkill && (
//           <div className="p-6 md:p-8">
//             <div className="flex items-center mb-6">
//               <div className="mr-4 bg-zinc-800 p-3 rounded-lg">
//                 <img
//                   src={selectedSkill.icon || "/placeholder.svg"}
//                   alt={selectedSkill.name}
//                   className="w-10 h-10"
//                 />
//               </div>
//               <div>
//                 <h2 className="text-2xl md:text-3xl font-bold">
//                   {selectedSkill.name}
//                 </h2>
//                 <div className="flex mt-1">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <Star
//                       key={i}
//                       className={cn(
//                         "h-4 w-4 mr-1",
//                         i < Math.floor(selectedSkill.level / 20)
//                           ? "text-yellow-400 fill-yellow-400"
//                           : "text-gray-600"
//                       )}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <p className="text-gray-300 mb-6">{selectedSkill.description}</p>

//             <div className="mb-6">
//               <h3 className="text-lg font-semibold mb-3">Key Features</h3>
//               <ul className="space-y-2">
//                 {selectedSkill.features.map(
//                   (feature: string, index: number) => (
//                     <motion.li
//                       key={index}
//                       initial={{ opacity: 0, x: -10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       className="flex items-start"
//                     >
//                       <div className="mr-3 mt-1 bg-zinc-800 rounded-full p-1">
//                         <ChevronRight className="h-3 w-3 text-white" />
//                       </div>
//                       <span className="text-gray-300">{feature}</span>
//                     </motion.li>
//                   )
//                 )}
//               </ul>
//             </div>

//             <div className="mb-6">
//               <h3 className="text-lg font-semibold mb-3">Proficiency</h3>
//               <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
//                 <motion.div
//                   className="h-full bg-white"
//                   initial={{ width: 0 }}
//                   animate={{ width: `${selectedSkill.level}%` }}
//                   transition={{ duration: 1 }}
//                 />
//               </div>
//               <div className="mt-2 text-sm text-gray-400">
//                 {selectedSkill.level}% proficiency
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-3">
//               <a
//                 href={selectedSkill.resources}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center px-4 py-2 rounded-md bg-zinc-800 hover:bg-zinc-700 transition-colors"
//               >
//                 <ExternalLink className="mr-2 h-4 w-4" />
//                 Documentation
//               </a>
//               <a
//                 href={selectedSkill.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center px-4 py-2 rounded-md bg-zinc-800 hover:bg-zinc-700 transition-colors"
//               >
//                 <Github className="mr-2 h-4 w-4" />
//                 GitHub
//               </a>
//             </div>
//           </div>
//         )}
//       </AnimatedModal>
//     </div>
//   );
// }

// // Tab button component
// interface TabButtonProps {
//   active: boolean;
//   onClick: () => void;
//   children: React.ReactNode;
//   icon: React.ReactNode;
// }

// function TabButton({ active, onClick, children, icon }: TabButtonProps) {
//   return (
//     <button
//       onClick={onClick}
//       className={cn(
//         "relative px-6 py-3 rounded-md text-lg font-medium transition-all duration-300 overflow-hidden group",
//         active ? "text-black" : "text-white"
//       )}
//     >
//       <motion.div
//         className="absolute inset-0 bg-white rounded-md z-0"
//         initial={false}
//         animate={{
//           scale: active ? 1 : 0,
//           opacity: active ? 1 : 0,
//         }}
//         transition={{ duration: 0.3 }}
//       />
//       <span className="relative z-10 flex items-center">
//         <motion.span
//           animate={{
//             color: active ? "#000000" : "#ffffff",
//           }}
//           transition={{ duration: 0.3 }}
//         >
//           {icon}
//         </motion.span>
//         <motion.span
//           animate={{
//             color: active ? "#000000" : "#ffffff",
//           }}
//           transition={{ duration: 0.3 }}
//         >
//           {children}
//         </motion.span>
//       </span>
//       {!active && (
//         <motion.div
//           className="absolute inset-0 border border-white/30 rounded-md z-0"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.3 }}
//         />
//       )}
//     </button>
//   );
// }

// // Skill card component with hover effects
// interface SkillCardProps {
//   skill: any;
//   index: number;
//   onClick: () => void;
//   isSelected: boolean;
// }

// function SkillCard({ skill, index, onClick, isSelected }: SkillCardProps) {
//   return (
//     <motion.div
//       variants={{
//         hidden: { opacity: 0, y: 20 },
//         visible: {
//           opacity: 1,
//           y: 0,
//           transition: {
//             duration: 0.5,
//             type: "spring",
//             stiffness: 100,
//           },
//         },
//       }}
//       whileHover={{
//         y: -10,
//         transition: { duration: 0.3 },
//       }}
//       onClick={onClick}
//       className={cn(
//         "relative overflow-hidden rounded-xl cursor-pointer group",
//         "border border-zinc-800 hover:border-zinc-600 transition-colors duration-300"
//       )}
//     >
//       <div className={`bg-gradient-to-br ${skill.color} p-6 h-full`}>
//         {/* Glowing orb effect in background */}
//         <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

//         <div className="relative z-10">
//           <div className="flex justify-between items-start mb-4">
//             <div className="bg-zinc-800/50 p-2 rounded-lg backdrop-blur-sm">
//               <img
//                 src={skill.icon || "/placeholder.svg"}
//                 alt={skill.name}
//                 className="w-8 h-8"
//               />
//             </div>

//             <motion.div
//               className="bg-zinc-800/50 px-2 py-1 rounded-md text-xs backdrop-blur-sm"
//               whileHover={{ scale: 1.05 }}
//             >
//               {skill.level}% Proficiency
//             </motion.div>
//           </div>

//           <h3 className="text-xl font-bold mb-2">{skill.name}</h3>

//           <p className="text-gray-400 text-sm mb-4 line-clamp-3">
//             {skill.description}
//           </p>

//           <div className="w-full h-1 bg-zinc-800/50 rounded-full overflow-hidden mb-4">
//             <motion.div
//               className="h-full bg-white"
//               initial={{ width: 0 }}
//               animate={{ width: `${skill.level}%` }}
//               transition={{ duration: 1, delay: index * 0.1 }}
//             />
//           </div>

//           <motion.div
//             className="flex items-center text-sm text-gray-400 group-hover:text-white transition-colors"
//             initial={{ opacity: 0.7 }}
//             whileHover={{ opacity: 1 }}
//           >
//             <span>View details</span>
//             <motion.div
//               animate={{ x: [0, 5, 0] }}
//               transition={{
//                 repeat: Number.POSITIVE_INFINITY,
//                 duration: 1.5,
//                 repeatType: "loop",
//               }}
//             >
//               <ArrowRight className="ml-2 h-3 w-3" />
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// // Animated modal component
// interface AnimatedModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   children: React.ReactNode;
// }

// function AnimatedModal({ isOpen, onClose, children }: AnimatedModalProps) {
//   // Close on escape key
//   useEffect(() => {
//     const handleEsc = (e: KeyboardEvent) => {
//       if (e.key === "Escape") onClose();
//     };

//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, [onClose]);

//   // Prevent body scroll when modal is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }

//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [isOpen]);

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           {/* Backdrop */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
//             onClick={onClose}
//           />

//           {/* Modal */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.9, y: 20 }}
//             transition={{ type: "spring", damping: 25, stiffness: 300 }}
//             className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[80vh] overflow-y-auto bg-zinc-900 rounded-xl border border-zinc-800 shadow-2xl z-50"
//           >
//             {/* Close button */}
//             <button
//               onClick={onClose}
//               className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="w-5 h-5"
//               >
//                 <path d="M18 6L6 18M6 6l12 12" />
//               </svg>
//             </button>

//             {children}
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }
