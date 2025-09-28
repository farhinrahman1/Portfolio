"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, ExternalLink, Figma, Code2 } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Glassmorphism Card",
    description:
      "Built a sleek Glassmorphism card component exploring trendy UI design patterns.",
    category: "Design",
    type: "Figma",
    year: "2024",
    tags: ["UI/UX", "Card", "Design"],
    status: "Completed",
    link: "https://www.figma.com/proto/M55iLstAEmwHOCbjNUzhQT/Glassmorphism-Card?node-id=3-26&t=NSsC2suxVwivP19f-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
  {
    id: 2,
    title: "Animated Smartwatch Prototype",
    description:
      "Created an animated smartwatch prototype to explore wearable UI design and motion-based user interactions.",
    category: "Design",
    type: "Figma",
    year: "2025",
    tags: ["Animation", "Prototype", "UX"],
    status: "Live",
    link: "https://www.figma.com/proto/fPOvdVSwCyEnrRSyfvmnTK/Watch-animation?node-id=3-77&p=f&t=zmdgtzYjQPUGSq9D-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A77",
  },
  {
    id: 3,
    title: "Task Management System",
    description:
      "React-based task management application with real-time collaboration features.",
    category: "Development",
    type: "Frontend",
    year: "2024",
    tags: ["React", "TypeScript", "Real-time"],
    status: "In Progress",
    link: "#",
  },
  {
    id: 4,
    title: "Parallax Scrolling Animation",
    description:
      "Created parallax scrolling animation for a perfume page. Smooth clicks forward, seamless drags back.",
    category: "Design",
    type: "Figma",
    year: "2025",
    tags: ["Parallax Scrolling", "Animation", "UX/UI"],
    status: "Live",
    link: "https://www.figma.com/proto/AZnjKLXXCCaKqh3nPGlVAf/Parallax-Perfume-Animation?t=Olgv6FRd9fKOc4C3-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=54-72&starting-point-node-id=8%3A7",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "Personal portfolio website built with Next.js and modern animations.",
    category: "Development",
    type: "Frontend",
    year: "2023",
    tags: ["Next.js", "Framer Motion", "Portfolio"],
    status: "Live",
    link: "#",
  },
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const filters = ["All", "Design", "Development"];

  const filteredProjects = projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="min-h-screen bg-black text-white py-20 px-6 relative overflow-hidden"
    >
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gray-300 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-baseline gap-8 mb-8">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight">
              Selected Work
            </h1>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-800 to-transparent mt-6"></div>
          </div>

          <p className="text-xl text-gray-400 font-light max-w-2xl">
            <em>Crafting interfaces.</em> Building polished software and web
            experiences. Experimenting with magical details in user interfaces.
          </p>
        </div>

        {/* Filter Navigation */}
        <div
          className={`mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex gap-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative ${
                  activeFilter === filter
                    ? "text-white"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {filter}
                {activeFilter === filter && (
                  <div className="absolute -bottom-2 left-0 w-full h-px bg-white animate-in slide-in-from-left duration-300"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects List with Cards */}
        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group cursor-pointer transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="flex items-start gap-8 p-6 rounded-lg border border-gray-800/50 bg-gray-900/20 hover:bg-gray-900/40 hover:border-gray-700/50 transition-all duration-300">
                {/* Small Preview Card */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700/50 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {project.type === "Figma" ? (
                      <Figma className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    ) : (
                      <Code2 className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-light mb-1 group-hover:text-gray-300 transition-colors duration-300 flex items-center gap-2">
                        {project.title}
                        <ArrowUpRight
                          className={`w-4 h-4 transition-all duration-300 ${
                            hoveredProject === project.id
                              ? "translate-x-1 -translate-y-1 opacity-100"
                              : "opacity-0"
                          }`}
                        />
                      </h4>

                      <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                        <span>{project.type}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                        <span>•</span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            project.status === "Live"
                              ? "bg-green-500/10 text-green-400 border border-green-500/20"
                              : project.status === "In Progress"
                              ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                              : "bg-gray-500/10 text-gray-400 border border-gray-500/20"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 font-light leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-gray-500 bg-gray-800/50 px-2 py-1 rounded border border-gray-700/50 group-hover:border-gray-600/50 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Separator Line */}
              <div
                className={`h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mt-8 transition-all duration-1000 ${
                  isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                }`}
                style={{ transitionDelay: `${650 + index * 100}ms` }}
              ></div>
            </a>
          ))}
        </div>

        {/* Footer Statement */}
        <div
          className={`mt-20 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center">
            <p className="text-lg text-gray-400 font-light italic max-w-2xl mx-auto leading-relaxed">
              In the past I've developed design systems, websites, and
              dashboards. Currently exploring the intersection of design and
              development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
