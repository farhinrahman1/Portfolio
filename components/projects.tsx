"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Figma,
  Code2,
  Layers,
  Monitor,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Glassmorphism Card",
    description:
      "Built a sleek Glassmorphism card component exploring trendy UI design patterns with frosted glass effects and vibrant gradients.",
    category: "Design",
    type: "Figma",
    year: "2024",
    tags: ["UI/UX", "Card", "Design"],
    status: "Completed",
    image: "/glassmorphism-ui.png",
    link: "https://www.figma.com/proto/M55iLstAEmwHOCbjNUzhQT/Glassmorphism-Card?node-id=3-26&p=f&t=TgXauIvVdo8lRZm5-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
  },
  {
    id: 2,
    title: "Smartwatch Prototype",
    description:
      "Created an animated smartwatch prototype to explore wearable UI design and complex motion-based user interactions.",
    category: "Design",
    type: "Figma",
    year: "2025",
    tags: ["Animation", "Prototype", "UX"],
    status: "Live",
    image: "/smartwatch-prototype.png",
    link: "https://www.figma.com/proto/fPOvdVSwCyEnrRSyfvmnTK/Smartwatch-animation?t=azE7Kgwra7pHb2R5-1",
  },
  {
    id: 3,
    title: "Cartyxor Dashboard",
    description:
      "React-based multivendor e-commerce platform with real-time collaboration and sophisticated data visualization.",
    category: "Development",
    type: "Frontend",
    year: "2025",
    tags: ["React", "TypeScript", "Real-time"],
    status: "In Progress",
    image: "/ecommerce-dashboard-ui.png",
    link: "#",
  },
  {
    id: 4,
    title: "Parallax Perfume",
    description:
      "Immersive perfume landing page featuring advanced parallax scrolling and seamless 3D-like transitions.",
    category: "Design",
    type: "Figma",
    year: "2025",
    tags: ["Parallax", "Animation", "UX/UI"],
    status: "Live",
    image: "/perfume-website-design.png",
    link: "https://www.figma.com/proto/fPOvdVSwCyEnrRSyfvmnTK/Smartwatch-animation?t=edF8AuKIqsyPQwHD-1&node-id=3-77&starting-point-node-id=3%3A77&scaling=scale-down&content-scaling=fixed",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "Personal portfolio website built with Next.js and modern animations, featuring a minimalist aesthetic.",
    category: "Development",
    type: "Frontend",
    year: "2025",
    tags: ["Next.js", "Framer Motion", "Portfolio"],
    status: "Live",
    image: "/minimalist-portfolio-dark-ui.jpg",
    link: "https://farhin.vercel.app/",
  },
  {
    id: 6,
    title: "Parcel Tracking",
    description:
      "Designed dynamic ETA and pricing feedback to reduce user anxiety after request confirmation",
    category: "Design",
    type: "Figma",
    year: "2025",
    tags: ["Single Page", "Animation", "UX/UI"],
    status: "Live",
    image: "/parcel-tracking.png",
    link: "https://www.figma.com/proto/8Dwv5mZn0i7ODPvnnVvh9f/Parcel-Tracking?t=5Hne20N4iWIxDpf1-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=2-3&starting-point-node-id=2%3A3",
  },
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter
  );

  return (
    <section
      id="projects"
      className="py-32 px-6 bg-background bg-black text-white relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-sans font-light tracking-tighter mb-6 text-balance text-orange-200">
              Selected <span className="text-white italic">Works</span>
            </h2>
            <p className="text-xl text-white font-light leading-relaxed">
              A curated selection of digital experiences, focusing on
              high-fidelity prototypes and polished web applications.
            </p>
          </div>

          {/* Filters */}
          <div className="flex gap-2 bg-muted/20 p-1 rounded-full border border-border self-start">
            {["All", "Design", "Development"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-base font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-orange-200 text-black shadow-sm"
                    : "text-white/60 hover:text-orange-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-muted cursor-pointer"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="bg-orange-200 text-black px-6 py-3 rounded-full flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 font-medium">
                    View Case Study <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Overlay Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-black/80 backdrop-blur-md border-orange-200/20 text-orange-200 font-normal"
                  >
                    {project.year}
                  </Badge>
                </div>
              </a>

              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-2xl font-sans font-medium text-orange-300 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-foreground/70 font-mono uppercase tracking-widest">
                      {project.type === "Figma" ? (
                        <Figma className="w-3 h-3" />
                      ) : (
                        <Code2 className="w-3 h-3" />
                      )}
                      {project.category}
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={`${
                      project.status === "Live"
                        ? "!text-orange-200 !border-orange-200/40 !bg-orange-200/20"
                        : project.status === "In Progress"
                        ? "!text-yellow-400 !border-yellow-400/40 !bg-yellow-400/20"
                        : project.status === "Completed"
                        ? "!text-green-400 !border-green-400/40 !bg-green-400/20"
                        : "!text-foreground/60 !border-foreground/20 !bg-foreground/10"
                    }`}
                  >
                    {project.status}
                  </Badge>
                </div>

                <p className="text-white font-light leading-relaxed text-pretty">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-orange-200/70 px-2 py-1 rounded border border-orange-200/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-32 pt-20 border-t border-border flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col gap-4 max-w-md">
            <h4 className="text-xl font-medium text-orange-200">
              Ready to start a project?
            </h4>
            <p className="text-white font-light">
              I'm currently available for freelance opportunities and full-time
              positions. Let's build something exceptional.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center transition-colors">
                <Layers className="w-5 h-5 text-orange-200" />
              </div>
              <span className="text-[10px] uppercase tracking-tighter text-orange-200 font-mono">
                Design Systems
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center transition-colors">
                <Monitor className="w-5 h-5 text-orange-200" />
              </div>
              <span className="text-[10px] uppercase tracking-tighter text-orange-200 font-mono">
                Web Apps
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center transition-colors">
                <Smartphone className="w-5 h-5 text-orange-200" />
              </div>
              <span className="text-[10px] uppercase tracking-tighter text-orange-200 font-mono">
                Mobile UX
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
