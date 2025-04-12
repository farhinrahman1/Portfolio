"use client";
import { motion } from "framer-motion";

interface GlowBackgroundProps {
  mousePosition: { x: number; y: number };
}

export default function GlowBackground({ mousePosition }: GlowBackgroundProps) {
  return (
    <motion.div
      className="absolute inset-0 -z-10 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {/* Static background with animated glow effects */}
      <div className="absolute inset-0 bg-zinc-900">
        {/* Animated glow spots that don't change shape when container expands */}
        <motion.div
          className="glow-spot glow-spot-1"
          animate={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
        <motion.div
          className="glow-spot glow-spot-2"
          animate={{
            x: mousePosition.x * -30,
            y: mousePosition.y * -30,
          }}
          transition={{ type: "spring", stiffness: 40, damping: 25 }}
        />
        <motion.div
          className="glow-spot glow-spot-3"
          animate={{
            x: mousePosition.x * 40,
            y: mousePosition.y * 40,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 20 }}
        />
        <motion.div
          className="glow-spot glow-spot-4"
          animate={{
            x: mousePosition.x * -20,
            y: mousePosition.y * -20,
          }}
          transition={{ type: "spring", stiffness: 60, damping: 35 }}
        />

        {/* Subtle shimmer effect */}
        <div className="shimmer-overlay"></div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>
    </motion.div>
  );
}
