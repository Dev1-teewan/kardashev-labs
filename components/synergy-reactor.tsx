"use client";

import { motion } from "framer-motion";
import { Database, Cpu } from "lucide-react";

// Helper: Calculate cubic bezier curve point
const bezierPoint = (
  t: number,
  p0: number,
  p1: number,
  p2: number,
  p3: number
) => {
  const mt = 1 - t;
  return (
    mt * mt * mt * p0 +
    3 * mt * mt * t * p1 +
    3 * mt * t * t * p2 +
    t * t * t * p3
  );
};

// Helper: Generate particle positions along bezier curve
const generateParticlePath = (
  p0: [number, number],
  p1: [number, number],
  p2: [number, number],
  p3: [number, number]
) => {
  return [0, 0.33, 0.67, 1.0].map((t) => ({
    x: bezierPoint(t, p0[0], p1[0], p2[0], p3[0]),
    y: bezierPoint(t, p0[1], p1[1], p2[1], p3[1]) - 12, // Offset upward
  }));
};

// Constants
const TEXT_GLOW_ANIMATION = {
  textShadow: [
    "0 0 10px rgba(0, 255, 200, 0.5)",
    "0 0 20px rgba(0, 255, 200, 0.8)",
    "0 0 10px rgba(0, 255, 200, 0.5)",
  ],
  opacity: [0.9, 1, 0.9],
};

const GLOW_ANIMATION = {
  scale: [1, 1.5, 1],
  opacity: [0.3, 0.6, 0.3],
};

const SPRING_TRANSITION = {
  type: "spring" as const,
  stiffness: 400,
  damping: 20,
};

