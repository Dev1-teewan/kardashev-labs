"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Sun, Sparkles } from "lucide-react";
import { EvolutionaryMapModal } from "./evolutionary-map-modal";

const planetData = [
  {
    tier: "T0",
    title: "T0: Local Mastery",
    description:
      "Current state. Human-driven coordination with limited automation. Humanity currently resides at T0.7—stagnant.",
    animation: "flickeringPlanet",
    icon: Globe,
    color: "#ffffff",
    progress: 0.75,
  },
  {
    tier: "T1",
    title: "T1: Planetary Mastery",
    description:
      "Full planetary energy harnessed through AI-Blockchain synergy. Complete coordination of planetary resources.",
    animation: "gridPlanet",
    icon: Globe,
    color: "#00ffc8",
    progress: 1.0,
  },
  {
    tier: "T2",
    title: "T2: Stellar Mastery",
    description:
      "Star energy captured via Dyson Swarms. Civilization scales beyond planetary limits through stellar energy mastery.",
    animation: "dysonSwarm",
    icon: Sun,
    color: "#ffffff",
    progress: 0.0,
  },
  {
    tier: "T3",
    title: "T3: Galactic Mastery",
    description:
      "Entire galaxy energy harnessed. Multi-stellar coordination at scale. Civilization operates across galactic distances.",
    animation: "galaxyCore",
    icon: Sparkles,
    color: "#ffffff",
    progress: 0.0,
  },
];

