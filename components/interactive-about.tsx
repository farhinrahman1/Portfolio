"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ArrowRight, ExternalLink, Mail, User } from "lucide-react";

export default function InteractiveAbout() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  // Mouse position for various effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smoothed spring physics for mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // For the 3D card effect
  const rotateX = useTransform(
    smoothMouseY,
    [0, window.innerHeight],
    [10, -10]
  );
  const rotateY = useTransform(smoothMouseX, [0, window.innerWidth], [-10, 10]);

  // For the particle system
  type Particle = {
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    velocity: {
      x: number;
      y: number;
    };
  };

  const [particles, setParticles] = useState<Particle[]>([]);
  const [isHoveringBio, setIsHoveringBio] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Bio text that morphs between different phrases
  const bioVariants = [
    "A passionate Frontend Developer with over 2 years of experience",
    "Creating modern, responsive web experiences",
    "Turning ideas into interactive realities",
    "Crafting digital experiences that delight users",
  ];
  const [currentBioIndex, setCurrentBioIndex] = useState(0);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      if (!containerRef.current) return;
      const { left, top } = containerRef.current.getBoundingClientRect();

      mouseX.set(clientX);
      mouseY.set(clientY);

      setMousePosition({
        x: clientX - left,
        y: clientY - top,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Cycle through bio variants
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBioIndex((prev) => (prev + 1) % bioVariants.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const addHoverListeners = () => {
      document
        .querySelectorAll('a, button, [data-cursor="hover"]')
        .forEach((el) => {
          el.addEventListener("mouseenter", () => setIsHovered(true));
          el.addEventListener("mouseleave", () => setIsHovered(false));
        });
    };
    addHoverListeners();
  }, []);

  // Generate particles when hovering over bio
  useEffect(() => {
    if (!isHoveringBio) return;

    const interval = setInterval(() => {
      if (particles.length > 20) {
        setParticles((prev) => prev.slice(1));
      }

      setParticles((prev) => [
        ...prev,
        {
          id: Date.now(),
          x: mousePosition.x,
          y: mousePosition.y,
          size: Math.random() * 8 + 4,
          color: `hsl(${Math.random() * 60 + 240}, 80%, 60%)`,
          velocity: {
            x: (Math.random() - 0.5) * 3,
            y: (Math.random() - 0.5) * 3,
          },
        },
      ]);
    }, 100);

    return () => clearInterval(interval);
  }, [isHoveringBio, mousePosition, particles.length]);

  // Update particles position
  useEffect(() => {
    if (particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles(
        (prev) =>
          prev
            .map((particle) => ({
              ...particle,
              x: particle.x + particle.velocity.x,
              y: particle.y + particle.velocity.y,
              size: particle.size * 0.95, // Slowly shrink
            }))
            .filter((particle) => particle.size > 0.5) // Remove tiny particles
      );
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [particles]);

  // Cursor variants
  const cursorVariants = {
    default: {
      width: 32,
      height: 32,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    button: {
      width: 80,
      height: 80,
      backgroundColor: "rgba(131, 58, 180, 0.2)",
      border: "1px solid rgba(131, 58, 180, 0.5)",
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
    },
    text: {
      width: 120,
      height: 120,
      backgroundColor: "rgba(29, 78, 216, 0.15)",
      border: "1px solid rgba(29, 78, 216, 0.3)",
      x: mousePosition.x - 60,
      y: mousePosition.y - 60,
    },
  };

  // Functions for interactive elements
  const enterButton = () => {
    setCursorText("Click");
    setCursorVariant("button");
  };

  const enterText = () => {
    setCursorText("Explore");
    setCursorVariant("text");
    setIsHoveringBio(true);
  };

  const leaveInteractive = () => {
    setCursorText("");
    setCursorVariant("default");
    setIsHoveringBio(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 text-white"
    >
      {/* Particles system */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full pointer-events-none z-10"
          style={{
            x: particle.x,
            y: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
          }}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      ))}

      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${smoothMouseX.get()}px ${smoothMouseY.get()}px, rgba(79, 70, 229, 0.7) 0%, transparent 50%)`,
        }}
      />

      <div className="container mx-auto px-4 py-16 z-10">
        <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
          {/* 3D Tilt Card */}
          <motion.div
            className="w-full max-w-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-1 mb-16"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              perspective: 1000,
            }}
          >
            <div className="bg-neutral-900 rounded-2xl p-8 overflow-hidden">
              <div className="relative">
                <motion.div
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-500/20 blur-3xl"
                  animate={{
                    x: [0, 10, 0],
                    y: [0, -10, 0],
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 5,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-purple-500/20 blur-3xl"
                  animate={{
                    x: [0, -10, 0],
                    y: [0, 10, 0],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 7,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative z-10">
                  <motion.h2
                    className="text-sm uppercase tracking-widest text-purple-300 font-medium mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    Here's a little about me
                  </motion.h2>

                  <motion.h3
                    className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    Farhin Rahman
                  </motion.h3>

                  {/* Morphing text */}
                  <div className="h-8 mb-6 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={currentBioIndex}
                        className="text-lg text-gray-300"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        {bioVariants[currentBioIndex]}
                      </motion.p>
                    </AnimatePresence>
                  </div>

                  {/* Interactive bio text */}
                  <motion.div
                    className="text-gray-300 leading-relaxed mb-8"
                    onMouseEnter={enterText}
                    onMouseLeave={leaveInteractive}
                  >
                    <p className="mb-4">
                      I specialize in building modern, scalable online
                      applications with React, Next.js, and Tailwind CSS. My
                      goal is to make the web more accessible and entertaining
                      for people by utilizing innovative design and seamless
                      user interfaces.
                    </p>
                    <p>
                      When I'm not coding, you can find me discovering new
                      technologies and experimenting with design. I am
                      constantly keen to take on new tasks and advance as a
                      developer.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Magnetic buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* <MagneticButton
              icon={<Mail />}
              label="Contact Me"
              onMouseEnter={enterButton}
              onMouseLeave={leaveInteractive}
            /> */}
            {/* <MagneticButton
              icon={<User />}
              label="Portfolio"
              onMouseEnter={enterButton}
              onMouseLeave={leaveInteractive}
            /> */}
            <MagneticButton
              icon={<ExternalLink />}
              label="Resume"
              onMouseEnter={enterButton}
              onMouseLeave={leaveInteractive}
            />
          </div>
        </div>
      </div>

      {/* Text masking effect */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <motion.div
          className="text-[20vw] font-black text-center text-white/5 whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 20,
            ease: "linear",
          }}
        >
          FRONTEND DEVELOPER CREATIVE CODER
        </motion.div>
      </div>
    </div>
  );
}

// Magnetic button component
function MagneticButton({
  icon,
  label,
  onMouseEnter,
  onMouseLeave,
}: {
  icon: React.ReactNode;
  label: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;

    const { left, top, width, height } = rect;

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Magnetic effect - pull toward cursor
    setPosition({
      x: distanceX * 0.2,
      y: distanceY * 0.2,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    onMouseLeave();
  };

  return (
    <motion.button
      ref={buttonRef}
      className="relative group bg-neutral-800 hover:bg-neutral-700 text-white rounded-full px-6 py-3 flex items-center gap-2 overflow-hidden"
      onMouseEnter={onMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{icon}</span>
      <span className="relative z-10">{label}</span>

      {/* Button background animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}