// Particle component
const Particle = ({
  keyPrefix,
  path,
  delayOffset = 0,
}: {
  keyPrefix: string;
  path: Array<{ x: number; y: number }>;
  delayOffset?: number;
}) => {
  return (
    <>
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={`${keyPrefix}-${i}`}
          className="absolute w-1.5 h-1.5 bg-[#00ffc8] rounded-full z-20 shadow-lg shadow-[#00ffc8]/50"
          style={{
            left: `${(path[0].x / 800) * 100}%`,
            top: `${(path[0].y / 600) * 100}%`,
          }}
          animate={{
            left: path.map((p) => `${(p.x / 800) * 100}%`),
            top: path.map((p) => `${(p.y / 600) * 100}%`),
            opacity: [0, 1, 0.9, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.3 + delayOffset,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

export function SynergyReactor() {
  // Particle paths
  const aiPath = generateParticlePath(
    [160, 480],
    [180, 360],
    [220, 260],
    [350, 200]
  );
  const blockchainPath = generateParticlePath(
    [640, 480],
    [620, 360],
    [580, 260],
    [450, 200]
  );

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative h-[500px] md:h-[550px] flex flex-col items-center justify-start pt-16">
        {/* SVG Connection Paths */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          viewBox="0 0 800 600"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M 350 200 C 220 260, 180 360, 160 480"
            stroke="#00ffc8"
            strokeWidth="2"
            fill="none"
            strokeOpacity="0.4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          />
          <motion.path
            d="M 450 200 C 580 260, 620 360, 640 480"
            stroke="#00ffc8"
            strokeWidth="2"
            fill="none"
            strokeOpacity="0.4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          />
        </svg>

        {/* Energy Flow Particles */}
        <Particle keyPrefix="ai" path={aiPath} />
        <Particle
          keyPrefix="blockchain"
          path={blockchainPath}
          delayOffset={1}
        />

        {/* Dyson Catalyst Core - Root at Top */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2, ...SPRING_TRANSITION }}
          className="relative z-20 flex flex-col items-center mb-8"
        >
          <div className="relative">
            {/* Pulsing Energy Core Glow */}
            <motion.div
              className="absolute inset-0 rounded-full bg-[#00ffc8]/40 blur-2xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.9, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#00ffc8]/50"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: 0.5,
              }}
            />
            {/* Globe Icon with Line Drawing Animation */}
            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#00ffc8] to-[#00cc9f] flex items-center justify-center border-2 border-[#00ffc8]">
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  opacity: {
                    duration: 0.8,
                    delay: 0.4,
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  },
                  scale: {
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 2.0,
                    ease: "easeInOut",
                  },
                }}
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  className="relative"
                  fill="none"
                  stroke="#050505"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <defs>
                    <filter
                      id="neonGlow"
                      x="-50%"
                      y="-50%"
                      width="200%"
                      height="200%"
                    >
                      <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                      <feOffset
                        in="coloredBlur"
                        dx="0"
                        dy="0"
                        result="offsetBlur"
                      />
                      <feFlood floodColor="#00ffc8" floodOpacity="0.5" />
                      <feComposite in2="offsetBlur" operator="in" />
                      <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  {/* Globe circle outline - matches lucide-react Globe */}
                  <motion.circle
                    cx="24"
                    cy="24"
                    r="20"
                    filter="url(#neonGlow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  />

                  {/* Left hemisphere arc - matches lucide-react Globe (scaled 2x from 24x24 to 48x48) */}
                  <motion.path
                    d="M 24 4 A 29 29 0 0 0 24 44 A 29 29 0 0 0 24 4"
                    filter="url(#neonGlow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      duration: 0.9,
                      delay: 1.0,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  />

                  {/* Horizontal line - matches lucide-react Globe */}
                  <motion.line
                    x1="4"
                    y1="24"
                    x2="44"
                    y2="24"
                    filter="url(#neonGlow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 1.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  />
                </svg>
              </motion.div>
            </div>
          </div>

          {/* INTERSECTION - Below core */}
          <div className="mt-6 text-center">
            <div className="text-lg md:text-xl font-mono font-bold text-[#00ffc8] uppercase tracking-wider mb-2">
              INTERSECTION
            </div>
            <div className="text-xs font-mono text-white/50 max-w-[220px] mb-3">
              Consensus provides the trust; AI provides the efficiency
            </div>
          </div>
        </motion.div>

        {/* Branch Component */}
        {[
          {
            side: "left",
            position: "left-8 md:left-16",
            delay: 0.8,
            glowDelay: 0,
            title: "AUTONOMOUS INTELLIGENCE",
            label: "AI",
            iconAnimation: (
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <Cpu size={40} className="text-[#00ffc8]" />
              </motion.div>
            ),
          },
          {
            side: "right",
            position: "right-8 md:right-16",
            delay: 1,
            glowDelay: 1,
            title: "DISTRIBUTED CONSENSUS",
            label: "Blockchain",
            iconAnimation: (
              <div className="relative w-10 h-10">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute w-7 h-7 border border-[#00ffc8] bg-[#00ffc8]/10"
                    style={{ left: i * 3, top: i * 3 }}
                    animate={{ x: [0, 2, 0], y: [0, 2, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.2,
                    }}
                  />
                ))}
                <Database
                  size={28}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#00ffc8]"
                />
              </div>
            ),
          },
        ].map((branch) => (
          <motion.div
            key={branch.side}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: branch.delay,
              ...SPRING_TRANSITION,
            }}
            className={`absolute ${branch.position} bottom-8 z-10 flex flex-col items-center`}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full bg-[#00ffc8]/20 blur-xl"
                animate={GLOW_ANIMATION}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: branch.glowDelay,
                }}
              />
              <div className="relative p-5 rounded-2xl border border-[#00ffc8]/30 bg-[#00ffc8]/5 backdrop-blur-sm">
                {branch.iconAnimation}
              </div>
            </div>
            <div className="mt-3 text-center">
              <div className="text-sm font-mono text-white/60 uppercase tracking-wider mb-1">
                {branch.title}
              </div>
              <motion.div
                className="text-lg md:text-xl font-mono font-bold text-[#00ffc8]"
                animate={TEXT_GLOW_ANIMATION}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                {branch.label}
              </motion.div>
            </div>
          </motion.div>
        ))}

        {/* Highlight Quote - Massive and centered at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute -bottom-12 md:-bottom-16 left-1/2 -translate-x-1/2 z-10 text-center px-4 w-full"
        >
          <motion.p
            className="text-lg md:text-xl font-mono font-bold text-white max-w-3xl mx-auto leading-tight"
            animate={{
              textShadow: [
                "0 0 10px rgba(0, 255, 200, 0.3)",
                "0 0 25px rgba(0, 255, 200, 0.7)",
                "0 0 10px rgba(0, 255, 200, 0.3)",
              ],
              opacity: [0.9, 1, 0.9],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            Together, they empower people through transformative technology.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