export function KardashevEvolutionaryMap() {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [starPositions, setStarPositions] = useState<
    Array<{ left: number; top: number; duration: number; delay: number }>
  >([]);

  // Auto-play carousel (only when modal is open)
  useEffect(() => {
    if (!isAutoPlaying || !selectedPlanet) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % planetData.length;
        setSelectedPlanet(planetData[next].tier);
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, selectedPlanet]);

  // Resume auto-play after 5 seconds of no interaction
  const handleManualInteraction = (tier: string) => {
    setIsAutoPlaying(true); // Start auto-play when modal opens
    setSelectedPlanet(tier);
    setCurrentIndex(planetData.findIndex((p) => p.tier === tier));

    // Clear existing timeout
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    // Resume after 5 seconds
    resumeTimeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
  };

  const handleNavigation = (direction: "prev" | "next") => {
    setIsAutoPlaying(false);
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % planetData.length
        : (currentIndex - 1 + planetData.length) % planetData.length;
    setCurrentIndex(newIndex);
    setSelectedPlanet(planetData[newIndex].tier);

    // Clear existing timeout
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    // Resume after 5 seconds
    resumeTimeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  // Generate star positions only on client to avoid hydration mismatch
  useEffect(() => {
    const stars = Array.from({ length: 30 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 2 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
    setStarPositions(stars);
  }, []);

  return (
    <>
      <div className="relative w-full max-w-5xl mx-auto">
        {/* Star Field Background */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {starPositions.map((star, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: star.duration,
                repeat: Number.POSITIVE_INFINITY,
                delay: star.delay,
              }}
            />
          ))}
        </div>

        {/* Planets Grid */}
        <div className="relative py-8 md:py-16 px-0 md:px-4">
          {/* Dashed Path Connecting T0 -> T1 -> T2 -> T3 - Hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute top-1/2 left-[5%] right-[10%] -translate-y-1/2 z-0 pointer-events-none">
            <div className="relative h-[2px]">
              {/* Dashed grayed path for future targets - Shortened */}
              <svg
                className="absolute inset-0 w-full h-full"
                style={{ overflow: "visible" }}
              >
                <line
                  x1="0%"
                  y1="1"
                  x2="100%"
                  y2="1"
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth="2"
                  strokeDasharray="8,4"
                />
              </svg>
              {/* Active path up to T0 - Shortened */}
              <div
                className="absolute h-full bg-gradient-to-r from-[#00ffc8]/60 to-[#00ffc8]/40"
                style={{ left: "0%", width: "25%" }}
              />
            </div>
          </div>

          {/* Mobile: Horizontal Scrollable Container */}
          <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory md:overflow-visible relative">
            <div className="flex gap-4 md:gap-0 justify-between min-w-max md:min-w-0 items-start md:items-center px-4 md:px-0 pb-2 md:pb-0 relative">
              {/* Mobile Connecting Line - positioned to span full content width */}
              <div className="md:hidden absolute top-1/2 left-10 right-4 -translate-y-1/2 z-0 pointer-events-none h-[1px]">
                <div
                  className="relative h-full"
                  style={{ width: "calc(100% - 48px)" }}
                >
                  {/* Dashed grayed path for future targets - full width */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    style={{ overflow: "visible" }}
                  >
                    <line
                      x1="0"
                      y1="0"
                      x2="100%"
                      y2="0"
                      stroke="rgba(255, 255, 255, 0.15)"
                      strokeWidth="1"
                      strokeDasharray="4,3"
                    />
                  </svg>
                  {/* Active path from T0 center to T1 center - shorter on mobile */}
                  <div
                    className="absolute h-full bg-gradient-to-r from-[#00ffc8]/50 to-[#00ffc8]/30"
                    style={{ left: "0", width: "calc(23% + 6px)" }}
                  />
                </div>
              </div>
              {planetData.map((planet, index) => {
                const Icon = planet.icon;
                const isCurrent = planet.tier === "T0";
                const isTarget = planet.tier === "T1";
                const isFuture = index > 1; // T2, T3 are future

                return (
                  <motion.button
                    key={planet.tier}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    onClick={() => handleManualInteraction(planet.tier)}
                    className="relative group flex flex-col items-center z-20 cursor-pointer snap-center shrink-0 md:w-auto pt-6 md:pt-0"
                  >
                    {/* Planet Container */}
                    <div className="relative z-20">
                      {/* Glow Effect */}
                      <motion.div
                        className={`absolute inset-0 rounded-full blur-xl ${
                          isCurrent
                            ? "bg-[#00ffc8]/40"
                            : isTarget
                              ? "bg-[#00ffc8]/30"
                              : "bg-white/20"
                        }`}
                        animate={
                          isCurrent
                            ? {
                                scale: [1, 1.3, 1],
                                opacity: [0.4, 0.8, 0.4],
                              }
                            : {}
                        }
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      />

                      {/* Planet Icon Container */}
                      <motion.div
                        className={`relative w-12 h-12 md:w-20 md:h-20 rounded-full border-2 flex items-center justify-center ${
                          isCurrent
                            ? "border-[#00ffc8] bg-[#050505]"
                            : isTarget
                              ? "border-[#00ffc8]/50 bg-[#050505]"
                              : "border-white/30 bg-[#050505]"
                        }`}
                        whileHover={{
                          scale: 1.15,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon
                          size={isCurrent || isTarget ? 40 : 32}
                          className={`w-7 h-7 md:w-10 md:h-10 ${
                            isCurrent
                              ? "text-[#00ffc8]"
                              : isTarget
                                ? "text-[#00ffc8]/80"
                                : "text-white/60"
                          }`}
                        />

                        {/* T0 Progress Indicator */}
                        {planet.tier === "T0" && (
                          <motion.div
                            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 md:w-12 h-1 bg-white/10 rounded-full overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                          >
                            <motion.div
                              className="h-full bg-[#00ffc8]"
                              initial={{ width: 0 }}
                              animate={{ width: "70%" }}
                              transition={{ duration: 1, delay: 1.2 }}
                            />
                          </motion.div>
                        )}
                      </motion.div>

                      {/* T0 Current Badge */}
                      {isCurrent && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute -top-5 md:-top-8 left-1/2 -translate-x-1/2 px-1.5 py-0.5 md:px-3 md:py-1 bg-[#00ffc8] rounded-full"
                        >
                          <span className="text-[7px] md:text-[10px] font-mono font-bold text-[#050505] tracking-tight md:tracking-wider whitespace-nowrap">
                            CURRENT
                          </span>
                        </motion.div>
                      )}

                      {/* T1 Target Badge */}
                      {isTarget && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute -top-5 md:-top-8 left-1/2 -translate-x-1/2 px-1.5 py-0.5 md:px-3 md:py-1 bg-[#00cc9f] rounded-full"
                        >
                          <span className="text-[7px] md:text-[10px] font-mono font-bold text-[#050505] tracking-tight md:tracking-wider whitespace-nowrap">
                            TARGET
                          </span>
                        </motion.div>
                      )}
                    </div>

                    {/* Tier Label */}
                    <div className="mt-3 md:mt-4 text-center">
                      <div
                        className={`font-mono text-[10px] md:text-sm font-bold mb-0.5 md:mb-1 ${
                          isCurrent
                            ? "text-[#00ffc8]"
                            : isTarget
                              ? "text-[#00ffc8]/80"
                              : "text-white/60"
                        }`}
                      >
                        {planet.tier}
                      </div>
                      <div
                        className={`text-[8px] md:text-xs font-mono tracking-wider max-w-[60px] md:max-w-none break-words ${
                          isCurrent
                            ? "text-[#00ffc8]/80"
                            : isTarget
                              ? "text-[#00ffc8]/60"
                              : "text-white/50"
                        }`}
                      >
                        {planet.title.split(":")[1]?.trim() || planet.title}
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Modal with Navigation */}
      <AnimatePresence mode="wait">
        {selectedPlanet && (
          <EvolutionaryMapModal
            planet={planetData[currentIndex]}
            onClose={() => {
              setSelectedPlanet(null);
              setIsAutoPlaying(true);
            }}
            onPrev={() => handleNavigation("prev")}
            onNext={() => handleNavigation("next")}
            hasPrev={currentIndex > 0}
            hasNext={currentIndex < planetData.length - 1}
          />
        )}
      </AnimatePresence>
    </>
  );
}
