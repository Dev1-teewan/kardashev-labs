"use client";

import { motion } from "framer-motion";
import { X, Globe, Sun, ChevronLeft, ChevronRight } from "lucide-react";

interface Planet {
  tier: string;
  title: string;
  description: string;
  animation: string;
  icon: typeof Globe;
  color: string;
  progress: number;
}

interface EvolutionaryMapModalProps {
  planet: Planet;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export function EvolutionaryMapModal({
  planet,
  onClose,
  onPrev,
  onNext,
  hasPrev = false,
  hasNext = false,
}: EvolutionaryMapModalProps) {
  const Icon = planet.icon;

  const renderAnimation = () => {
    switch (planet.animation) {
      case "flickeringPlanet":
        return (
          <motion.div className="relative w-full h-full flex items-center justify-center">
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              <Globe size={120} className="text-[#00ffc8]" />
            </motion.div>
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#00ffc8]/30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
              }}
            />
          </motion.div>
        );

      case "gridPlanet":
        return (
          <motion.div className="relative w-full h-full flex items-center justify-center">
            <Globe size={120} className="text-[#00ffc8]" />
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 200 200"
            >
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i * 360) / 8;
                const x = 100 + 60 * Math.cos((angle * Math.PI) / 180);
                const y = 100 + 60 * Math.sin((angle * Math.PI) / 180);
                return (
                  <motion.circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="3"
                    fill="#00ffc8"
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.2,
                    }}
                  />
                );
              })}
              <motion.path
                d="M 100 40 L 100 160 M 40 100 L 160 100"
                stroke="#00ffc8"
                strokeWidth="1"
                opacity="0.3"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            </svg>
          </motion.div>
        );

      case "dysonSwarm":
        return (
          <motion.div className="relative w-full h-full flex items-center justify-center">
            {/* Sun Core - Pulsing */}
            <motion.div
              className="relative z-10"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.9, 1, 0.9],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              <Sun size={100} className="text-yellow-400" />
            </motion.div>

            {/* Scattered dots around the sun - randomly positioned, farther from sun */}
            {[
              { x: -75, y: -50, delay: 0 },
              { x: 80, y: -40, delay: 0.2 },
              { x: -65, y: 60, delay: 0.4 },
              { x: 70, y: 55, delay: 0.6 },
              { x: -85, y: 30, delay: 0.8 },
              { x: 60, y: -70, delay: 1.0 },
            ].map((dot, i) => (
              <motion.div
                key={`dot-${i}`}
                className="absolute w-3 h-3 bg-[#00ffc8] rounded-full"
                style={{
                  left: `calc(50% + ${dot.x}px)`,
                  top: `calc(50% + ${dot.y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
                animate={{
                  scale: [0.8, 1.3, 0.8],
                  opacity: [0.4, 1, 0.4],
                  boxShadow: [
                    "0 0 8px rgba(0, 255, 200, 0.5)",
                    "0 0 16px rgba(0, 255, 200, 0.9)",
                    "0 0 8px rgba(0, 255, 200, 0.5)",
                  ],
                }}
                transition={{
                  duration: 1.5 + (i % 2) * 0.3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: dot.delay,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        );

      case "galaxyCore":
        return (
          <motion.div className="relative w-full h-full flex items-center justify-center">
            <motion.svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 200 200"
              style={{ transformOrigin: "center" }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {/* Central Core - Enhanced */}
              <circle cx="100" cy="100" r="10" fill="#00ffc8" opacity="0.9" />
              <circle
                cx="100"
                cy="100"
                r="15"
                fill="none"
                stroke="#00ffc8"
                strokeWidth="1.5"
                opacity="0.5"
              />
              <circle
                cx="100"
                cy="100"
                r="20"
                fill="none"
                stroke="#00ffc8"
                strokeWidth="1"
                opacity="0.3"
              />

              {/* Primary Spiral Arms - Enhanced with more depth */}
              {[0, 1, 2, 3].map((armIndex) => {
                const armAngle = (armIndex * 90) % 360;
                const points: string[] = [];
                for (let i = 0; i <= 25; i++) {
                  const angle = (armAngle + i * 12) * (Math.PI / 180);
                  const radius = 12 + i * 3.2;
                  const x = 100 + radius * Math.cos(angle);
                  const y = 100 + radius * Math.sin(angle);
                  points.push(`${i === 0 ? "M" : "L"} ${x} ${y}`);
                }
                return (
                  <motion.path
                    key={armIndex}
                    d={points.join(" ")}
                    fill="none"
                    stroke="#00ffc8"
                    strokeWidth={armIndex < 2 ? "2" : "1.5"}
                    opacity={armIndex < 2 ? "0.7" : "0.4"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                );
              })}

              {/* Secondary spiral arms (rotating in opposite direction) */}
              <motion.g
                animate={{ rotate: -360 }}
                transition={{
                  duration: 40,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                style={{ transformOrigin: "100px 100px" }}
              >
                {[45, 135, 225, 315].map((armAngle, armIndex) => {
                  const points: string[] = [];
                  for (let i = 0; i <= 18; i++) {
                    const angle = (armAngle + i * 10) * (Math.PI / 180);
                    const radius = 10 + i * 2.5;
                    const x = 100 + radius * Math.cos(angle);
                    const y = 100 + radius * Math.sin(angle);
                    points.push(`${i === 0 ? "M" : "L"} ${x} ${y}`);
                  }
                  return (
                    <path
                      key={`secondary-${armIndex}`}
                      d={points.join(" ")}
                      fill="none"
                      stroke="#00ffc8"
                      strokeWidth="1"
                      opacity="0.25"
                      strokeLinecap="round"
                    />
                  );
                })}
              </motion.g>

              {/* Tertiary spiral layer for more depth */}
              <motion.g
                animate={{ rotate: 180 }}
                transition={{
                  duration: 50,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                style={{ transformOrigin: "100px 100px" }}
              >
                {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map(
                  (armAngle, armIndex) => {
                    const points: string[] = [];
                    for (let i = 0; i <= 12; i++) {
                      const angle = (armAngle + i * 8) * (Math.PI / 180);
                      const radius = 8 + i * 2;
                      const x = 100 + radius * Math.cos(angle);
                      const y = 100 + radius * Math.sin(angle);
                      points.push(`${i === 0 ? "M" : "L"} ${x} ${y}`);
                    }
                    return (
                      <path
                        key={`tertiary-${armIndex}`}
                        d={points.join(" ")}
                        fill="none"
                        stroke="#00ffc8"
                        strokeWidth="0.8"
                        opacity="0.15"
                        strokeLinecap="round"
                      />
                    );
                  }
                )}
              </motion.g>

              {/* Particle effects - stars in spiral arms */}
              {Array.from({ length: 20 }).map((_, i) => {
                const angle = i * 18 * (Math.PI / 180);
                const radius = 30 + (i % 5) * 15;
                const x = 100 + radius * Math.cos(angle);
                const y = 100 + radius * Math.sin(angle);
                return (
                  <motion.circle
                    key={`particle-${i}`}
                    cx={x}
                    cy={y}
                    r="1.5"
                    fill="#00ffc8"
                    opacity="0.6"
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 2 + (i % 3),
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.1,
                    }}
                  />
                );
              })}

              {/* Outer ring */}
              <circle
                cx="100"
                cy="100"
                r="88"
                fill="none"
                stroke="#00ffc8"
                strokeWidth="0.5"
                opacity="0.2"
              />
            </motion.svg>
          </motion.div>
        );

      default:
        return <Icon size={120} className={planet.color} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />

      {/* Modal Content */}
      <motion.div
        key={planet.tier}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden"
      >
        {/* Glassmorphism Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00ffc8]/5 to-transparent opacity-50" />

        <div className="relative z-10 p-6 md:p-8 pb-20 md:pb-8">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors z-30"
          >
            <X size={20} className="text-white/70" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Animation */}
            <div className="h-[300px] md:h-[400px] flex items-center justify-center">
              {renderAnimation()}
            </div>

            {/* Right: Content */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {planet.title}
              </h3>
              <p className="text-sm md:text-base text-white/70 leading-relaxed font-mono">
                {planet.description}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons - Positioned at bottom center, below content on mobile */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
          {onPrev && hasPrev && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="p-2.5 md:p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#00ffc8]/50 transition-all backdrop-blur-sm"
              aria-label="Previous"
            >
              <ChevronLeft
                size={20}
                className="md:w-6 md:h-6 text-white/70 hover:text-[#00ffc8]"
              />
            </button>
          )}
          {onNext && hasNext && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="p-2.5 md:p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#00ffc8]/50 transition-all backdrop-blur-sm"
              aria-label="Next"
            >
              <ChevronRight
                size={20}
                className="md:w-6 md:h-6 text-white/70 hover:text-[#00ffc8]"
              />
            </button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
