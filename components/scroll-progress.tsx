// "use client";

// import { cn } from "@/lib/utils";
// import { motion, MotionProps, useScroll, useSpring } from "motion/react";
// import React, { useEffect, useState } from "react";

// interface ScrollProgressProps
//   extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {}

// export const ScrollProgress = React.forwardRef<
//   HTMLDivElement,
//   ScrollProgressProps
// >(({ className, ...props }, ref) => {
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;
//   const { scrollYProgress } = useScroll();

//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 200,
//     damping: 50,
//     restDelta: 0.001,
//   });

//   return (
//     <motion.div
//       ref={ref}
//       className={cn(
//         "fixed inset-x-0 top-0 z-[1000] h-1 origin-left bg-gradient-to-r from-amber-900 via-[#b6557f] to-[#d29d5d]",
//         className
//       )}
//       style={{
//         scaleX,
//       }}
//       {...props}
//     />
//   );
// });

// ScrollProgress.displayName = "ScrollProgress";

"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps, useScroll, useSpring } from "motion/react";
import React, { useEffect, useState } from "react";

interface ScrollProgressProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {}

export const ScrollProgress = React.forwardRef<
  HTMLDivElement,
  ScrollProgressProps
>(({ className, ...props }, ref) => {
  // ✅ Hooks must always be called
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ Only the JSX render is conditional
  if (!mounted) return null;

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-[1000] h-1 origin-left bg-gradient-to-r from-amber-900 via-[#b6557f] to-[#d29d5d]",
        className
      )}
      style={{ scaleX }}
      {...props}
    />
  );
});

ScrollProgress.displayName = "ScrollProgress";
