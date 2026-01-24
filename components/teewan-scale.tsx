"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Bot, Network, Rocket } from "lucide-react";

const scaleData = [
  {
    tier: "T0",
    name: "Manual",
    description:
      "Human-operated systems with limited automation. Manual execution of trades and operations.",
    icon: Zap,
    color: "#ffffff",
    opacity: 0.3,
  },
  {
    tier: "T0.5",
    name: "Semi-Auto",
    description:
      "Basic scripting and rule-based systems. Partial automation with human oversight required.",
    icon: Bot,
    color: "#ffffff",
    opacity: 0.5,
  },
  {
    tier: "T1",
    name: "Autonomous AI",
    description:
      "Fully autonomous multi-agent systems. Self-coordinating infrastructure with adaptive intelligence.",
    icon: Network,
    color: "#00ffc8",
    opacity: 1,
    active: true,
  },
  {
    tier: "T2",
    name: "Emergent",
    description:
      "Self-evolving systems with cross-protocol coordination. Predictive market infrastructure.",
    icon: Rocket,
    color: "#ffffff",
    opacity: 0.3,
  },
];

export function TeeWanScale() {
  const [selectedTier, setSelectedTier] = useState(2);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="scale" className="relative py-20 md:py-32 overflow-hidden">
      {/* Section Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ffc8]/[0.02] to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="inline-block px-4 py-2 mb-6 text-xs font-mono text-[#00ffc8]/80 tracking-widest border border-[#00ffc8]/20 rounded-full bg-[#00ffc8]/5">
            THE TEEWAN SCALE
          </span>
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">
            Evolution of On-Chain Intelligence
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-base text-white/50">
            Tracking the progression from manual operations to fully autonomous
            coordination systems.
          </p>
        </motion.div>

        <div
          ref={scrollRef}
          className="relative overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible scrollbar-hide"
        >
          <div className="relative min-w-[600px] md:min-w-0">
            <div className="absolute top-[70px] md:top-[70px] left-8 right-8 h-px bg-white/10 z-0" />
            <div className="absolute top-[70px] md:top-[70px] left-8 w-[60%] h-px bg-gradient-to-r from-[#00ffc8]/50 to-transparent z-0" />

            {/* Timeline Items */}
            <div className="relative flex justify-between items-start px-4 md:px-0">
              {scaleData.map((item, index) => {
                const Icon = item.icon;
                const isSelected = selectedTier === index;
                const isActive = item.active;

                return (
                  <motion.button
                    key={item.tier}
                    onClick={() => setSelectedTier(index)}
                    className="relative group flex flex-col items-center cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Active Badge - positioned above */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-3 px-3 py-1 bg-[#00ffc8] rounded-full"
                      >
                        <span className="text-[8px] md:text-[10px] font-mono font-bold text-[#050505] tracking-wider whitespace-nowrap">
                          TYPEONE LABS
                        </span>
                      </motion.div>
                    )}

                    {/* Spacer for non-active items */}
                    {!isActive && <div className="mb-3 h-6" />}

                    <div
                      className={`relative w-16 h-16 md:w-20 md:h-20 rounded-2xl border-2 flex items-center justify-center transition-all duration-500 z-10 bg-[#050505] ${
                        isActive
                          ? "border-[#00ffc8] bg-[#0a0a0a]"
                          : isSelected
                            ? "border-white/30 bg-[#0a0a0a]"
                            : "border-white/10 bg-[#050505] hover:border-white/20"
                      }`}
                    >
                      {/* Glow Effect for Active */}
                      {isActive && (
                        <>
                          <motion.div
                            className="absolute inset-0 rounded-2xl bg-[#00ffc8]/30 blur-xl -z-10"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                            }}
                          />
                          <motion.div
                            className="absolute -inset-1 rounded-2xl border border-[#00ffc8]/50"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                            }}
                          />
                        </>
                      )}

                      <Icon
                        className="w-6 h-6 md:w-8 md:h-8 relative z-10 transition-colors duration-300"
                        style={{ color: item.color, opacity: item.opacity }}
                      />
                    </div>

                    <div className="mt-4 text-center">
                      <div
                        className={`font-mono text-xs md:text-sm font-bold mb-1 ${
                          isActive ? "text-[#00ffc8]" : "text-white/50"
                        }`}
                      >
                        {item.tier}
                      </div>
                      <div
                        className={`text-[10px] md:text-xs font-mono tracking-wider max-w-[70px] md:max-w-none ${
                          isActive ? "text-[#00ffc8]/80" : "text-white/30"
                        }`}
                      >
                        {item.name}
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile scroll hint */}
        <div className="flex justify-center mt-2 md:hidden">
          <span className="text-[10px] font-mono text-white/30">
            ← Scroll to explore →
          </span>
        </div>

        {/* Selected Tier Description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTier}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-16 md:mt-32 max-w-2xl mx-auto"
          >
            <div
              className={`p-4 md:p-6 rounded-2xl border ${
                scaleData[selectedTier].active
                  ? "border-[#00ffc8]/30 bg-[#00ffc8]/5"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              <p
                className={`text-center text-sm md:text-base leading-relaxed ${
                  scaleData[selectedTier].active
                    ? "text-white/80"
                    : "text-white/50"
                }`}
              >
                {scaleData[selectedTier].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
