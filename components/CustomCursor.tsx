"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spring = { stiffness: 400, damping: 40 };
  const cursorX = useSpring(mouseX, spring);
  const cursorY = useSpring(mouseY, spring);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    };

    checkMobile();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", checkMobile);

    // Detect hover targets
    const targets = document.querySelectorAll(
      'a, button, [data-cursor="hover"]'
    );
    targets.forEach((el) => {
      el.addEventListener("mouseenter", () => setIsHovering(true));
      el.addEventListener("mouseleave", () => setIsHovering(false));
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", () => setIsHovering(true));
        el.removeEventListener("mouseleave", () => setIsHovering(false));
      });
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <>
      <style jsx global>{`
        html,
        body {
          cursor: none !important;
        }
      `}</style>

      {/* Main Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3.5 h-3.5 bg-white rounded-full z-[10000] pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 border border-white/40 rounded-full z-[9999] pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.2 : 1,
          borderColor: isHovering
            ? "rgba(255,255,255,0.8)"
            : "rgba(255,255,255,0.4)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </>
  );
}
