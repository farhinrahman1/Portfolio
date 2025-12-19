"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  easeInOut,
} from "framer-motion";
import { Circle } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import farhinImage from "../components/farhin1.jpg";
// import { VideoText } from "@/components/magicui/video-text"; // Ensure this file exists or update the path
// Update the path below to the correct relative location of video-text.tsx
import { VideoText } from "@/components/magicui/video-text";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: easeInOut,
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

function HeroGeometric({
  // badge = "Kokonut UI",
  // title1 = "Farhin Rahman",
  title2 = "Farhin Rahman",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: easeInOut,
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tight -mt-8 md:mt-0">
              <div className="relative h-[200px] w-full overflow-hidden">
                <VideoText
                  // src="https://cdn.magicui.design/ocean-small.webm"
                  // src="https://cdn.pixabay.com/video/2023/10/01/183107-870151708_large.mp4"
                  // src="https://media.istockphoto.com/id/2161467517/video/satisfaction-document-checklist-database-contract-checkbox-insurance-manager-technology.mp4?s=mp4-640x640-is&k=20&c=gnNqY6yOp39PT9CxuoqDlMkQtzxfHHHMi4703LZ7ZQc="
                  // src="https://cdn.pixabay.com/video/2022/03/16/110942-689510603_large.mp4"
                  // src="https://cdn.pixabay.com/video/2018/12/17/20072-307163785_large.mp4"
                  src="110942-689510603_large.mp4"
                  fontSize={25}
                  fontWeight="900"
                  fontFamily="monospace"
                  className="w-full h-full object-contain"
                >
                  Farhin
                </VideoText>
              </div>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            {/* <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              Hi, I am a Frontend Developer. I bring designs to life with code.
            </p> */}
            <p className="text-center text-transparent bg-clip-text bg-gradient-to-r from-white/80 via-white/85 to-white/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide animate-gradient -mt-12 md:mt-0">
              I'm a{" "}
              <span className="font-bold text-2xl bg-clip-text text-transparent bg-orange-200">
                Frontend Developer.
              </span>{" "}
              Crafting smooth digital journeys, one interface at a time.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}

export { HeroGeometric };
